export interface IUniversity {
  [key: string]: string | string[];
  name: string;
  stateProvince: string;
  domains: string[];
  webPages: string[];
  alphaTwoCode: string;
  country: string;
}

export interface UniversityResponseItem {
  "state-province": string;
  domains: string[];
  web_pages: string[];
  name: string;
  alpha_two_code: string;
  country: string;
}

export type TUniversityContext = {
  universities: IUniversity[];
  setUniversities: (universities: IUniversity[]) => void;
};
