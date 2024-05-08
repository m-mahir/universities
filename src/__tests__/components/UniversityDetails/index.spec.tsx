import { render, screen } from "@testing-library/react";
import UniversityDetails from "../../../components/UniversityDetails";

describe("UniversityDetails", () => {
  const universityMock = {
    name: "Test University",
    stateProvince: "London",
    country: "Testland",
    alphaTwoCode: "TL",
    domains: ["test.edu", "testuni.com"],
    webPages: ["http://test.edu", "http://testuni.com"],
  };

  it("renders university details correctly", () => {
    render(<UniversityDetails university={universityMock} />);

    expect(screen.getByText("Test University")).toBeInTheDocument();

    expect(screen.getByText("Testland (TL)")).toBeInTheDocument();

    universityMock.domains.forEach((domain, index) => {
      expect(screen.getByText(domain)).toBeInTheDocument();
      const link = screen.getAllByRole("link")[index];
      expect(link).toHaveAttribute("href", universityMock.webPages[index]);
      expect(link).toHaveTextContent(universityMock.webPages[index]);
    });
  });

  it("handles no university data gracefully", () => {
    render(<UniversityDetails />);

    expect(screen.queryByText(/Test University/)).toBeNull();
  });
});
