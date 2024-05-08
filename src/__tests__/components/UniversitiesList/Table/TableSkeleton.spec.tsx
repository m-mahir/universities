import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import TableSkeleton from "../../../../components/UniversitiesList/Table/TableSkeleton";

describe("TableSkeleton", () => {
  it("renders a table skeleton with specified rows and columns", () => {
    render(
      <table>
        <tbody>
          <TableSkeleton colCount={3} rowsCount={5} />
        </tbody>
      </table>
    );

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(5); 

    rows.forEach((row) => {
      const cells = within(row).getAllByRole("cell");
      expect(cells).toHaveLength(3);
      cells.forEach((cell) => expect(cell).toHaveClass("loading"));
    });
  });
});
