import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import LayoutWebsite from "./page/(website)/layout";
import HomePage from "./page/(website)/home/page";
import ShopPage from "./page/(website)/shop/page";
import ProductDetail from "./page/(website)/product_detail/page";
import CartPage from "./page/(website)/cart/page";
import CheckoutPage from "./page/(website)/checkout/page";
import NotFoundPage from "./page/(website)/404/page";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/detail" element={<ProductDetail />} />
          <Route path="shop/cart" element={<CartPage />} />
          <Route path="shop/cart/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
