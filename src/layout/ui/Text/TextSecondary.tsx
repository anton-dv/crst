import { FC } from "react";
import { TextColor } from "./TextColor";
import classes from "./text.module.scss";

export type TextSecondaryProps = {
  children: React.ReactNode;
  block?: boolean;
};

export const TextSecondary: FC<TextSecondaryProps> = ({ children, block }) => {
  return (
    <span style={{ color: TextColor.Secondary, display: block ? "block" : undefined }} className={classes.text}>
      {children}
    </span>
  );
};
