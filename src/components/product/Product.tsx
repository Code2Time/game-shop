import { useParams } from "react-router-dom"
import { Iproducts } from "../../server/Server"
import { useEffect, useState } from "react"
import axios from "axios"
import Navbarpro from "../navbarpro/Navbarpro";
import './Product.css'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Footer from "../footer/Footer";
import { useShopingCardContext } from "../../context/ShoppingCardContext";

function Product() {
const params = useParams<{id : string}>();
const[product , setProducts] = useState<Iproducts>()

useEffect(() => {
axios.get(`http://localhost:3000/products/${params.id}`).then((res) =>{
    setProducts(res.data)
})
},[])

const { GetProductQty ,HandleDecreaseProductQty ,HandleIncreaseProductQty , cardItems} = useShopingCardContext()
console.log(cardItems)

  return (
    <div>
      <Navbarpro />
      <div className="shop-product-container max-w-[1000px] w-10/12 h-[650px] sm:h-[400px] mx-auto grid grid-cols-12  my-52 shadow-lg my-3">
        <div className="container-item col-span-12 sm:col-span-4  h-auto p-5"> 
         <img className="rounded-md transition-all hover:-translate-y-1 hover:cursor-pointer" src={product?.image} alt="" />
         
        </div>
        <div className="container-item col-span-12 sm:col-span-8  h-auto my-3">
          <h1 className="col-span-12 mt-5 Lalezar border-r-4 px-2 border-orange-400 mx-4 hover:cursor-pointer">{product?.title}</h1>
          <p className="p-5 my-10 text-justify">{product?.description}</p>
          <h1 className="text-center my-5 text-2xl">{product?.price}</h1>
        </div>
        <div className="col-span-12 h-10 ">
          <div className="button-container grid grid-cols-12 ">
            <button onClick={()=> HandleIncreaseProductQty(parseInt(params.id as string))}  className="col-span-12  mx-auto add-btn flex justify-center items-center flex-row-reverse my-5" type="submit"><MdOutlineAddShoppingCart className="mx-2 " />افزودن به سبد خرید</button>
            <h1>{GetProductQty((parseInt(params.id as string)))}</h1>
          <button className="col-span-12  mx-auto add-btn flex justify-center items-center flex-row-reverse my-5" type="submit" onClick={()=>HandleDecreaseProductQty(parseInt(params.id as string))}>-</button>
          </div>
          <div className="show-product">
          
          </div>
        </div>
      </div>
      <Footer />
      </div>
  )
}

export default Product
