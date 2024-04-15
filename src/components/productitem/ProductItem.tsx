import { Link } from "react-router-dom";
import "./ProductItem.css";
import { FaCartPlus } from "react-icons/fa";
import { Iproducts } from "../../server/Server";



type Tproducts = Iproducts






function ProductItem({title , image , description , price ,id}:Tproducts) {
  return (
    <div
    id=" card-container"
      data-aos="zoom-in"
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 my-3 overflow-hidden  card-container w-[250px] h-[415px]  rounded-md shadow-lg shadow-slate-600 mx-auto transition-all hover:cursor-pointer  "
    >
      <div className="card-img p-3">
        <img
          className="rounded-md shadow-sm shadow-gray-50 "
          src={image}
        />
      </div>
      <div className="card-title px-3 ">
        <h3 className="text-white Lalezar border-r-2 border-teal-600 px-2">
         {title}
        </h3>
      </div>
      <div className="card-body py-8 px-2 flex flex-col  items-center">
        <p className="text-zinc-300 text-justify ">
         {description}
        </p>
        <span className="text-gray-500 Lalezar p-2">{price}</span>
      </div>
     
        <Link
          to={`/product/${id}`}
          className=" transition-all hover:text-white hover:-translate-y-1 text-slate-400 text-lg Lalezar flex flex-row-reverse justify-center items-center "
        >
          <FaCartPlus className="mx-2" />
          افزودن به سبد خرید
        </Link>
    
    </div>
  );
}

export default ProductItem;
