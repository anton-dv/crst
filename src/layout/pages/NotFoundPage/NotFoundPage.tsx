import { FC } from "react";

import { useBreadcrumb } from "../../../hooks/useBreadcrumb";
import { Message } from "../../ui/Message/Message";

import { useLocale } from "../../../hooks/useLocale";
import {
  notFoundNavigationPageLocales,
  notFoundPageLocales,
} from "./notFoundPageLocales";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../router/Routes";

export const NotFoundPage: FC = () => {
  const locale = useLocale();
  const navigate = useNavigate();

  useBreadcrumb([
    {
      title: `< ${notFoundNavigationPageLocales[locale.current]}`,
      onClick: () => navigate(Routes.HomePath),
      className: "breadcrumb-link",
    },
  ]);

  return <Message text={"404"} second={notFoundPageLocales[locale.current]} />;
};
