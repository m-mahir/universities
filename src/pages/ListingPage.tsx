import { useUniversities } from "../contexts/UniversitiesContext";
import UniversitiesList from "../components/UniversitiesList";

const ListingPage = () => {
  const { universities } = useUniversities();

  return (
    <div>
      <h2>Universities List</h2>
      <UniversitiesList universities={universities} />
    </div>
  );
};

export default ListingPage;
