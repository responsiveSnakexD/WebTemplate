import { createMachine } from "xstate";
import API from "../../api";
import { AuthEvents, AuthStates } from "./types";

const Auth =
  /** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgOlQOzSwHsAnASwC9JsIwAzNAG3QGIAZAeQHEBJAOQDaABgC6iUAAcisMujJE84kAA9EAWgCMANgBM2LQa0B2IRoAsRgBzGjAGhABPRBoCcR7AGYvXowFZfWmY6LlqWAL5h9oQ4+NGklNSMRFBQZHhQ7Nz8wmJIIFIycgpKqggaGh6e3h6+fpZGWkIeGvZOCL46QtguPSFCLrV1vhGRIHhEtPB50UoFsvKKeaVqOr6W+oYm5lY2reqWGhsGJkarWi5CQmYRURgxBHfxVBCz0vPFS+o6Gl2GxqYWaxGOyORC+bCWaqmVyBVaWFw3EDRXAPYjkZ40ehMdCvQoLEqIDxmI7HMxCSwBGF7BAuSrVDz9QJuDo6RHI2KPdGJZKpdK496LUDLIIQmq0oweeFmSyA6keYLYbQGMznMxrK71Nl3bBJZAQNJQflFQUqL79KreYwU3ohakdLo2xoDYFrYajZFxLkvPJzY0EhBqaXUrT+bBmXpaDRWbQXa4jIA */
  createMachine<undefined, AuthEvents, AuthStates>(
    {
      predictableActionArguments: true,
      id: "auth",
      initial: "unauthorized",
      states: {
        unauthorized: {
          initial: "default",
          states: {
            default: {
              on: {
                SHOW_MODAL: "logging",
              },
            },
            logging: {
              on: {
                LOGIN: "#auth.loading",
              },
            },
          },
        },
        loading: {
          invoke: {
            src: "loginAsyncFunction",
            onDone: "authorized",
            onError: "unauthorized.logging",
          },
        },
        authorized: {
          on: {
            LOGOUT: "unauthorized.default",
          },
        },
      },
    },
    {
      services: {
        loginAsyncFunction: async (_, event) => {
          if (event.type === "LOGIN") {
            const data = await API.login(event.payload);
            console.log(data);
            // tutej cookie
          } else throw new Error();
        },
      },
    }
  );

export default Auth;
