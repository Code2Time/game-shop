import Footer from "../../components/footer/Footer";
import Navbarpro from "../../components/navbarpro/Navbarpro";
import { useShopingCardContext } from "../../context/ShoppingCardContext";
import "./Store.css";
import emptycart from "../../assets/images/empty-cart.svg";
import { Link } from "react-router-dom";
import { TbHandClick } from "react-icons/tb";
import StoreItem from "../../components/storeItem/StoreItem";
import { TiShoppingCart } from "react-icons/ti";

function Store() {
  const { cartQty, cardItems } = useShopingCardContext();

  return (
    <div data-aos="fade-up">
      <Navbarpro />
      {cartQty !== 0 ? (
        <div className="stor-box max-w-[1000px] w-11/12 mx-auto my-20 h-auto grid grid-cols-12 py-7 px-5">
          <div className="col-span-12 flex justify-around items-start my-2">
            <h1 className="Lalezar sm:text-2xl  text-slate-200 ">
              سبد خریدشما !
            </h1>
            <p className=" flex justify-end text-slate-300 relative">
              <span>
                <TiShoppingCart size={22} />
                {cartQty !== 0 ? (
                  <span className="z-10 absolute order-3 w-4 h-auto rounded-full bg-red-600 text-white text-center text-[10px] -top-1 -right-2">
                    {cartQty}
                  </span>
                ) : (
                  ""
                )}
              </span>
              مورد
            </p>
          </div>
          <hr className="col-span-12 " />
          {cardItems.map((item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="h-[100vh] flex flex-col  justify-center items-center">
          <img
            src={emptycart}
            className="hover:cursor-pointer transition-all hover:-translate-y-2"
          />
          <h1 className="text-2xl text-slate-300 Lalezar text-center my-32">
            سبد خرید شما خالی است!{" "}
          </h1>
          <Link
            to="/shop"
            className="text-zinc-950 Lalezar flex flex-row-reverse justify-center items-center transition-all hover:text-gray-400 hover:cursor-pointer"
          >
            <span>
              <TbHandClick size={20} />
            </span>
            <span> برای خرید محصول کلیک کنید</span>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Store;
