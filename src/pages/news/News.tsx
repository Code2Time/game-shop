import Navbar from "../../components/navbar/Navbar";
import "./News.css";
import gta from "../../assets/videos/gta.mp4";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";

function News() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="background"
      >
        <Navbar />
      </div>

      <div className="news-container max-w-[999px] h-auto p-5 w-5/6 mx-auto my-12  grid grid-cols-12  ">
        <h1 className="title-gta right-12 mt-12 absolute text-slate-200 Lalezar  ">
          !منتشر شد <span className="text-xl ">GTA</span>
        </h1>
        <video
          className="gta-video col-span-12 rounded-md"
          src={gta}
          muted
          autoPlay
          typeof="video/mp4"
        ></video>
      </div>
      <Container>
        <div className="img-news-items grid grid-cols-12 gap-2 my-20 ">
          <h1 className="col-span-12 my-4 Lalezar border-r-2 border-lime-500 pr-2 text-gray-100 mb-11">
            تصاویر بازی
          </h1>
          <img
            className="col-span-12  md:col-span-4 rounded cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
            src="https://4kwallpapers.com/images/walls/thumbs_3t/14023.jpg"
            alt="img1"
          />
          <img
            className="col-span-12  md:col-span-4 rounded cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
            src="https://4kwallpapers.com/images/walls/thumbs_2t/14300.jpg"
            alt="img1"
          />
          <img
            className="col-span-12  md:col-span-4 rounded cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
            src="https://4kwallpapers.com/images/walls/thumbs_2t/13625.jpg"
            alt="img1"
          />
        </div>
        <div className="desc-news grid grid-cols-12 gap-2 my-20">
          <h1 className="col-span-12 my-4 Lalezar border-r-2 border-lime-500 pr-2 text-gray-100">بیشتر....</h1>
          <p className="col-span-12 p-20 text-justify text-gray-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت </p>
        </div>
        
      </Container>
      <Footer />
    </>
  );
}

export default News;
