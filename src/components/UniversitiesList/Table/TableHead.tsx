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

  const getArrowClass = (accessor: string, sortable: boolean) => {
    if (sortable) {
      if (sortField === accessor && order === "asc") {
        return "up";
      } else if (sortField === accessor && order === "desc") {
        return "down";
      }
      return "default";
    }
    return "";
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const arrowClass = getArrowClass(accessor, sortable);
          return (
            <th
              key={accessor}
              onClick={
                sortable ? () => handleSortingChange(accessor) : undefined
              }
              className={arrowClass}
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
