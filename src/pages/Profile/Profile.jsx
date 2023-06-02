import { useState } from "react";
import { UserAvatar } from "../../component/UserAvatar/UserAvatar";
import { useAddress } from "../../context/AddressContext";
import { useAuth } from "../../context/AuthContext";

import "./Profile.css";

export const Profile = () => {
  const { loginUser, logoutHandler } = useAuth();
  const { addressState, addressDispatch } = useAddress();
  const defaultAddress = addressState;
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  // console.log(defaultAddress);
  return (
    <>
      <section className="profile-section pdngtb5">
        <div className="dp_row dp_rowdir_clmn profile-container">
          <div className="profile-header text-align">
            <h3>Account</h3>
          </div>
          <div className="border-bottom"></div>
          <div className="dp_row dp_justifycontentspcbet">
            <div
              className={`tab ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => handleTabChange("profile")}
            >
              Profile
            </div>
            <div
              className={`tab ${activeTab === "address" ? "active" : ""}`}
              onClick={() => handleTabChange("address")}
            >
              Address
            </div>
          </div>
          <div className="border-bottom"></div>

          {activeTab === "profile" ? (
            <div className="dp_row justifycenter tab-content">
              <div className="dp_row dp_rowdir_clmn ">
                <div className="dp_row profile-body">
                  <UserAvatar />
                  <div className="dp_row dp_rowdir_clmn profile-details">
                    <div className="dp_row profile-item">
                      <span className="font-bold">Name :</span>
                      <span className="">
                        {loginUser.firstName} {loginUser.lastName}
                      </span>
                    </div>
                    <div className="dp_row profile-item">
                      <span className="font-bold">Email :</span>
                      <span className="">{loginUser.email}</span>
                    </div>
                  </div>
                </div>
                <button className="btn logout-btn" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="dp_row justify-contentstart tab-content">
              <div className="address-tab">
                <button className="btn add-address-btn">Add New Address</button>
                {defaultAddress && defaultAddress.length > 0 ? (
                  defaultAddress.map((address, id) => (
                    <div className="address-item" key={id}>
                      <h4>{address.name}</h4>
                      <p>{address.address}</p>
                      <p>{address.city}</p>
                      <p>{address.pincode}</p>
                      <p>Mobile: {address.mobile}</p>
                      <p>Email: {address.emailId}</p>
                      <div className="dp_row justify-contentstart address-actions">
                        <button className="btn cartBtn">Edit</button>
                        <button
                          className="btn cartBtn delete-btn"
                          onClick={() =>
                            addressDispatch({
                              type: "DELETE_ADDRESS",
                              payload: { addressId: address.id },
                            })
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="address-item">
                    <h4>Whoops! We don't have any address :(</h4>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
