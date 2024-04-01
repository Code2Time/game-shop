import { Link } from "react-router-dom";
import "./ProductItem.css";
import { IoMdDownload } from "react-icons/io";
import Button from "../button/Button";

function ProductItem() {
  return (
    <div
      data-aos="zoom-in"
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 my-3 overflow-hidden  card-container w-[250px] h-[415px]  rounded-md shadow-lg shadow-slate-600 mx-auto "
    >
      <div className="card-img p-3">
        <img
          className="rounded-md shadow-sm shadow-gray-50"
          src="https://4kwallpapers.com/images/walls/thumbs_2t/14212.jpg"
        />
      </div>
      <div className="card-title px-3 ">
        <h3 className="text-white Lalezar border-r-2 border-teal-600 px-2">
          کلش آف کلنز
        </h3>
      </div>
      <div className="card-body py-8 px-2 flex flex-col  items-center">
        <p className="text-zinc-300 text-justify ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
        </p>
        <span className="text-gray-500 Lalezar p-2">22$</span>
      </div>
      <Button
        variant="secondary"
        className=" transition-all hover:-translate-y-1 w-full  my-2 "
      >
        <Link
          to={`/shop/${1}`}
          className=" hover:text-white text-slate-400 text-lg Lalezar flex flex-row-reverse justify-center items-center "
        >
          <IoMdDownload className="mx-2" />
          دانلود
        </Link>
      </Button>
    </div>
  );
}

export default ProductItem;
