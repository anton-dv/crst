import { CSSProperties, FC } from "react";
import { Button as AntButton } from "antd";
import { useTheme } from "../../../hooks/useTheme";

export type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};
export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  style,
}) => {
  const theme = useTheme();
  return (
    <AntButton
      className={className}
      style={style}
      onClick={onClick}
      color={theme.current === "dark" ? "default" : "blue"}
      variant="solid"
    >
      {children}
    </AntButton>
  );
};
