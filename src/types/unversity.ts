export interface IUniversity {
  name: string;
  state: boolean;
  domains: string[];
  webPages: string[];
  alphaTwoCode: string;
  country: string;
}

export type TUniversityContext = {
  universities: IUniversity[];
  setUniversities: (universities: IUniversity[]) => void;
};
