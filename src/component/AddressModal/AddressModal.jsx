import React, { useState } from "react";
import "./AddressModal.css";

export const AddressModal = ({ setOpenModal }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    // Logic to handle adding the address
    console.log("Address added!");
    // Reset the form
    handleReset();
  };

  const handleReset = () => {
    setName("");
    setMobile("");
    setAddress("");
    setPincode("");
    setCity("");
    setEmail("");
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
              <h3 className="font-bold">Add New Address</h3>
            </div>
            <div className="dp_row flexclmn_onlyMob">
              <div className="input-row">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-row">
                <label>Mobile:</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="dp_row flexclmn_onlyMob">
              <div className="input-row">
                <label>Address:</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input-row">
                <label>Pincode:</label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>
            <div className="dp_row flexclmn_onlyMob">
              <div className="input-row">
                <label>City:</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input-row">
                <label>Email ID:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="dp_row justify-contentstart address-actions">
              <button className="btn cartBtn" onClick={handleAdd}>
                Add
              </button>
              <button className="btn cartBtn delete-btn" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
