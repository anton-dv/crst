import { FC } from "react";
import { useTheme } from "../../../hooks/useTheme";
import classes from "./section-header.module.scss";

export type SectionHeaderProps = {
  title: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  const theme = useTheme();

  return (
    <h2
      className={`${classes["section-header"]} ${
        classes[`section-header--${theme.current}`]
      }`}
    >
      {title}
    </h2>
  );
};
