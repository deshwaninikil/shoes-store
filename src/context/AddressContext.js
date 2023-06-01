import { createContext } from "react";
import { Children } from "react/cjs/react.production.min";

export const AddressContext = createContext();

export const AddressProvider = ({ Children }) => {
  return (
    <AddressContext.Provider value={{}}>{Children}</AddressContext.Provider>
  );
};
