import { useEffect } from "react";
import { useSortableTable } from "../hooks/useSortableTable";
import { IUniversity } from "../types/unversity";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

type Column = {
  label: string;
  accessor: string;
  sortable: boolean;
};

interface TableProps {
  data: IUniversity[];
  columns: Column[];
  setUniversities: (universities: IUniversity[]) => void;
}

const Table: React.FC<TableProps> = ({ data, columns, setUniversities }) => {
  const { handleSorting, setTableData } = useSortableTable<IUniversity>(
    data,
    setUniversities
  );

  useEffect(() => setTableData(data), [data]);

  return (
    <table className="table">
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody
        columns={columns}
        tableData={data as unknown as IUniversity[]}
      />
    </table>
  );
};

export default Table;
