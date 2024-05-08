import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UniversitiesItem from "../../../components/UniversitiesList/UniversityItem";

describe("UniversitiesItem", () => {
  const universityMock = {
    name: "Test University",
    stateProvince: "Test State",
    country: "Testland",
    alphaTwoCode: "TL",
    domains: ["test.edu", "testuni.com"],
    webPages: ["http://test.edu", "http://testuni.com"],
  };

  it("renders university information and sets the correct link", () => {
    render(
      <MemoryRouter>
        <UniversitiesItem university={universityMock} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test University")).toBeInTheDocument();
    expect(screen.getByText("Test State")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/details/Test University");
  });
});
