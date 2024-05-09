import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { UniversitiesProvider } from "./contexts/UniversitiesContext";
import ListingPage from "./pages/ListingPage";
import DetailsPage from "./pages/DetailsPage";
import ErrorFallback from "./core/components/ErrorFallback";

import "./App.css";

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <UniversitiesProvider>
          <Routes>
            <Route path="/" element={<ListingPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </UniversitiesProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
