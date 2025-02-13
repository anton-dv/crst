import { FC } from "react";

import classes from "./locale-menu.module.scss";
import { useLocale } from "../../../../hooks/useLocale";
import { Locale } from "../../../../types/Locale";
import { useTheme } from "../../../../hooks/useTheme";

export type LocaleMenuProps = {
  open: boolean;
};

export const LocaleMenu: FC<LocaleMenuProps> = ({ open }) => {
  const locale = useLocale();
  const theme = useTheme();

  const onClick = (lang: Locale) => locale.set(lang);

  return (
    <div
      className={`${classes["locale-menu"]} ${
        classes[`locale-menu--${theme.current}`]
      } ${open ? classes[`locale-menu--open`] : ""}`}
    >
      <ul className={classes["locale-menu__list"]}>
        <li>
          <button
            className={classes["locale-menu__button"]}
            onClick={() => onClick(Locale.RU)}
            type="button"
          >
            Русский
          </button>
        </li>
        <li>
          <button
            className={classes["locale-menu__button"]}
            onClick={() => onClick(Locale.EN)}
            type="button"
          >
            English
          </button>
        </li>
        <li>
          <button
            className={classes["locale-menu__button"]}
            onClick={() => onClick(Locale.AR)}
            type="button"
          >
            العربية
          </button>
        </li>
        <li>
          <button
            className={classes["locale-menu__button"]}
            onClick={() => onClick(Locale.CH)}
            type="button"
          >
            中文
          </button>
        </li>
        <li>
          <button
            className={classes["locale-menu__button"]}
            onClick={() => onClick(Locale.KO)}
            type="button"
          >
            한국어
          </button>
        </li>
      </ul>
    </div>
  );
};
