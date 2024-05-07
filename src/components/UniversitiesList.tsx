import { FC } from "react";
import { IUniversity } from "../types/unversity";
import { Link } from "react-router-dom";

interface IProps {
  universities: IUniversity[];
}

const UniversitiesList: FC<IProps> = (props) => {
  const { universities } = props;

  return (
    <>
      {universities.map((university) => (
        <div>
          <Link to={`/details/${university.name}`}>{university.name}</Link>
        </div>
      ))}
    </>
  );
};

export default UniversitiesList;
