import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { IUniversity, TUniversityContext } from "../types/unversity";

export const UniversitiesContext = createContext<TUniversityContext | null>(
  null
);

export const useUniversities = () =>
  useContext(UniversitiesContext) as TUniversityContext;

export const UniversitiesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [universities, setUniversities] = useState<IUniversity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates"
        );
        setUniversities(data);
        localStorage.setItem("universities", JSON.stringify(data));
      } catch (error) {
        const cachedData = localStorage.getItem("universities");
        if (cachedData) {
          setUniversities(JSON.parse(cachedData));
        } else {
          console.error("Failed to fetch and no cache available.");
        }
      }
    };

    fetchData();
  }, []);

  const value: TUniversityContext = {
    universities,
    setUniversities,
  };

  return (
    <UniversitiesContext.Provider value={value}>
      {children}
    </UniversitiesContext.Provider>
  );
};
