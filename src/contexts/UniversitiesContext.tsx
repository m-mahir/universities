import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  IUniversity,
  TUniversityContext,
  UniversityResponseItem,
} from "../types/university";
import { GET_UNIVERSITIES_URL } from "../constants";

export const UniversitiesContext = createContext<TUniversityContext | null>(
  null
);

export const useUniversities = () =>
  useContext(UniversitiesContext) as TUniversityContext;

export const UniversitiesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [universities, setUniversities] = useState<IUniversity[]>([]);

  const deleteUniversity = (name: string) => {
    setUniversities((prevUniversities) =>
      prevUniversities.filter((university) => university.name !== name)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(GET_UNIVERSITIES_URL);
        setUniversities(
          data.map((item: UniversityResponseItem) => ({
            stateProvince: item["state-province"],
            domains: item.domains,
            webPages: item.web_pages,
            name: item.name,
            alphaTwoCode: item.alpha_two_code,
            country: item.country,
          }))
        );
        localStorage.setItem("universities", JSON.stringify(data));
      } catch (error) {
        const cachedData = localStorage.getItem("universities");
        if (cachedData) {
          setUniversities(JSON.parse(cachedData));
        } else {
          console.error("Failed to fetch and no cache available.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const value: TUniversityContext = {
    universities,
    setUniversities,
    deleteUniversity,
    loading,
  };

  return (
    <UniversitiesContext.Provider value={value}>
      {children}
    </UniversitiesContext.Provider>
  );
};
