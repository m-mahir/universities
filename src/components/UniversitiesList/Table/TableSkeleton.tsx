import { FC } from "react";

interface IProps {
  colCount: number;
  rowsCount: number;
}

const TableSkeleton: FC<IProps> = (props) => {
  const { colCount, rowsCount } = props;

  return [...Array(rowsCount)].map((_, r) => (
    <tr key={r}>
      {[...Array(colCount)].map((_, c) => (
        <td key={c} className="loading">
          <div className="bar"></div>
        </td>
      ))}
    </tr>
  ));
};

export default TableSkeleton;
