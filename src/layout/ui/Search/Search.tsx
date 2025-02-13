import { FC, useState } from "react";
import { Input } from "antd";
import { FaSearch } from "react-icons/fa";
import classes from "./search.module.scss";
import { useTheme } from "../../../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../router/Routes";

export const Search: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onClick = () => {
    setMouseDown(false);
    setValue("");
    setOpen(false);
    navigate(Routes.NotFoundPath);
  };
  const onFocus = () => setOpen(true);
  const onBlur = () => {
    if (!value && !mouseDown) setOpen(false);
  };

  const onMouseDown = () => setMouseDown(true);

  return (
    <div style={{ position: "relative" }}>
      <Input
        value={value}
        className={`${classes.search} ${open ? classes["search--open"] : ""}`}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <FaSearch
        onMouseDown={onMouseDown}
        onClick={onClick}
        className={`${classes.search__button} ${
          classes[`search__button--${theme.current}`]
        }`}
        size={14}
      />
    </div>
  );
};
