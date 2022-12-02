import { useActor } from "@xstate/react";
import React from "react";
import useMachines from "../../../hooks/useMachines";
import { AuthStatesValues } from "../../../machines/Auth/types";
import { useForm } from "react-hook-form";
import ControlledInput from "../ControlledInput";
import Modal from "../Modal";

const LoginModal: React.FC = () => {
  const { auth } = useMachines();
  const [state] = useActor(auth);
  const { control } = useForm({ defaultValues: { email: "", password: "" } });

  return (
    <Modal visible={state.matches(AuthStatesValues.UnauthorizedLogging)}>
      <div>
        <ControlledInput control={control} name="email" label="Email" />
        <ControlledInput
          control={control}
          name="password"
          label="Password"
          password
        />
      </div>
    </Modal>
  );
};

export default LoginModal;
