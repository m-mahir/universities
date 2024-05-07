import { FC } from "react";
import { IUniversity } from "../types/unversity";

import "./UniversityDetails.css";

interface IProps {
  university?: IUniversity;
}

const UniversityDetails: FC<IProps> = (props) => {
  const { university } = props;

  return (
    <>
      <h2>{university?.name}</h2>
      <div className="field-group">
        <div>
          <div>
            <b>State/Province:</b> {university?.stateProvince ?? "--"}
          </div>
          <div>
            <b>Country:</b> {university?.country}
          </div>
          <div>
            <b>Code:</b> {university?.alphaTwoCode}
          </div>
        </div>
        <div>
          <div>
            <b>Domains:</b> {university?.domains}
          </div>
          <div>
            <b>webPages:</b> {university?.webPages}
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityDetails;
