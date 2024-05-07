import { useUniversities } from "../contexts/UniversitiesContext";
import UniversitiesList from "../components/UniversitiesList";

const ListingPage = () => {
  const { universities, setUniversities } = useUniversities();

  return (
    <div>
      <h1>Universities List</h1>
      <UniversitiesList
        universities={universities}
        setUniversities={setUniversities}
      />
    </div>
  );
};

export default ListingPage;
