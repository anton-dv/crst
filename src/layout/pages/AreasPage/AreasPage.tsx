import { FC } from "react";
import { AreaList } from "../../components/AreaList/AreaList";
import { useBreadcrumb } from "../../../hooks/useBreadcrumb";
import { useLocale } from "../../../hooks/useLocale";
import { homePageTitleLocales } from "../HomePage/homePageLocales";
import { areaPageLocales } from "./areaPageLocales";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../router/Routes";

export const AreasPage: FC = () => {
  const locale = useLocale();
  const navigate = useNavigate();

  useBreadcrumb([
    {
      title: homePageTitleLocales[locale.current],
      onClick: () => navigate(Routes.HomePath),
      className: "breadcrumb-link",
    },
    { title: areaPageLocales[locale.current] },
  ]);
  return <AreaList />;
};
