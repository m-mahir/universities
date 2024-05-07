import React, { useState } from "react";

type Column = {
  label: string;
  accessor: string;
  sortable: boolean;
};

interface TableHeadProps {
  columns: Column[];
  handleSorting: (accessor: string, sortOrder: "asc" | "desc") => void;
}

const TableHead: React.FC<TableHeadProps> = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              key={accessor}
              onClick={
                sortable ? () => handleSortingChange(accessor) : undefined
              }
              className={cl}
            >
              {label}
            </th>
          );
        })}
        <th></th>
      </tr>
    </thead>
  );
};

export default TableHead;
