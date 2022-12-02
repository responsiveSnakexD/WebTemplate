import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  visible: boolean;
  onPressOut?: () => void;
};
