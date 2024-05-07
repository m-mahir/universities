import { useUniversities } from "../contexts/UniversitiesContext";
import { useParams } from "react-router-dom";
import { IUniversity } from "../types/unversity";

const DetailsPage = () => {
  const { universities } = useUniversities();
  const { id } = useParams();
  const university = universities.find(
    (university: IUniversity) => university.name === id
  );

  return (
    <div>
      <h1>University Details</h1>
      <div>Name: {university?.name}</div>
    </div>
  );
};

export default DetailsPage;
