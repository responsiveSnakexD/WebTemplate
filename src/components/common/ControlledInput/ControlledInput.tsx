import { ReactElement } from "react";
import { ControlledInputProps } from "./types";
import { FieldValues, useController } from "react-hook-form";
import { InputContainer } from "./ControlledInput.styled";

const ControlledInput: <T extends FieldValues>(
  data: ControlledInputProps<T>
) => ReactElement = ({ label, name, password, control }) => {
  const {
    field: { onChange },
  } = useController({ control, name });

  return (
    <InputContainer>
      <div>{label}</div>
      <input type={password ? "password" : "text"} onChange={onChange} />
    </InputContainer>
  );
};

export default ControlledInput;
