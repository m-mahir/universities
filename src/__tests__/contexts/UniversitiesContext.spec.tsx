import { render, screen, act, waitFor } from "@testing-library/react";
import { UniversitiesProvider, useUniversities } from "../../contexts/UniversitiesContext";

// Mock the UniversityService module
jest.mock("../services", () => ({
  fetchUniversities: jest.fn(),
}));

const TestComponent = () => {
  const { universities, isLoading } = useUniversities();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        universities.map((univ) => <div key={univ.name}>{univ.name}</div>)
      )}
    </>
  );
};

describe("UniversitiesProvider", () => {
  it("provides university context and handles loading state", async () => {
    jest.mock("../../services", () => ({
      fetchUniversities: jest
        .fn()
        .mockResolvedValue([
          { name: "University A" },
          { name: "University B" },
        ]),
    }));
    render(
      <UniversitiesProvider>
        <TestComponent />
      </UniversitiesProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      expect(screen.getByText("University A")).toBeInTheDocument();
      expect(screen.getByText("University B")).toBeInTheDocument();
    });
  });

  it("deletes a university from the list", async () => {
    jest.mock("../../services", () => ({
      fetchUniversities: jest
        .fn()
        .mockResolvedValue([
          { name: "University A" },
          { name: "University B" },
        ]),
    }));

    const { rerender } = render(
      <UniversitiesProvider>
        <TestComponent />
      </UniversitiesProvider>
    );

    // Wait for initial loading to complete
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    act(() => {
      useUniversities().deleteUniversity("University A");
    });

    rerender(
      <UniversitiesProvider>
        <TestComponent />
      </UniversitiesProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText("University A")).not.toBeInTheDocument();
      expect(screen.getByText("University B")).toBeInTheDocument();
    });
  });
});
