import "./Footer.css";
import { FaTelegram } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";
import { FaGoogle } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="w-full h-10 grid grid-cols-12  ">
        <div className="footer-sec2  col-span-12 grid grid-cols-12 ">
          <div className="company-name  grid grid-cols-12 col-span-12  sm:col-span-4 p-20 ">
            <h1 className="col-span-12 Lalezar border-r-4 border-blue-800 px-2 text-white">
              شرکت ما
            </h1>
            <p className="col-span-12 text-justify my-4 text-slate-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className=" grid grid-cols-12 col-span-12  sm:col-span-4 p-20 ">
            <h1 className="col-span-12 Lalezar border-r-4 border-blue-800 px-2 text-white">
              پروژه ها
            </h1>
            <a className="col-span-12 text-justify my-4 text-slate-300 cursor-pointer border-r-2 px-2 Lalezar hover:text-white">
              لینک1
            </a>
            <a className="col-span-12 text-justify my-4 text-slate-300 cursor-pointer border-r-2 px-2 Lalezar hover:text-white">
              لینک2
            </a>
            <a className="col-span-12 text-justify my-4 text-slate-300 cursor-pointer border-r-2 px-2 Lalezar hover:text-white">
              لینک3
            </a>
            <a className="col-span-12 text-justify my-4 text-slate-300 cursor-pointer border-r-2 px-2 Lalezar hover:text-white">
              لینک4
            </a>
          </div>
          <div className="grid grid-cols-12 col-span-12  sm:col-span-4 p-20">
                <h1 className="col-span-12 Lalezar border-b-4 border-blue-800 px-2 text-white mb-4">راه ارتباطی</h1>
                <p className="col-span-12 flex  justify-start  text-slate-400 hover:text-white cursor-pointer"><span className="mx-2"><FaTelegram  /></span><span className="Lalezar">تلگرام</span></p>
                <p className="col-span-12 flex  justify-start  text-slate-400 hover:text-white cursor-pointer"><span className="mx-2"><PiInstagramLogoFill /></span><span className="Lalezar">اینستاگرام</span></p>
                <p className="col-span-12 flex  justify-start  text-slate-400 hover:text-white cursor-pointer"><span className="mx-2"> <IoLogoYoutube /></span><span className="Lalezar">یوتیوب</span></p>
                <p className="col-span-12 flex  justify-start  text-slate-400 hover:text-white cursor-pointer"><span className="mx-2"><FaGoogle  /></span><span className="Lalezar">گوگل</span></p>
          </div>
        </div>
        <div className="col-span-12 footer-sec2">
            <h3 className="text-center">   Copyright:game center ©</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
