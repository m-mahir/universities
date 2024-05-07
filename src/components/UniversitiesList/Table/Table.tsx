import { useEffect } from "react";
import { useSortableTable } from "../../../hooks/useSortableTable";
import { IUniversity } from "../../../types/university";
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
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const { handleSorting, setTableData, tableData } =
    useSortableTable<IUniversity>(data);

  useEffect(() => setTableData(data), [data]);

  return (
    <table className="table">
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};

export default Table;
