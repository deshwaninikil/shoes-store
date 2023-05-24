import "./Category.css";
import { getAllCategoriesService } from "../../services/categoryServices";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const arrow = ">>";
export const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
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
  return (
    <>
      <section class="category">
        <div class="dp_container pdngtb5">
          <div className="dp_row dp_rowdir_clmn aligncenter dp_justifycontentcenter dp_flexwrap">
            <h2 className="heading highlight">Shop by Category</h2>
            <div className="category_mainConatiner">
              {categoryData.map(({ _id, title, image }) => (
                <div className="category_container" key={title}>
                  <div class="category_img">
                    <img src={image} />
                  </div>
                  <Link to="/product">
                    <h3 className="text-align category_title">
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
