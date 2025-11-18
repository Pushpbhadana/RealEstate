import Masonry from '../ui/Masonry';
import galleryImg1 from "../../assets/images/m3mAtrium57p1.jpg";
import galleryImg2 from "../../assets/images/m3mAtrium57p2.jpg";
import galleryImg3 from "../../assets/images/m3mAtrium57p3.jpg";
import galleryImg4 from "../../assets/images/m3mAtrium57p4.jpg";
import galleryImg5 from "../../assets/images/m3mAtrium57p5.jpg";
import galleryImg6 from "../../assets/images/m3mAtrium57p6.jpg";

import galleryImg7 from "../../assets/images/m3m65.jpg";
import galleryImg8 from "../../assets/images/m3mRoute65p3.jpg";
import galleryImg9 from "../../assets/images/m3mRoute65p2.webp";
import galleryImg10 from "../../assets/images/m3mRoute65p1.webp";  


const GalleryImgDesign = () => {
  const items = [
    {
      id: "0",
      img: galleryImg1,
      url: galleryImg1,
      height: 400,
    },
    {
      id: "1",
      img: galleryImg2,
      url: galleryImg2,
      height: 400,
    },
    {
      id: "2",
      img: galleryImg3,
      url: galleryImg3,
      height: 250,
    },
    {
      id: "3",
      img: galleryImg4,
      url: galleryImg4,
      height: 600,
    },
    {
      id: "4",
      img: galleryImg5,
      url: galleryImg5,
      height: 700,
    },
    {
      id: "5",
      img: galleryImg6,
      url: galleryImg6,
      height: 800,
    },
    {
      id: "6",
      img: galleryImg7,
      url: galleryImg7,
      height: 900,
    },
    {
      id: "7",
      img: galleryImg8,
      url: galleryImg8,
      height: 1000,
    },
    {
      id: "8",
      img: galleryImg9,
      url: galleryImg9,
      height: 800,
    },
    {
      id: "9",
      img: galleryImg10,
      url: galleryImg10,
      height: 500,
    },
    {
      id: "10",
      img: galleryImg1,
      url: galleryImg1,
      height: 650,
    },

  ];


  return (
    <div className="m-2 rounded-4xl">
      <h2 className="text-4xl md:text-5xl text-center  font-bold text-slate-900 my-20 tracking-tight">
            Image Gallery
      </h2>
    <Masonry
  items={items}
  ease="power3.out"
  duration={0.6}
  stagger={0.05}
  animateFrom="bottom"
  scaleOnHover={true}
  hoverScale={0.95}
  blurToFocus={true}
  colorShiftOnHover={false}
/>
</div>
);
}


export default GalleryImgDesign;