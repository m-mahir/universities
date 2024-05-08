// UniversityService.test.js
import axios from "axios";
import UniversityService from "../../services";

jest.mock("axios");

const localStorageMock = (function () {
  let store: { [key: string]: string | string[] } = {};
  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("UniversityService", () => {
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("fetchUniversities should fetch data from API and transform it", async () => {
    const responseData = [
      {
        "state-province": null,
        domains: ["example.com"],
        web_pages: ["http://example.com"],
        name: "Example University",
        alpha_two_code: "EX",
        country: "ExampleLand",
      },
    ];

    axios.get = jest.fn().mockResolvedValue({ data: responseData });

    const result = await UniversityService.fetchUniversities();

    expect(result).toEqual([
      {
        stateProvince: null,
        domains: ["example.com"],
        webPages: ["http://example.com"],
        name: "Example University",
        alphaTwoCode: "EX",
        country: "ExampleLand",
      },
    ]);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "universities",
      JSON.stringify(responseData)
    );
  });

  it("fetchUniversities should return data from cache if API call fails", async () => {
    axios.get = jest.fn().mockRejectedValue(new Error("Network error"));

    const cachedData = [
      {
        stateProvince: null,
        domains: ["example.com"],
        webPages: ["http://example.com"],
        name: "Example University",
        alphaTwoCode: "EX",
        country: "ExampleLand",
      },
    ];
    localStorage.setItem("universities", JSON.stringify(cachedData));
    const result = await UniversityService.fetchUniversities();

    expect(result).toEqual(cachedData);
  });

  it("fetchUniversities should return empty array and log error if API call fails and no cache", async () => {
    axios.get = jest.fn().mockRejectedValue(new Error("Network error"));
    console.error = jest.fn();

    const result = await UniversityService.fetchUniversities();

    expect(result).toEqual([]);
    expect(console.error).toHaveBeenCalledWith(
      "Failed to fetch and no cache available."
    );
  });
});
