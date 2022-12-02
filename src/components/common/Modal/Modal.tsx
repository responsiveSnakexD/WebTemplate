import React from "react";
import { StyledContainer, StyledModal } from "./Modal.styled";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ children, onPressOut, visible }) => {
  if (!visible) return null;

  return (
    <>
      <StyledContainer onClick={onPressOut} />
      <StyledModal>{children}</StyledModal>
    </>
  );
};

export default Modal;
