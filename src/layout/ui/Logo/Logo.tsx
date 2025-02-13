import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../router/Routes";

export const Logo: FC = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(Routes.HomePath)
  }
  return (
    <a style={{cursor: "pointer"}} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="30"
        viewBox="0 0 470 101"
        fill="white"
      >
        <path d="M47.07,83.29a20.6,20.6,0,0,1-20.59-20.6V0H0V61.43a49.22,49.22,0,0,0,49.22,49.22h60.07V83.29Z" />
        <path d="M180,0H117.73V27.61h62.91a19,19,0,0,1,19,19V49.9a19,19,0,0,1-19,19H117.73v41.75h26.48V96.4H180a47.72,47.72,0,0,0,47.72-47.72v-1A47.72,47.72,0,0,0,180,0" />
        <path d="M281.85,83.27a19.68,19.68,0,0,1-19.68-19.68V48.2a19.69,19.69,0,0,1,19.68-19.69h64V0H284.08a48.47,48.47,0,0,0-48.47,48.47V62.19a48.47,48.47,0,0,0,48.47,48.46h61.81V83.27Z" />
        <path d="M412.94,0H353.65V27.16h62.91a19,19,0,0,1,19,19v64.49h26.7V49.33A49.34,49.34,0,0,0,412.94,0" />
      </svg>
    </a>
  );
};
