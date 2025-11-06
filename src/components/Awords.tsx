import React, { useState, useRef, useEffect } from "react";

// Import your 7 images
import Image1 from "../assets/images/awd1.jpg";
import Image2 from "../assets/images/awd2.jpg";
import Image3 from "../assets/images/awd3.jpg";
import Image4 from "../assets/images/awd4.jpg";
import Image5 from "../assets/images/awd5.jpeg";
import Image6 from "../assets/images/awd6.jpg";
import Image7 from "../assets/images/awd7.jpg";

interface GridItemProps {
  image: string;
  title: string;
  size: "small" | "medium" | "large";
  index: number;
}

const GridItem: React.FC<GridItemProps> = ({ image, title, size, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Maintain 768x538 aspect ratio (1.428:1)
  const aspectRatioPadding = (538 / 768) * 100; // ~70%

  return (
    <div
      ref={itemRef}
      className={`group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 hover:border-gray-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Aspect Ratio Container */}
      <div className="w-full h-0 relative bg-gray-200" style={{ paddingBottom: `${aspectRatioPadding}%` }}>
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            imageLoaded 
              ? "scale-100 grayscale-0" 
              : "scale-110 grayscale blur-sm"
          } group-hover:scale-110`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white z-10">
          <h3 className="text-base lg:text-lg font-bold leading-tight group-hover:translate-y-[-2px] transition-transform duration-300">
            {title}
          </h3>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export const ImageGrid: React.FC = () => {
  const gridItems = [
    {
      image: Image1,
      title: "Awarded by Omaxe Group",
      size: "large" as const
    },
    {
      image: Image2,
      title: "Awarded by M3M Group",
      size: "small" as const
    },
    {
      image: Image3,
      title: "Awarded by DLF Group",
      size: "small" as const
    },
    {
      image: Image4,
      title: "Awarded by Pyramid Group",
      size: "small" as const
    },
    {
      image: Image5,
      title: "Awarded by Emaar Group",
      size: "small" as const
    },
    {
      image: Image6,
      title: "Awarded by Max Estates",
      size: "small" as const
    },
    {
      image: Image7,
      title: "Awarded by Elan Group",
      size: "small" as const
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-3xl lg:rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 xl:p-5 transform transition-all duration-500 border-0 lg:border border-gray-200 backdrop-blur-sm overflow-hidden relative">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <span className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wider block mb-2 md:mb-4">
          Star Performer for Team
        </span>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent leading-tight">
          Awards & Accolades
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2 md:mt-4 max-w-2xl mx-auto">
          Recognized for exceptional team performance, dedication, and outstanding contributions to project success
        </p>
      </div>

      {/* Grid Container - Mobile: Full width, Desktop: Masonry layout */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile View: Full width stacked */}
        <div className="lg:hidden flex flex-col gap-4 md:gap-6">
          {gridItems.map((item, idx) => (
            <div key={idx} className="w-full">
              <GridItem
                image={item.image}
                title={item.title}
                size="small"
                index={idx}
              />
            </div>
          ))}
        </div>

        {/* Desktop View: Masonry layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {/* Row 1: Image 1 (left, 2 cols) + Images 2-5 (right, 2 cols in 2x2 grid) */}
          <div className="col-span-2">
            <GridItem
              image={gridItems[0].image}
              title={gridItems[0].title}
              size="large"
              index={0}
            />
          </div>

          {/* Right side grid for images 2-5 */}
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6 h-full">
              {gridItems.slice(1, 5).map((item, idx) => (
                <div key={idx + 1} className="col-span-1">
                  <GridItem
                    image={item.image}
                    title={item.title}
                    size="small"
                    index={idx + 1}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Images 6-7 full width side by side */}
          {gridItems.slice(5, 7).map((item, idx) => (
            <div key={idx + 5} className="col-span-2">
              <GridItem
                image={item.image}
                title={item.title}
                size="large"
                index={idx + 5}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-8 md:mt-12 lg:mt-16">
        <button className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-white text-gray-800 text-sm md:text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group mx-auto">
          View All
          <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default function ImageGridSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 m-2">
      <div className="mx-auto rounded-4xl">
        <ImageGrid />
      </div>
    </div>
  );
}
