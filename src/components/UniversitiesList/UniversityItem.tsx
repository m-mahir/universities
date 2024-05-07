import { FC } from "react";
import { IUniversity } from "../../types/university";
import { Link } from "react-router-dom";

interface IProps {
  university: IUniversity;
}

const UniversitiesItem: FC<IProps> = (props) => {
  const { university } = props;

  return (
    <Link to={`/details/${university.name}`}>
      <div>{university.name}</div>
      <div>{university.stateProvince}</div>
    </Link>
  );
};

export default UniversitiesItem;
