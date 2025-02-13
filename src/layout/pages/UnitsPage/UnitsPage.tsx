import { FC } from "react";
import { UnitList } from "../../components/UnitList/UnitLIst";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useArea } from "../../../hooks/useArea";

export const UnitsPage: FC = () => {
  const {id} = useParams();
  const area = useArea(id)

  if(!area || !area.name) {
    return <NotFoundPage />;
  }

  return <UnitList id={id as string} title={area.name}/>
};
