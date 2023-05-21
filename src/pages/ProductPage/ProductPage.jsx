import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ProductPage.css";
import { Filters } from "../../component/Filters/Filters";
import { ProductCard } from "../../component/ProductCard/ProductCard";

export const ProductPage = () => {
  const { productState } = useContext(ProductContext);
  const { products } = productState;
  console.log(productState.products);
  return (
    <>
      <section className="dp_row main-products-section pdngtb5">
        <Filters />
        <div className="products-section">
          {products.length > 0 ? (
            <>
              <h3 className="product-heading">
                Showing Products
                <span className="product-heading-small text-grey text-regular">
                  (Showing {products.length} of all products)
                </span>
              </h3>
              <div className="product-list-grid">
                {products.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
              </div>
            </>
          ) : (
            <h3 className="dp_row justifycenter no-product">
              don't have any products
            </h3>
          )}
        </div>
      </section>
    </>
  );
};
