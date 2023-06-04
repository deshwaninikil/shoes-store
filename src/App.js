import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

import { Login, SignUp, ResetScroll, Navbar, Footer } from "./component";

import {
  CartPage,
  HomePage,
  ProductPage,
  WishListPage,
  SingleProduct,
  Profile,
  PageNotFound,
  Checkout,
  OrderSummary,
} from "./pages";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar />
      <ResetScroll>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mockman" element={<MockMan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/singleProduct/:productId" element={<SingleProduct />} />
          <Route path="*" element={<PageNotFound />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-summary/:orderId" element={<OrderSummary />} />
          </Route>
        </Routes>
      </ResetScroll>
      <Footer />
    </div>
  );
}

export default App;
