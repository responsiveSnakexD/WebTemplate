import { ColorType } from "../../../../theme/colors";

export type ButtonProps = {
  type?: ColorType;
  children: React.ReactNode;
  onClick?: () => void;
};
