import { FC, useMemo, useState } from "react";
import { IUniversity } from "../../types/university";
import Table from "./Table/Table";

import SearchBar from "./SearchBar";
import "./styles.css";

interface IProps {
  universities: IUniversity[];
}

const UniversitiesList: FC<IProps> = (props) => {
  const { universities } = props;
  const [searchKey, setSearchKey] = useState<string>("");

  const columns = [
    { label: "Name", accessor: "name", sortable: true },
    { label: "State", accessor: "stateProvince", sortable: true },
  ];

  const filteredUniversities = useMemo(
    () =>
      universities.filter((university) =>
        university.name
          .toLocaleLowerCase()
          .includes(searchKey.toLocaleLowerCase())
      ),
    [universities, searchKey]
  );

  return (
    <>
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <Table data={filteredUniversities} columns={columns} />
    </>
  );
};

export default UniversitiesList;
