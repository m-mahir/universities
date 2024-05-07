import React from "react";
import { IUniversity } from "../../../types/university";
import TableRow from "./TableRow";

type Column = {
  accessor: string;
};

interface TableBodyProps {
  tableData: IUniversity[];
  columns: Column[];
}

const TableBody: React.FC<TableBodyProps> = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.map((data) => (
        <TableRow key={data.name} rowData={data} columns={columns} />
      ))}
    </tbody>
  );
};

export default TableBody;
