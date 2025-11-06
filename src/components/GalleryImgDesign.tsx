import Masonry from '../components/ui/Masonry';


const GalleryImgDesign = () => {
  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1025/600/700?grayscale",
      url: "https://example.com/four",
      height: 700,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1026/600/800?grayscale",
      url: "https://example.com/five",
      height: 800,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1027/600/900?grayscale",
      url: "https://example.com/six",
      height: 900,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1028/600/1000?grayscale",
      url: "https://example.com/seven",
      height: 1000,
    },
    {
      id: "8",
      img: "https://picsum.photos/id/1029/600/1100?grayscale",
      url: "https://example.com/eight",
      height: 800,
    },
    {
      id: "9",
      img: "https://picsum.photos/id/1028/600/1000?grayscale",
      url: "https://example.com/seven",
      height: 500,
    },
    {
      id: "10",
      img: "https://picsum.photos/id/1015/600/900?",
      url: "https://example.com/one",
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