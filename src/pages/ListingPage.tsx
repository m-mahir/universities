import { useUniversities } from "../contexts/UniversitiesContext";
import UniversitiesList from "../components/UniversitiesList";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../core/components/ErrorFallback";
import { useNavigate } from "react-router-dom";

const ListingPage = () => {
  const { universities } = useUniversities();
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate("/")}
    >
      <h2>Universities List</h2>
      <UniversitiesList universities={universities} />
    </ErrorBoundary>
  );
};

export default ListingPage;
