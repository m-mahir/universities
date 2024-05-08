import { FC, useMemo, useState } from "react";
import { IUniversity } from "../../types/university";
import Table from "./Table";

import SearchBar from "./SearchBar";

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
        columns.some((column) =>
          ((university[column.accessor] as string) ?? "")
            .toLocaleLowerCase()
            .includes(searchKey.toLocaleLowerCase())
        )
      ),
    [universities, searchKey]
  );

  return (
    <>
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      {searchKey && !filteredUniversities.length ? (
        <h4 className="no-data">No Result Found</h4>
      ) : (
        <Table data={filteredUniversities} columns={columns} />
      )}
    </>
  );
};

export default UniversitiesList;
