import { useEffect, useState } from "react";
import ProductItem from "../../components/productitem/ProductItem";
import "./Shop.css";
import Navbarpro from "../../components/navbarpro/Navbarpro";
import { Iproducts } from '../../server/Server';
import axios from 'axios';
import Footer from "../../components/footer/Footer";






function Shop() {




  const [products , setProducts]=useState<Iproducts[]>([]) ;

  useEffect(() =>{
  axios.get('http://localhost:3000/products')
  .then( (res) => {
  setProducts(res.data)
  })
   
  },[]);




  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="shop-container w-full ">
        <Navbarpro />
      </div>
      <div className='w-10/12 max-w-[1000px] h-auto grid grid-cols-12 mx-auto my-24'>
        <h1 className="col-span-12 my-5 text-xl text-white Lalezar">جدید ترین ها</h1>
 {
  products.map(item => (
    <ProductItem {...item}/>
  ))
 }
  </div>
  <Footer />
    </div>
  );
}

export default Shop;
