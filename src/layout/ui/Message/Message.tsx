import { FC } from "react";
import classes from "./message.module.scss";
import { useBreadcrumb } from "../../../hooks/useBreadcrumb";

export type MessageProps = {
  text: string;
  second?: string | React.ReactNode;
};

export const Message: FC<MessageProps> = ({ text, second }) => {
   useBreadcrumb([]);
 
  const isText = typeof second === "string";

  return (
    <div className={classes.message}>
      <span className={classes.message__text}>{text}</span>
      <span className={isText ? classes["message__second--text"] : undefined} style={{paddingBottom: "100px"}}>
        {second}
      </span>
    </div>
  );
};
