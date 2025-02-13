import { Switch } from "antd";
import { FC } from "react";
import { useTheme } from "../../../hooks/useTheme";



export const ThemeSwitch: FC = () => {
  const theme = useTheme();
  return (
    <Switch onChange={theme.switch} />
  );
};
