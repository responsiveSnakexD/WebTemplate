export type ButtonProps = {
  type?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
};
