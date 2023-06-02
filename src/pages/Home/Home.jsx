import { useContext } from "react";
import { Banner } from "../../component/Banner/Banner";
import { Category } from "../../component/Category/Category";
import { ProductContext } from "../../context/ProductContext";
import { Loader } from "../../component/Loader/Loader";

export const HomePage = () => {
  const {
    productState: { loading },
  } = useContext(ProductContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <Category />
        </>
      )}
    </>
  );
};
