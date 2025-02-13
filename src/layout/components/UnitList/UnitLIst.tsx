import { FC } from "react";
import { Col, Row } from "antd";
import { UnitCard } from "../UnitCard/UnitCard";
import { Message } from "../../ui/Message/Message";
import { Button } from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../router/Routes";
import { useLocale } from "../../../hooks/useLocale";
import { unitListBackLocales, unitListEmptyLocales } from "./unitListLocales";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Locale, LocaleText } from "../../../types/Locale";
import { useBreadcrumb } from "../../../hooks/useBreadcrumb";
import { homePageTitleLocales } from "../../pages/HomePage/homePageLocales";
import { areaPageLocales } from "../../pages/AreasPage/areaPageLocales";
import { useUnits } from "../../../hooks/useUnits";

import classes from "./unit-list.module.scss";

export type UnitListProps = {
  title: LocaleText;
  id: string;
};

export const UnitList: FC<UnitListProps> = ({ id, title }) => {
  const navigate = useNavigate();
  const locale = useLocale();
  const units = useUnits(id);

  useBreadcrumb([
    {
      title: homePageTitleLocales[locale.current],
      onClick: () => navigate(Routes.HomePath),
      className: "breadcrumb-link",
    },
    {
      title: areaPageLocales[locale.current],
      onClick: () => navigate(Routes.AreasPath),
      className: "breadcrumb-link",
    },
    { title: title[locale.current] },
  ]);

  if (!units.length) {
    const backButton = (
      <Button
        onClick={() => navigate(Routes.AreasPath)}
        className={classes["unit-list__button"]}
      >
        <div style={{ paddingBottom: "5px" }}>
          {unitListBackLocales[locale.current]}
        </div>
      </Button>
    );

    return (
      <Message
        text={unitListEmptyLocales[locale.current]}
        second={backButton}
      />
    );
  }

  return (
    <>
      <SectionHeader title={title[locale.current]} />
      <Row
        gutter={[16, 16]}
        style={
          locale.current === Locale.AR
            ? { flexDirection: "row-reverse" }
            : undefined
        }
      >
        {units.map((unit) => (
          <Col key={unit.id} span={24} md={12} lg={8}>
            <UnitCard id={unit.id} />
          </Col>
        ))}
      </Row>
    </>
  );
};
