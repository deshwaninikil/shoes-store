import { useState } from "react";
import { useAddress } from "../../context/AddressContext";
import "./Checkout.css";
import { OrderDetails } from "./OrderDetails";
import { AddressModal } from "../../component/AddressModal/AddressModal";

export const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { addressState } = useAddress();
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const defaultAddress = addressState;

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };
  const handleAddAddress = () => {
    setAddressModalOpen(true);
  };
  return (
    <section className="main-checkout-section pdngtb5">
      <div className="dp_row justify-contentspaceAround checkout-div">
        <div className="address-section">
          <div className="order-summary order-col">
            <h3>Select Address</h3>
            <div className="dp_row dp_rowdir_clmn  order-content">
              <div className="dp_row justify-contentstart address-actions">
                <button
                  className="btn add-address-btn"
                  onClick={handleAddAddress}
                >
                  Add New Address
                </button>
                {addressModalOpen && (
                  <AddressModal
                    setOpenModal={setAddressModalOpen}
                    isEdit={false}
                    addressData={null}
                  />
                )}
              </div>
              {defaultAddress && defaultAddress.length > 0 ? (
                defaultAddress.map((address, index) => (
                  <label className="dp_row address-label" key={address.id}>
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedAddress === address.id}
                      onChange={() => handleAddressSelect(address.id)}
                    />
                    <div className="addressCheckbox-item" key={address.id}>
                      <h4>{address.name}</h4>
                      <p>{address.address}</p>
                      <p>{address.city}</p>
                      <p>{address.pincode}</p>
                      <p>Mobile: {address.mobile}</p>
                      <p>Email: {address.emailId}</p>

                      {index >= 0 && index !== defaultAddress.length - 1 && (
                        <div className="border-bottom margin-border"></div>
                      )}
                    </div>
                  </label>
                ))
              ) : (
                <div className="address-item">
                  <h4>Whoops! We don't have any address :(</h4>
                </div>
              )}
            </div>
          </div>
        </div>

        <OrderDetails selectedAddress={selectedAddress} />
      </div>
    </section>
  );
};
