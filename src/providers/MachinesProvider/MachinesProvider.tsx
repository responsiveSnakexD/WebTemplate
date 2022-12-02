import { useInterpret } from "@xstate/react";
import React, { createContext } from "react";
import { ProviderProps } from "../types";
import AuthMachine from "../../machines/Auth";
import { Machines } from "./types";

export const MachinesContext = createContext<Machines | undefined>(undefined);

const MachinesProvider: React.FC<ProviderProps> = ({ children }) => {
  const auth = useInterpret(AuthMachine);

  return (
    <MachinesContext.Provider value={{ auth }}>
      {children}
    </MachinesContext.Provider>
  );
};

export default MachinesProvider;
