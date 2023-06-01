import { createContext } from "react";

export const AddressContext = createContext();

const defaultAddress = [
  {
    name: "Nikhil Deshwani",
    mobile: 9099203274,
    emailId: "nikhil@gmail.com",
    pincode: 201002,
    city: "Noida",
    address: "Sector 62",
  },
];
export const AddressProvider = ({ Children }) => {
  return (
    <AddressContext.Provider value={{ defaultAddress }}>
      {Children}
    </AddressContext.Provider>
  );
};
