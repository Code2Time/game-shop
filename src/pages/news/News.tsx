import Navbar from "../../components/navbar/Navbar";
import "./News.css";

function News() {
  return (
    <>
      <div className="background">
        <Navbar />
      </div>
    <div className="news-container max-w-[999px] h-[800px] w-5/6 mx-auto my-48 border grid grid-cols-12  ">
      <div className="left-item col-span-3 w-full h-full border" > left item</div>
      <div className="center-item col-span-6 w-full h-full border" ></div>
      <div className="right-item col-span-3 w-full h-full border" >right item</div>

    </div>
     
    </>
  );
}

export default News;
