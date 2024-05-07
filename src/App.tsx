import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UniversitiesProvider } from "./contexts/UniversitiesContext";
import ListingPage from "./pages/ListingPage";
import DetailsPage from "./pages/DetailsPage";

import "./App.css";

function App() {
  return (
    <Router>
      <UniversitiesProvider>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </UniversitiesProvider>
    </Router>
  );
}

export default App;
