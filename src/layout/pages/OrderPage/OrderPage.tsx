import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocale } from "../../../hooks/useLocale";
import { useBreadcrumb } from "../../../hooks/useBreadcrumb";
import { homePageTitleLocales } from "../HomePage/homePageLocales";
import { areaPageLocales } from "../AreasPage/areaPageLocales";
import { useUnit } from "../../../hooks/useUnit";
import { useArea } from "../../../hooks/useArea";
import { AreaItem } from "../../../data/areasData";
import { UnitsDataType } from "../../../data/unitsData";
import { Routes } from "../../../router/Routes";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";

export const OrderPage: FC = () => {
  const navigate = useNavigate();
  const locale = useLocale();

  const { id } = useParams();

  const unit = useUnit(id) as UnitsDataType;
  const area = useArea(id) as AreaItem;

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
    {
      title: area.name[locale.current],
      onClick: () => navigate(Routes.UnitsPath + "/" + area.id),
      className: "breadcrumb-link",
    },
    { title: unit.name[locale.current] },
  ]);

  if (!unit) {
    navigate(Routes.NotFoundPath);
    return null;
  }

  return (
    <div>
      <SectionHeader title={unit.name[locale.current]} />
      <div style={{padding: "50px"}}>{"{Поля для заполнения}"}</div>
    </div>
  );
};
