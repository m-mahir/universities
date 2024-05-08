import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UniversityDetailsHeader from "../../../components/UniversityDetails/Header";

describe("UniversityDetailsHeader", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <UniversityDetailsHeader />
      </MemoryRouter>
    );

    expect(screen.getByText("Universities/").closest("a")).toHaveAttribute(
      "href",
      "/"
    );

    expect(screen.getByText("Details").tagName).toBe("STRONG");
  });
});
