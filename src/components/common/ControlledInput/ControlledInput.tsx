import { ReactElement } from "react";
import { ControlledInputProps } from "./types";
import { FieldValues, useController } from "react-hook-form";

const ControlledInput: <T extends FieldValues>(
  data: ControlledInputProps<T>
) => ReactElement = ({ label, name, password, control }) => {
  const {
    field: { onChange },
  } = useController({ control, name });

  return (
    <div>
      <p>{label}</p>
      <input type={password ? "password" : "text"} onChange={onChange} />
    </div>
  );
};

export default ControlledInput;
