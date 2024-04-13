import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import { RiArrowDownDoubleFill } from "react-icons/ri";
import ProductItem from '../../components/productitem/ProductItem';
import { Iproducts } from '../../server/Server';
import axios from 'axios';



function Home() {

 const [products , setProducts]=useState<Iproducts[]>([]) ;

useEffect(() =>{
axios.get('http://localhost:3000/products')
.then( (res) => {
setProducts(res.data)
})
 
},[]);




  return (
  <>
  <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='header-container'>
  <Navbar />
  <div className='arrow-button mt-[85vh] mx-auto text-center'>
      <button className='transition-all hover:-translate-y-1'>
     <a href="# card-container"><RiArrowDownDoubleFill filter='drop-shadow(0 10 20 #2441a0 )' size={50} color='#7d7f8c' className='arrow-icon'/></a> 
      </button>
  </div>
  <div className='w-10/12 max-w-[1000px] h-auto grid grid-cols-12 mx-auto my-24'>
 {
  products.map(item => (
    <ProductItem {...item}/>
  ))
 }
  </div>
  </div>
  </>
  )
}

export default Home