import { FC } from "react";
import { Link } from "react-router-dom";

const UniversityDetailsHeader: FC = () => {
  return (
    <div className="header">
      <span>
        <Link to="/">Universities/</Link>
        <strong>Details</strong>
      </span>
    </div>
  );
};

export default UniversityDetailsHeader;
