import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Shop from "./pages/shop/Shop";
import Product from "./components/product/Product";
import Store from "./pages/store/Store";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
