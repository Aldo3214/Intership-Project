import { useContext } from "react";
import PetsContext from "../context/pets";

function usePetsContext() {
  return useContext(PetsContext);
}

export default usePetsContext;
