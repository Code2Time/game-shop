import Container from "../../components/container/Container";
import Navbar from "../../components/navbar/Navbar";
import ProductItem from "../../components/productitem/ProductItem";
import "./Shop.css";

function Shop() {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="shop-container w-full h-[100vh]">
        <Navbar />
      </div>
      <Container>
        <h1 className="Lalezar text-right my-12 text-zinc-300 ">
          جدید ترین محصولات
        </h1>
        <ProductItem   />
      </Container>
    </div>
  );
}

export default Shop;
