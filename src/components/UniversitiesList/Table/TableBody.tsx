import React from "react";
import { IUniversity } from "../../../types/university";
import TableRow from "./TableRow";
import { useUniversities } from "../../../contexts/UniversitiesContext";
import TableSkeleton from "./TableSkeleton";

type Column = {
  accessor: string;
};

interface TableBodyProps {
  tableData: IUniversity[];
  columns: Column[];
}

const TableBody: React.FC<TableBodyProps> = ({ tableData, columns }) => {
  const { isLoading } = useUniversities();

  return (
    <tbody>
      {isLoading ? (
        <TableSkeleton colCount={columns.length + 1} rowsCount={10} />
      ) : (
        tableData.map((data) => (
          <TableRow key={data.name} rowData={data} columns={columns} />
        ))
      )}
    </tbody>
  );
};

export default TableBody;
