import { FC } from "react";
import { IUniversity } from "../../types/university";

import "./styles.css";

interface IProps {
  university?: IUniversity;
}

const UniversityDetails: FC<IProps> = (props) => {
  const { university } = props;

  return (
    <div className="university-card">
      <div className="header">
        <h1 className="university-name">{university?.name}</h1>
        <p className="university-country">
          {university?.country} ({university?.alphaTwoCode})
        </p>
      </div>
      <div className="content">
        {university?.domains.map((domain, index) => (
          <div key={domain} className="domain-row">
            <div className="university-domain">{domain}</div>
            <a href={university?.webPages[index]} className="university-link">
              {university?.webPages[index]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityDetails;
