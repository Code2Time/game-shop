
import { useEffect, useState } from "react";
import { useShopingCardContext } from "../../context/ShoppingCardContext"
import axios from "axios";
import { Iproducts } from "../../server/Server";
import { Link } from "react-router-dom";
import { IoTrash } from "react-icons/io5";

interface IcardItem{
    id : number ;
    qty : number;
}

function StoreItem({id , qty} : IcardItem) {

    const {HandleIncreaseProductQty , HandleDecreaseProductQty , HandleRemoveProduct} = useShopingCardContext()

   const [productStore , setProductStore] = useState<Iproducts>()


    useEffect(()=>{
axios.get(`http://localhost:3000/products/${id}`)
.then((data) =>{
    setProductStore(data.data);
})
},[])

   
  return (
  <>
       
        <div className="item1 col-span-12 grid grid-cols-12">
         <div className="p-20 sm:p-10 col-span-12 sm:col-span-5">
         <Link to={`/product/${id}`}>
         <img className="w-full h-full rounded-sm cursor-pointer" src={productStore?.image} alt="productItem" />
         </Link>
         </div>
         <div className="col-span-12 sm:col-span-3 flex justify-around items-center my-5 sm:my-0">
            <h1 className="text-xl text-slate-300 Lalezar">{productStore?.title}</h1>
            <p className="text-neutral-300">{productStore?.category}</p>
         </div>
        <div className=" col-span-12 sm:col-span-2 flex justify-center items-center mx-2 my-10 sm:my-0 ">
          <button onClick={()=>HandleIncreaseProductQty(id)}  className=" handle-btn w-10 h-10 rounded-full  ">+</button>
          <h1 className="show-product mx-3 w-12 h-20 text-center rounded-lg">{qty}</h1>
          <button onClick={()=>HandleDecreaseProductQty(id)} className=" handle-btn w-10 h-10 rounded-full  ">-</button>
          <button onClick={()=>HandleRemoveProduct(id)} className=" mx-2 transition-all hover:text-red-800 hover:-translate-y-1" >
          <IoTrash  size={22}/>
          </button>
        </div>

        <div className="Show-price col-span-12 sm:col-span-2 flex justify-center items-center">
          <h1 className="text-2xl text-gray-200 my-10 sm:my-0 ">{productStore?.price}</h1>
        </div>
        <hr className="col-span-12" />
        </div>
        </>
     
  )
}

export default StoreItem
