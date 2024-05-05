import "./Property.css";
import { FaRegCreditCard , FaHeadset ,  FaClockRotateLeft } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";


function Property() {
  return <>
    <section>
      <div className="property-container max-w-[1500px] w-11/12 mx-auto h-auto grid grid-cols-12  mt-28 gap-5">
        <div data-aos="zoom-in" id="odd-property" className="property-item col-span-12 sm:col-span-6 md:col-span-3 h-20  flex justify-around items-center py-4 px-2">
          <div className="icone">
          <FaRegCreditCard id="e" size={28} color="#fff" />
          </div>
          <div className="property-text">
              <h1 className="Lalezar text-slate-200">تضمین قیمت</h1>
              <p className="Lalezar text-gray-400 body-title">بهترین قیمت بازار</p>
          </div>
        </div>
        <div data-aos="zoom-in" id="even-property" className="property-item col-span-12 sm:col-span-6 md:col-span-3 h-20  flex justify-around items-center py-4 px-2">
          <div className="icone">
          <FaHeadset id="o" size={28} color="#fff" />
          </div>
          <div className="property-text">
              <h1 className="Lalezar text-slate-200">پشتیبانی عالی</h1>
              <p className="Lalezar text-gray-400 body-title">24ساعته و 7روز هفته</p>
          </div>
        </div>
        <div data-aos="zoom-in" id="odd-property" className="property-item col-span-12 sm:col-span-6 md:col-span-3 h-20  flex justify-around items-center py-4 px-2">
          <div className="icone">
          < FaClockRotateLeft id="e" size={28} color="#fff" />
          </div>
          <div className="property-text">
              <h1 className="Lalezar text-slate-200">بازگشت وجه</h1>
              <p className="Lalezar text-gray-400 body-title">در صورت عدم رضایت</p>
          </div>
        </div>
        <div data-aos="zoom-in" id="even-property" className="property-item col-span-12 sm:col-span-6 md:col-span-3 h-20  flex justify-around items-center py-4 px-2">
          <div className="icone">
         <span > <LiaShippingFastSolid id="o" size={28} color="#fff" /></span>
          </div>
          <div className="property-text">
              <h1 id="text" className="Lalezar text-slate-200">تحویل سریع</h1>
              <p  className="Lalezar text-gray-400 body-title">در کمترین زمان ممکن</p>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default Property;
