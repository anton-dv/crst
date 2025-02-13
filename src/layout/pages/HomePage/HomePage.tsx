import { FC } from "react";

import { useBreadcrumb } from "../../../hooks/useBreadcrumb";
import { Message } from "../../ui/Message/Message";
import { Button } from "../../ui/Button/Button";

import classes from "./home-page.module.scss";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../router/Routes";
import { useLocale } from "../../../hooks/useLocale";
import { homePageButtonLocales, homePageTitleLocales } from "./homePageLocales";

export const HomePage: FC = () => {
  useBreadcrumb([]);

  const locale = useLocale();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(Routes.AreasPath);
  };

  return (
    <Message
      text={homePageTitleLocales[locale.current]}
      second={
        <Button onClick={onClick} className={classes["home-page__button"]}>
          <div style={{ paddingBottom: "4px" }}>
            {homePageButtonLocales[locale.current]}
          </div>
        </Button>
      }
    />
  );
};
