import { useParams } from "react-router-dom";
import UniversityDetails from "../components/UniversityDetails";
import UniversityDetailsHeader from "../components/UniversityDetails/Header";
import { useUniversities } from "../contexts/UniversitiesContext";
import { IUniversity } from "../types/university";

const DetailsPage = () => {
  const { universities } = useUniversities();
  const { id } = useParams();
  const university = universities.find(
    (university: IUniversity) => university.name === id
  );

  return (
    <div className="header">
      <UniversityDetailsHeader />
      <UniversityDetails university={university} />
    </div>
  );
};

export default DetailsPage;
