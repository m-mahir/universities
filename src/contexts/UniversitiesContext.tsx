import { createContext, useContext, useState, useEffect } from "react";
import { IUniversity, TUniversityContext } from "../types/university";
import UniversityService from "../services";

export const UniversitiesContext = createContext<TUniversityContext | null>(
  null
);

export const useUniversities = () =>
  useContext(UniversitiesContext) as TUniversityContext;

export const UniversitiesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [universities, setUniversities] = useState<IUniversity[]>([]);

  const deleteUniversity = (name: string) => {
    setUniversities((prevUniversities) =>
      prevUniversities.filter((university) => university.name !== name)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const universities = await UniversityService.fetchUniversities();
      setUniversities(universities);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const value: TUniversityContext = {
    universities,
    setUniversities,
    deleteUniversity,
    isLoading,
  };

  return (
    <UniversitiesContext.Provider value={value}>
      {children}
    </UniversitiesContext.Provider>
  );
};
