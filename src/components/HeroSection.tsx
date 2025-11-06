import React, { useState, useEffect, useRef } from "react";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";

const Hero: React.FC = () => {
  const slides = [
    {
      bgImage: bg1,
      heading: (
        <>
          Gurugram's <span className="text-indigo-200">Foremost</span> &{" "}
          <span className="text-indigo-100">Trusted</span> <br /> Real Estate Advisors
          {/* <div>Mr. Abhinav Agarwal</div> */}
        </>
      ),
    },
    {
      bgImage: bg2,
      heading: (
        <>
          Trusted by <span className="text-indigo-200">5000+</span>      <br />
          Residential & Commercial <span className="text-indigo-100">Inversters</span>
          {/* <p className="text-2xl">Mr. Kshitij Mehta</p> */}
        </>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-slide every 5 seconds
  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setDirection("next");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const resetAutoSlide = () => {
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [slides.length]);

  // Handle slide change with direction
  const goToSlide = (index: number, slideDirection: "next" | "prev") => {
    setDirection(slideDirection);
    setCurrentSlide(index);
    resetAutoSlide();
  };

  // Handle mouse/touch drag
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(
      "touches" in e ? e.touches[0].clientX : e.clientX
    );
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    setIsDragging(false);

    const dragEndPos = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart - dragEndPos;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Dragged left, go to next slide
        goToSlide((currentSlide + 1) % slides.length, "next");
      } else {
        // Dragged right, go to previous slide
        goToSlide((currentSlide - 1 + slides.length) % slides.length, "prev");
      }
    } else {
      resetAutoSlide();
    }
  };

  // Get slide transition class based on direction
  const getSlideClass = (index: number) => {
    if (index === currentSlide) {
      return "opacity-100 translate-x-0";
    }
    
    if (direction === "next") {
      if (index === (currentSlide - 1 + slides.length) % slides.length) {
        return "opacity-0 -translate-x-full";
      } else {
        return "opacity-0 translate-x-full";
      }
    } else {
      if (index === (currentSlide + 1) % slides.length) {
        return "opacity-0 translate-x-full";
      } else {
        return "opacity-0 -translate-x-full";
      }
    }
  };

  return (
    <section
      className="relative h-screen overflow-hidden select-none m-2 rounded-4xl"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${getSlideClass(index)}`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-end text-center h-full w-full px-4 pb-5">
            <h1 className={`text-white font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 ${
              index === currentSlide ? "animate-fadeInUp" : "opacity-0"
            }`}>
              {slide.heading}
            </h1>
          </div>
        </div>
      ))}

      {/* Animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;