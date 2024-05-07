import { useEffect, useState } from "react";

type TableData<T> = T[];
type Indexable = { [key: string]: string | string[] };

export const useSortableTable = <T extends Indexable>(data: TableData<T>) => {
  const [tableData, setTableData] = useState<TableData<T>>(data);

  useEffect(() => setTableData(data), [data]);

  const handleSorting = (sortField: string, sortOrder: "asc" | "desc") => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return sortOrder === "asc" ? 1 : -1;
        if (b[sortField] === null) return sortOrder === "asc" ? -1 : 1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return { tableData, handleSorting };
};
