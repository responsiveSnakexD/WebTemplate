import { LoginData } from "../../api/types";

export enum AuthStatesEnum {
  Unauthorized = "unauthorized",
  Loading = "loading",
  Authorized = "authorized",
}

export enum AuthStatesValues {
  UnauthorizedDefault = "unauthorized.default",
  UnauthorizedLogging = "unauthorized.logging",
  Loading = "loading",
  Authorized = "authorized",
}

export type AuthStates = {
  states: {
    [AuthStatesEnum.Unauthorized]: {
      states: {
        [UnauthorizedStates.Default]: {};
        [UnauthorizedStates.Logging]: {};
      };
    };
    [AuthStatesEnum.Loading]: {};
    [AuthStatesEnum.Authorized]: {};
  };
  context: undefined;
  value: AuthStatesValues;
};

export enum UnauthorizedStates {
  Default = "default",
  Logging = "logging",
}

export enum AuthEventsEnum {
  Login = "LOGIN",
}

export type AuthEvents =
  | { type: "LOGIN"; payload: LoginData }
  | { type: "LOGOUT" }
  | { type: "SHOW_MODAL" };
