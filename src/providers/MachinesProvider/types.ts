import {
  AnyEventObject,
  BaseActionObject,
  Interpreter,
  ResolveTypegenMeta,
  ServiceMap,
  TypegenDisabled,
} from "xstate";
import { AuthEvents, AuthStates } from "../../machines/Auth/types";

export type AuthInterpreter = Interpreter<
  undefined,
  any,
  AuthEvents,
  AuthStates,
  ResolveTypegenMeta<TypegenDisabled, AuthEvents, BaseActionObject, ServiceMap>
>;

export type Machines = {
  auth: AuthInterpreter;
};
