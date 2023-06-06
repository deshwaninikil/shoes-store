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
  const { productDispatch } = useContext(ProductContext);

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
      type: ACTION_TYPE.CLEAR_ALL,
    });
    productDispatch({
      type: ACTION_TYPE.CATEGORY_CHANGE,
      payload: { [categoryName]: true },
    });
    productDispatch({
      type: ACTION_TYPE.SEARCH,
      payload: "", // Clear search text
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
              {categoryData.map(({ title, image, categoryName }) => (
                <Link to="/product" key={title}>
                  <div
                    className="category_container"
                    onClick={() => showByCategory(categoryName)}
                  >
                    <div className="category_img">
                      <img src={image} alt={title} />
                    </div>

                    <h3 className="text-align category_title">
                      {title}
                      <strong>{arrow}</strong>
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
