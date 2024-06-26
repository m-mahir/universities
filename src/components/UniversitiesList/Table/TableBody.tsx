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
  const { isLoading, deleteUniversity } = useUniversities();

  return (
    <tbody>
      {isLoading ? (
        <TableSkeleton colCount={columns.length + 1} rowsCount={15} />
      ) : (
        tableData.map((data) => (
          <TableRow
            key={data.name}
            rowData={data}
            columns={columns}
            deleteUniversity={deleteUniversity}
          />
        ))
      )}
    </tbody>
  );
};

export default TableBody;
