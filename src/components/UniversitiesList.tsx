import { FC } from "react";
import { IUniversity } from "../types/unversity";

interface IProps {
  items: IUniversity[];
}

const UniversitiesList: FC<IProps> = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <div>{item.name}</div>
      ))}
    </>
  );
};

export default UniversitiesList;
