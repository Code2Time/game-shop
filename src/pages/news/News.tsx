import Navbar from "../../components/navbar/Navbar";
import "./News.css";
import gta from "../../assets/videos/gta.mp4";

function News() {
  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="background">
        <Navbar />
      </div>

      <div className="news-container max-w-[999px] h-auto p-5 w-5/6 mx-auto my-12  grid grid-cols-12  ">
        <h1 className="title-gta right-12 mt-12 absolute text-slate-200 Lalezar  ">!منتشر شد <span className="text-xl ">GTA</span></h1>
        <video
          className="gta-video col-span-12 rounded-md"
          src={gta}
          muted
          autoPlay
          typeof="video/mp4"
        ></video>
      </div>
    </>
  );
}

export default News;
