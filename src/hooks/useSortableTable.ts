import { useState } from "react";

interface Column {
  accessor: string;
  sortbyOrder?: "asc" | "desc";
}

type TableData<T> = T[];
type Indexable = { [key: string]: string | string[] };

function getDefaultSorting<T extends Indexable>(
  defaultTableData: TableData<T>,
  columns: Column[]
): TableData<T> {
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.find((column) => column.sortbyOrder);

    const { accessor = "name", sortbyOrder = "asc" } = filterColumn || {};

    if (a[accessor] === null) return 1;
    if (b[accessor] === null) return -1;
    if (a[accessor] === null && b[accessor] === null) return 0;

    const ascending = a[accessor]
      .toString()
      .localeCompare(b[accessor].toString(), "en", {
        numeric: true,
      });

    return sortbyOrder === "asc" ? ascending : -ascending;
  });
  return sorted;
}

export const useSortableTable = <T extends Indexable>(
  data: TableData<T>,
  columns: Column[],
  setUniversities: (universities: TableData<T>) => void
) => {
  const [tableData, setTableData] = useState<TableData<T>>(
    getDefaultSorting(data, columns)
  );

  const handleSorting = (sortField: string, sortOrder: "asc" | "desc") => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
      setUniversities(sorted);
    }
  };

  return { tableData, handleSorting, setTableData };
};
