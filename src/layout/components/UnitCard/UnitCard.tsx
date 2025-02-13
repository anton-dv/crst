import { FC } from "react";
import { Button } from "../../ui/Button/Button";
import { Card } from "antd";
import { useLocale } from "../../../hooks/useLocale";
import { UnitCardRange } from "./UnitCardRange";
import { UnitCardDocuments } from "./UnitCardDocuments";
import { UnitCardMethods } from "./UnitCardMethods";
import { unitCardLocales } from "./unitCardLocales";
import { Locale } from "../../../types/Locale";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../router/Routes";
import { useUnit } from "../../../hooks/useUnit";

import classes from "./unit-card.module.scss";
export type UnitCardProps = {
  id: string;
};

export const UnitCard: FC<UnitCardProps> = ({ id }) => {
  const locale = useLocale();
  const navigate = useNavigate();
  const unit = useUnit(id);

  if (!unit) return null;

  const onClick = () => {
    navigate(Routes.OrderPath + "/" + unit.id)
  };

  return (
    <Card style={{ height: "100%" }}>
      <div className={classes["unit-card"]}>
        <h3>{unit.name[locale.current]}</h3>
        <UnitCardRange value={unit.range} />
        <UnitCardDocuments value={unit.documents} />
        <UnitCardMethods value={unit.methods} />

        <Button
          onClick={onClick}
          className={classes["unit-card__button"]}
          style={
            locale.current === Locale.AR ? { left: "15px" } : { right: "15px" }
          }
        >
          {unitCardLocales[locale.current]}
        </Button>
      </div>
    </Card>
  );
};
