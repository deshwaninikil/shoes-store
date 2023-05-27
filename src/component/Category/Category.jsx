import "./Category.css";
import { getAllCategoriesService } from "../../services/categoryServices";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ACTION_TYPE } from "../../utils/constants";

const arrow = ">>";
export const Category = () => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState([]);
  const { productState, productDispatch } = useContext(ProductContext);
  const { products } = productState;
  const fetchCategory = async () => {
    try {
      const { data } = await getAllCategoriesService();
      setCategoryData(data.categories);
    } catch (error) {
      console.log("Error in fetching categories", error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const showByCategory = (categoryName) => {
    productDispatch({
      type: ACTION_TYPE.CATEGORY_CHANGE,
      payload: { [categoryName]: true },
    });
    navigate("/product");
  };
  return (
    <>
      <section className="category">
        <div className="dp_container pdngtb5">
          <div className="dp_row dp_rowdir_clmn aligncenter dp_justifycontentcenter dp_flexwrap">
            <h2 className="heading highlight">Shop by Category</h2>
            <div className="category_mainConatiner">
              {categoryData.map(({ _id, title, image, categoryName }) => (
                <div className="category_container" key={title}>
                  <div className="category_img">
                    <img src={image} />
                  </div>
                  <Link to="/product">
                    <h3
                      className="text-align category_title"
                      onClick={() => showByCategory(categoryName)}
                    >
                      {title}
                      <strong>{arrow}</strong>
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
