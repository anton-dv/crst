import React, { FC } from "react";
import { TextColor } from "./TextColor";
import classes from "./text.module.scss";

export type TextProps = { 
  color?: string | TextColor;
  block?: boolean;
  children: React.ReactNode;
};

export const Text: FC<TextProps> = ({ children, color, block }) => {
  return (
    <span style={{ color, display: block ? "block" : undefined }} className={classes.text}>
      {children}
    </span>
  );
};
