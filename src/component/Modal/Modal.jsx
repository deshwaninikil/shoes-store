import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

import "./Modal.css";
import { ACTION_TYPE } from "../../utils/constants";
import { PriceSlider } from "../Filters/PriceSlider";
import { CategorySelect } from "../Filters/CategorySelect";
import { Ratings } from "../Filters/Ratings";
import { SortBy } from "../Filters/SortBy";

export const Modal = ({ setOpenModal }) => {
  const { productDispatch } = useContext(ProductContext);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div>
            <div className="filten-main dp_row dp_justifycontentspcbet">
              <div className="font-bold">Filters</div>
              <div>
                <span
                  className="clear-all-btn"
                  onClick={() =>
                    productDispatch({ type: ACTION_TYPE.CLEAR_ALL })
                  }
                >
                  Clear all
                </span>
              </div>
            </div>

            <PriceSlider />
            <CategorySelect />
            <Ratings />
            <SortBy />
          </div>
        </div>
      </div>
    </>
  );
};
