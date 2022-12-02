import { useContext } from "react";
import { MachinesContext } from "../providers/MachinesProvider/MachinesProvider";
import { Machines } from "../providers/MachinesProvider/types";

const useMachines = (): Machines => {
  const machines = useContext(MachinesContext);

  if (!machines) throw new Error("No machines avaliable within given context");

  return machines;
};

export default useMachines;
