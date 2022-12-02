import { createMachine } from "xstate";
import {
  AuthEvents,
  AuthEventsEnum,
  AuthStates,
  AuthStatesEnum,
  UnauthorizedStates,
} from "./types";

const Auth = createMachine<undefined, AuthEvents, AuthStates>({
  id: "auth",
  initial: AuthStatesEnum.Unauthorized,
  states: {
    [AuthStatesEnum.Unauthorized]: {
      initial: UnauthorizedStates.Default,
      states: {
        [UnauthorizedStates.Default]: {
          on: {
            [AuthEventsEnum.Login]: UnauthorizedStates.Logging,
          },
        },
        [UnauthorizedStates.Logging]: {
          on: {
            [AuthEventsEnum.Login]: AuthStatesEnum.Loading,
          },
        },
      },
    },
    [AuthStatesEnum.Loading]: {},
    [AuthStatesEnum.Authorized]: {},
  },
});

export default Auth;
