import { createContext, useContext, useReducer } from "react";

export const AddressContext = createContext();

const defaultAddress = [
  {
    id: 11,
    name: "Nikhil Deshwani",
    mobile: 9099203274,
    email: "nikhil@gmail.com",
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
    case "ADD_ADDRESS":
      const { address } = payload;
      const existingAddress = addressState.find((a) => a.id === address.id);
      if (existingAddress) {
        return addressState;
      } else {
        return [...addressState, address];
      }

    case "RESET_ADDRESS":
      return defaultAddress;

    case "EDIT_ADDRESS":
      const { address: updatedAddress } = payload;
      return addressState.map((a) =>
        a.id === updatedAddress.id ? { ...a, ...updatedAddress } : a
      );
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
