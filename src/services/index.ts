import axios from "axios";
import { GET_UNIVERSITIES_URL } from "../core/constants";
import { UniversityResponseItem } from "../types/university";

class UniversityService {
  static async fetchUniversities() {
    try {
      const { data } = await axios.get(GET_UNIVERSITIES_URL);
      const universities = data.map((item: UniversityResponseItem) => ({
        stateProvince: item["state-province"],
        domains: item.domains,
        webPages: item.web_pages,
        name: item.name,
        alphaTwoCode: item.alpha_two_code,
        country: item.country,
      }));
      localStorage.setItem("universities", JSON.stringify(data));
      return universities;
    } catch (error) {
      const cachedData = localStorage.getItem("universities");
      if (cachedData) {
        return JSON.parse(cachedData);
      } else {
        console.error("Failed to fetch and no cache available.");
        return [];
      }
    }
  }
}

export default UniversityService;
