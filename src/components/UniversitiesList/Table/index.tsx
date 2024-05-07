import { useSortableTable } from "../../../hooks/useSortableTable";
import { IUniversity } from "../../../types/university";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

import "./styles.css";

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
  const { handleSorting, tableData } = useSortableTable<IUniversity>(data);

  return (
    <div className="table-container">
      <table className="table">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </div>
  );
};

export default Table;
