import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ProductPage.css";
import { Filters } from "../../component/Filters/Filters";
import { ProductCard } from "../../component/ProductCard/ProductCard";
import { useFilterHook } from "../../Hooks/FilterHooks";

export const ProductPage = () => {
  const { productState } = useContext(ProductContext);
  const { products } = productState;
  const { filteredData } = useFilterHook();
  console.log("filteredData", filteredData);
  return (
    <>
      <section className="dp_row main-products-section pdngtb5">
        <Filters />
        <div className="products-section">
          {filteredData.length > 0 ? (
            <>
              <h3 className="product-heading">
                Showing Products
                <span className="product-heading-small text-grey text-regular">
                  (Showing {filteredData.length} of all products)
                </span>
              </h3>
              <div className="product-list-grid">
                {filteredData.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
              </div>
            </>
          ) : (
            <h3 className="dp_row justifycenter no-product">
              Whoops! We don't have any products that match your preference :(
            </h3>
          )}
        </div>
      </section>
    </>
  );
};
