import { useUniversities } from "../contexts/UniversitiesContext";
import { useParams } from "react-router-dom";
import { IUniversity } from "../types/unversity";

const DetailsPage = () => {
  const { universities } = useUniversities();
  const { id } = useParams();
  const item = universities.find(
    (university: IUniversity) => university.name === id
  );

  return (
    <div>
      <h1>University Details</h1>
      <div>Name: {item?.name}</div>
    </div>
  );
};

export default DetailsPage;
