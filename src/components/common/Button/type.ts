export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
}

export type ButtonProps = {
  type?: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
};
