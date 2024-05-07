import React from "react";
import { IUniversity } from "../types/unversity";
import { Link } from "react-router-dom";

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
        <tr key={data.name}>
          {columns.map(({ accessor }) => {
            const tData = data[accessor as keyof IUniversity] ?? "——";
            return (
              <td key={accessor}>
                <Link to={`/details/${data.name}`}>{tData}</Link>
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
