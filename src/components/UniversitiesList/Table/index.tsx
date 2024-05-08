import { useUniversities } from "../../../contexts/UniversitiesContext";
import { useSortableTable } from "../../../core/hooks/useSortableTable";
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
  const { universities, setUniversities } = useUniversities();
  const { handleSorting } = useSortableTable<IUniversity>(universities);

  const sortUniversities = (accessor: string, sortOrder: "asc" | "desc") => {
    const sortedUniversities = handleSorting(accessor, sortOrder);
    if (sortedUniversities) {
      setUniversities(sortedUniversities);
    }
  };

  return (
    <div className="table-container">
      <table className="table">
        <TableHead columns={columns} handleSorting={sortUniversities} />
        <TableBody columns={columns} tableData={data} />
      </table>
    </div>
  );
};

export default Table;
