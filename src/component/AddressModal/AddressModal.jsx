import React, { useState, useEffect } from "react";
import "./AddressModal.css";
import { useAddress } from "../../context/AddressContext";

export const AddressModal = ({ setOpenModal, isEdit, addressData }) => {
  const { addressState, addressDispatch } = useAddress();
  const defaultAddress = addressState;
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEdit && addressData) {
      setName(addressData.name);
      setMobile(addressData.mobile);
      setAddress(addressData.address);
      setPincode(addressData.pincode);
      setCity(addressData.city);
      setEmail(addressData.email);
    }
  }, [isEdit, addressData]);

  const handleAddAddress = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    // Mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!String(mobile).match(mobileRegex)) {
      newErrors.mobile = "Invalid mobile number";
    }

    if (!address) {
      newErrors.address = "Address is required";
    }

    // Pincode validation
    const pincodeRegex = /^[0-9]{6}$/;
    if (!String(pincode).match(pincodeRegex)) {
      newErrors.pincode = "Invalid pincode";
    }

    if (!city) {
      newErrors.city = "City is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!String(email).match(emailRegex)) {
      newErrors.email = "Invalid email ID.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isEdit) {
      const updatedAddress = {
        id: addressData.id,
        name,
        mobile,
        address,
        pincode,
        city,
        email,
      };

      addressDispatch({
        type: "EDIT_ADDRESS",
        payload: { address: updatedAddress },
      });
    } else {
      const newAddress = {
        id: defaultAddress.length + 1,
        name,
        mobile,
        address,
        pincode,
        city,
        email,
      };

      addressDispatch({
        type: "ADD_ADDRESS",
        payload: { address: newAddress },
      });
    }

    setOpenModal(false);
  };

  const handleResetAddress = () => {
    addressDispatch({ type: "RESET_ADDRESS" });
    setName("");
    setMobile("");
    setAddress("");
    setPincode("");
    setCity("");
    setEmail("");
    setErrors({});
  };
  return (
    <>
      <div className="addressModalBackground">
        <div className="addressModalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setOpenModal(false)}>
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div>
            <div className="filter-main dp_row dp_justifycontentspcbet">
              <h3 className="font-bold">
                {isEdit ? "Change Address" : "Add New Address"}
              </h3>
            </div>
            <div className="dp_row flexclmn_onlyMob">
              <div className="input-row">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) {
                      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
                    }
                  }}
                  onBlur={() => {
                    if (!name) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        name: "Name is required",
                      }));
                    }
                  }}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="input-row">
                <label>Mobile:</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    if (errors.mobile) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        mobile: "",
                      }));
                    }
                  }}
                  onBlur={() => {
                    if (!mobile.match(/^[0-9]{10}$/)) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        mobile: "Invalid mobile number",
                      }));
                    }
                  }}
                  maxLength={10}
                />
                {errors.mobile && (
                  <span className="error">{errors.mobile}</span>
                )}
              </div>
            </div>
            <div className="dp_row flexclmn_onlyMob">
              <div className="input-row">
                <label>Address:</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        address: "",
                      }));
                    }
                  }}
                  onBlur={() => {
                    if (!address) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        address: "Address is required",
                      }));
                    }
                  }}
                />

                {errors.address && (
                  <span className="error">{errors.address}</span>
                )}
              </div>
              <div className="input-row">
                <label>Pincode:</label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                    if (errors.pincode) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        pincode: "",
                      }));
                    }
                  }}
                  onBlur={() => {
                    if (!pincode.match(/^[0-9]{6}$/)) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        pincode: "Invalid pincode",
                      }));
                    }
                  }}
                  maxLength={6}
                />

                {errors.pincode && (
                  <span className="error">{errors.pincode}</span>
                )}
              </div>
            </div>
            <div className="dp_row flexclmn_onlyMob">
              <div className="input-row">
                <label>City:</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    if (errors.city) {
                      setErrors((prevErrors) => ({ ...prevErrors, city: "" }));
                    }
                  }}
                  onBlur={() => {
                    if (!city) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        city: "City is required",
                      }));
                    }
                  }}
                />

                {errors.city && <span className="error">{errors.city}</span>}
              </div>
              <div className="input-row">
                <label>Email ID:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
                    }
                  }}
                  onBlur={() => {
                    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        email: "Invalid email ID.",
                      }));
                    }
                  }}
                />

                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
            <div className="dp_row justify-contentstart address-actions">
              <button className="btn cartBtn" onClick={handleAddAddress}>
                {isEdit ? "Change" : "Add"}
              </button>
              <button
                className="btn cartBtn delete-btn"
                onClick={handleResetAddress}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
