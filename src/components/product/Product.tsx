import { useParams } from "react-router-dom"
import { Iproducts } from "../../server/Server"
import { useEffect, useState } from "react"
import axios from "axios"

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
      <img src={product?.image} alt="" />
    </div>
  )
}

export default Product
