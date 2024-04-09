import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import { getproducts } from '../../services/api'
function Home() {

 const [products , setProducts]=useState([]) ;

useEffect(() =>{
 getproducts()
 .then((result) => {
  setProducts(result)
 });
 console.log(products)

},[])
  return (
  <>
  <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='header-container'>
  <Navbar />
  </div>

  </>
  )
}

export default Home