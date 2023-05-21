import img_men from "../../logos/category_imgs/men.jpg";
import img_women from "../../logos/category_imgs/women.jpg";
import img_kids from "../../logos/category_imgs/kids.jpg";
import "./Category.css";
const images = [
  { img: img_men, title: "Shop men's" },
  { img: img_women, title: "Shop womes's" },
  { img: img_kids, title: "Shop kid's" },
];
const arrow = ">>";
export const Category = () => {
  return (
    <>
      <section class="category">
        <div class="dp_container pdngtb5">
          <div className="dp_row dp_rowdir_clmn aligncenter dp_justifycontentcenter dp_flexwrap">
            <h2 className="heading highlight">Shop by Category</h2>
            <div className="category_mainConatiner">
              {images.map(({ img, title }) => (
                <div className="category_container" key={title}>
                  <div class="category_img">
                    <img src={img} />
                  </div>
                  <h3 className="text-align category_title">
                    {title}
                    <strong>{arrow}</strong>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
