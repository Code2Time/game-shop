import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Product from "./components/product/Product";
import Store from "./pages/store/Store";
import { ShoppingCardProvider } from "./context/ShoppingCardContext";
import ScrollToTop from "./scroll/ScrollToTop";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <ShoppingCardProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </ShoppingCardProvider>
    </>
  );
}

export default App;
