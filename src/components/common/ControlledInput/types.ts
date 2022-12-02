import { Path, Control, FieldValues } from "react-hook-form";

export type ControlledInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  password?: boolean;
  control: Control<T>;
};
