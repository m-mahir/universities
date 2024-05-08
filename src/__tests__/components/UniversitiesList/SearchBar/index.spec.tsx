import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../../../../components/UniversitiesList/SearchBar";

describe("SearchBar Component", () => {
  test("renders search input with placeholder", () => {
    render(<SearchBar searchKey="" setSearchKey={() => {}} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("clear button appears when input is not empty and clears the input when clicked", () => {
    const setSearchKey = jest.fn();
    render(<SearchBar searchKey="React" setSearchKey={setSearchKey} />);

    const clearButton = screen.getByText("x");
    expect(clearButton).toBeInTheDocument();

    userEvent.click(clearButton);
    const input = screen.getByRole("textbox");

    expect(input).toHaveTextContent("");
  });
});
