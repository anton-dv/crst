import { FC } from "react";
import { TextColor } from "./TextColor";
import classes from "./text.module.scss";

export type TextPrimaryProps = {
  children: React.ReactNode;
  block?: boolean;
};

export const TextPrimary: FC<TextPrimaryProps> = ({ children, block }) => {
  return (
    <span
      style={{ color: TextColor.Primary, display: block ? "block" : undefined }}
      className={classes.text}
    >
      {children}
    </span>
  );
};
