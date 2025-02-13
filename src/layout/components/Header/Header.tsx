import { FC } from "react";
import classes from "./header.module.scss";
import { Logo } from "../../ui/Logo/Logo";
import { ThemeSwitch } from "../../ui/ThemeSwitch/ThemeSwitch";
import { useTheme } from "../../../hooks/useTheme";
import { LocaleButton } from "../../ui/LocaleButton/LocaleButton";
import { TiThMenu } from "react-icons/ti";
import { Search } from "../../ui/Search/Search";

export const Header: FC = () => {
  const theme = useTheme();

  return (
    <header className={`${classes.header} ${classes[`header--${theme.current}`]}`}>
      <Logo />
      <div className={classes.header__customization}>
        <Search />
        <ThemeSwitch />
        <LocaleButton />
        <TiThMenu color="white" size={25} style={{cursor: "pointer", marginTop: "-2px"}}/>
      </div>
    </header>
  );
};
