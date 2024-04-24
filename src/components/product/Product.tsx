import { useParams } from "react-router-dom"
import { Iproducts } from "../../server/Server"
import { useEffect, useState } from "react"
import axios from "axios"
import Navbarpro from "../navbarpro/Navbarpro";

function Product() {
const params = useParams<{id : string}>();
const[product , setProducts] = useState<Iproducts>()

useEffect(() => {
axios.get(`http://localhost:3000/products/${params.id}`).then((res) =>{
    setProducts(res.data)
})
},[])

  return (
    <div>
      <Navbarpro />
      <div className="shop-product-container max-w-[1000px] w-10/12 h-[300px] mx-auto grid grid-cols-12  my-52 shadow-lg my-3">
        <div className="container-item col-span-12 sm:col-span-4  h-auto p-5"> 
         <img className="rounded-md transition-all hover:-translate-y-1 hover:cursor-pointer" src={product?.image} alt="" />
         
        </div>
        <div className="container-item col-span-12 sm:col-span-8  h-auto my-3">
          <h1 className="col-span-12 mt-5 Lalezar border-r-4 px-2 border-orange-400 mx-4 hover:cursor-pointer">{product?.title}</h1>
          <p className="p-5 my-10 text-justify">{product?.description}</p>
        </div>
        <div className="col-span-12 h-10 border">
          <div className="button-container">
            <button>+</button>
            <button>حذف</button>
            <button>-</button>
          </div>
          <div className="show-product">
          
          </div>
        </div>
      </div>
      </div>
  )
}

export default Product
