import { FC } from "react";
import { IUniversity } from "../types/unversity";

import "./UniversityList.css";
import Table from "./Table";

interface IProps {
  universities: IUniversity[];
  setUniversities: (universities: IUniversity[]) => void;
}

const UniversitiesList: FC<IProps> = (props) => {
  const { universities, setUniversities } = props;

  const columns = [
    { label: "Name", accessor: "name", sortable: true },
    { label: "State", accessor: "stateProvince", sortable: true },
  ];

  return (
    <Table
      data={universities}
      columns={columns}
      setUniversities={setUniversities}
    />
  );
};

export default UniversitiesList;
