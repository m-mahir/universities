export interface IUniversity {
  [key: string]: string | string[];
  name: string;
  stateProvince: string;
  domains: string[];
  webPages: string[];
  alphaTwoCode: string;
  country: string;
}

export type TUniversityContext = {
  universities: IUniversity[];
  setUniversities: (universities: IUniversity[]) => void;
};
