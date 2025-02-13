import { Breadcrumb } from "antd";
import { FC } from "react";
import { useAppSelector } from "../../../store/hooks";

export const Navigation: FC = () => {
  const items = useAppSelector((state) => state.navigation.items);
  return <Breadcrumb items={items} />;
};
