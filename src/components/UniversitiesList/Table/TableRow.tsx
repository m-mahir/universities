import { useState } from "react";
import { Link } from "react-router-dom";
import { useUniversities } from "../../../contexts/UniversitiesContext";
import { IUniversity } from "../../../types/university";

type Column = {
  accessor: string;
};

interface TableRowProps {
  rowData: IUniversity;
  columns: Column[];
}

export default function TableRow({ rowData, columns }: TableRowProps) {
  const [deleted, setDeleted] = useState(false);
  const { deleteUniversity } = useUniversities();

  const handleDelete = () => {
    setDeleted(true);
    setTimeout(() => {
      deleteUniversity(rowData.name);
    }, 500); // Wait for the animation to finish before calling onDelete
  };

  return (
    <tr className={deleted ? "deleted" : ""}>
      {columns.map(({ accessor }) => {
        const tData = rowData[accessor as keyof IUniversity];
        return (
          <td key={accessor}>
            <Link to={`/details/${rowData.name}`}>
              <div>{tData}</div>
            </Link>
          </td>
        );
      })}
      <td>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
