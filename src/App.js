import "./App.css";
import { Login } from "./component/Auth/Login";
import { SignUp } from "./component/Auth/SignUp";
import { CartPage } from "./pages/Cart/Cart";
import { HomePage } from "./pages/Home/Home";

import { ProductPage } from "./pages/ProductPage/ProductPage";
import { WishListPage } from "./pages/WishList/WishList";
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { ResetScroll } from "./component/ResetScroll/ResetScroll";
import { Navbar } from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ResetScroll>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mockman" element={<MockMan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/singleProduct/:productId" element={<SingleProduct />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
          </Route>
        </Routes>
      </ResetScroll>
      <Footer />
    </div>
  );
}

export default App;
