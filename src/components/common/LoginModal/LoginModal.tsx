import { useActor } from "@xstate/react";
import React from "react";
import useMachines from "../../../hooks/useMachines";
import { AuthStatesValues } from "../../../machines/Auth/types";
import { useForm } from "react-hook-form";
import ControlledInput from "../ControlledInput";
import Modal from "../Modal";
import { FormContainer, SubmitButton } from "./LoginModal.styled";
import { LoginData } from "../../../api/types";

const LoginModal: React.FC = () => {
  const { auth } = useMachines();
  const [state] = useActor(auth);
  const { control, handleSubmit } = useForm<LoginData>({
    defaultValues: { email: "", password: "" },
  });

  const onValidData = (payload: LoginData) => {
    auth.send({ type: "LOGIN", payload });
  };

  return (
    <Modal visible={state.matches(AuthStatesValues.UnauthorizedLogging)}>
      <FormContainer>
        <ControlledInput control={control} name="email" label="Email" />
        <ControlledInput
          control={control}
          name="password"
          label="Password"
          password
        />
        <SubmitButton onClick={handleSubmit(onValidData)}>
          Zaloguj!
        </SubmitButton>
      </FormContainer>
    </Modal>
  );
};

export default LoginModal;
