import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { IUniversity, TUniversityContext } from "../types/unversity";
import { GET_UNIVERSITIES_URL } from "../constants/contants";

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
        const { data } = await axios.get(GET_UNIVERSITIES_URL);
        setUniversities(
          data.map((item: any) => ({
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
