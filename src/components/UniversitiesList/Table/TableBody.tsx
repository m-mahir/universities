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
  const { loading } = useUniversities();

  return (
    <tbody>
      {loading ? (
        <TableSkeleton colCount={columns.length + 1} rowsCount={6} />
      ) : (
        tableData.map((data) => (
          <TableRow key={data.name} rowData={data} columns={columns} />
        ))
      )}
    </tbody>
  );
};

export default TableBody;
