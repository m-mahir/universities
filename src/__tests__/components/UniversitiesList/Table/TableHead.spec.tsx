import { render, fireEvent, screen } from "@testing-library/react";
import TableHead from "../../../../components/UniversitiesList/Table/TableHead";

describe("TableHead", () => {
  const columnsMock = [
    { label: "Name", accessor: "name", sortable: true },
    { label: "Country", accessor: "country", sortable: false },
  ];

  const handleSortingMock = jest.fn();

  it("renders column headers and handles sorting", () => {
    render(
      <TableHead columns={columnsMock} handleSorting={handleSortingMock} />
    );

    const nameHeader = screen.getByText("Name");
    fireEvent.click(nameHeader);
    expect(handleSortingMock).toHaveBeenCalledWith("name", "asc");
    fireEvent.click(nameHeader);
    expect(handleSortingMock).toHaveBeenCalledWith("name", "desc");

    const countryHeader = screen.getByText("Country");
    fireEvent.click(countryHeader);
    expect(handleSortingMock).not.toHaveBeenCalledWith("country", "asc");
  });
});
