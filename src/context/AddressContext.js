import { createContext, useContext, useReducer } from "react";

export const AddressContext = createContext();

const defaultAddress = [
  {
    id: 11,
    name: "Nikhil Deshwani",
    mobile: 9099203274,
    emailId: "nikhil@gmail.com",
    pincode: 201002,
    city: "Noida",
    address: "Sector 62",
  },
];

const addressReducer = (addressState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DELETE_ADDRESS":
      return addressState.filter((address) => address.id !== payload.addressId);
    default:
      return addressState;
  }
};

export const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    defaultAddress
  );

  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
