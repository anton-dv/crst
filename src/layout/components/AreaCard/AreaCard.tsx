import { FC, } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button/Button";
import { Routes } from "../../../router/Routes";
import { TextSecondary } from "../../ui/Text/TextSecondary";
import { TextPrimary } from "../../ui/Text/TextPrimary";
import { useLocale } from "../../../hooks/useLocale";
import { areaCardButtonLocales, areaCardLocales } from "./areaCardLocales";
import { Locale } from "../../../types/Locale";
import { useUnits } from "../../../hooks/useUnits";

import classes from "./area-card.module.scss";

export type AreaCardProps = {
  name: string;
  id: string;
};

export const AreaCard: FC<AreaCardProps> = ({ name, id }) => {
  const locale = useLocale();
  const navigate = useNavigate();
  const units = useUnits(id);

  const onClick = () => {
    navigate(Routes.UnitsPath + "/" + id);
  };

  return (
    <Card>
      <div className={classes["area-card"]}>
        <h3>{name}</h3>
        <span>
          <TextSecondary>{areaCardLocales[locale.current]}: </TextSecondary>
          <TextPrimary>{units.length}</TextPrimary>
        </span>
        <Button
          className={classes["area-card__button"]}
          onClick={onClick}
          style={
            locale.current === Locale.AR ? { left: "15px" } : { right: "15px" }
          }
        >
          {areaCardButtonLocales[locale.current]}
        </Button>
      </div>
    </Card>
  );
};
