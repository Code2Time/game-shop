import { useEffect, useState } from 'react'
import Elects from '../../components/property/Property';
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import { RiArrowDownDoubleFill } from "react-icons/ri";
import ProductItem from '../../components/productitem/ProductItem';
import { Iproducts } from '../../server/Server';
import axios from 'axios';
import Footer from '../../components/footer/Footer';



function Home() {

 const [products , setProducts]=useState<Iproducts[]>([]) ;

useEffect(() =>{
axios.get('https://fakestoreapi.com/products')
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
  <Elects />
  <div className='w-10/12 max-w-[1000px] h-auto grid grid-cols-12 gap-4 mx-auto my-36'>
    <h1 className='col-span-12 text-xl text-cyan-400 border-r-4 border-slate-950 px-2 Lalezar'>آخرین محصولات</h1>
 {
  products.map(item => (
    <ProductItem key={item.id} {...item}/>
  ))
 }
  </div>
  <Footer />
  </div>
  </>
  )
}

export default Home