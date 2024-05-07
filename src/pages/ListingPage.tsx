import { useUniversities } from "../contexts/UniversitiesContext";
import UniversitiesList from "../components/UniversitiesList";

const ListingPage = () => {
  const { universities } = useUniversities();

  return (
    <div>
      <h1>Universities List</h1>
      <UniversitiesList items={universities} />
    </div>
  );
};

export default ListingPage;
