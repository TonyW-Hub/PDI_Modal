import { useContext } from "react";
import { ConsentContext } from "../context/ConsentProvider";
import { ConsentContextType } from "../types";

export const useConsentContext = () =>
  useContext(ConsentContext) as ConsentContextType;
