import { FC, useState } from "react";
import { PiGlobeBold } from "react-icons/pi";

import classes from "./locale-button.module.scss";
import { LocaleMenu } from "./LocaleMenu/LocaleMenu";

export const LocaleButton: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{position: "relative"}} onClick={() => setOpen((prev) => !prev)}>
      <PiGlobeBold
        className={classes["locale-button"]}
        color="white"
        size={25}
        
      />
      <LocaleMenu open={open}/>
    </div>
  );
};
