import { FC } from "react";

import classes from "./footer.module.scss";
import { useTheme } from "../../../hooks/useTheme";

export const Footer: FC = () => {
  const theme = useTheme();

  return (
    <footer className={`${classes.footer} ${classes[`footer--${theme.current}`]}`}>
      {"Copyright ©" + new Date().getFullYear() + " | by EUCRST"}
    </footer>
  );
};
