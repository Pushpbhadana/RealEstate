import React, { useState, useRef, useEffect } from "react";
import Avatar1 from "../../assets/images/cofounder.jpg";
import Avatar2 from "../../assets/images/cofounder2.jpg";
import { useNavigate } from "react-router-dom";

type ProfileCardProps = {
  name: string;
  title: string;
  avatarUrl: string;
  highlights: { title: string; description: string }[];
  reverse?: boolean;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  avatarUrl,
  highlights,
  reverse = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full bg-gradient-to-br my-15 from-white to-gray-50 rounded-3xl md:rounded-3xl shadow-2xl min-h-screen md:min-h-[600px] transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:shadow-3xl transition-all duration-500 border-0 md:border border-gray-200 backdrop-blur-sm overflow-hidden`}
    >
      <div
        className={`flex flex-col lg:flex-row rounded-4xl items-stretch w-full h-full ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section - Now order-1 on mobile to appear first */}
        <div className="lg:w-2/5 xl:w-1/2 relative min-h-[500px] lg:min-h-[600px] order-1 lg:order-1">
          <img
            src={avatarUrl}
            alt={`${name} profile`}
            className={`absolute inset-0 w-full h-full object-cover transition-all rounde duration-1000 ${
              imageLoaded
                ? "scale-100 grayscale-0"
                : "scale-110 grayscale blur-sm"
            } hover:grayscale-0 hover:scale-105 transition-all duration-700`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Overlay Content on Image for Mobile */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 z-20 lg:hidden">
            <span className="text-gray-300 text-sm font-semibold uppercase block mb-2">
              {title}
            </span>
            <h1 className="text-3xl font-bold text-white mb-4">{name}</h1>
          </div>

          {/* Floating decorative elements */}
          <div
            className={`absolute top-10 w-16 h-16 bg-white rounded-full animate-bounce shadow-2xl z-10 hidden lg:block border border-gray-300 ${
              reverse ? "left-10" : "right-10"
            }`}
          />
          <div
            className={`absolute bottom-20 w-20 h-20 bg-gray-800 rounded-full animate-pulse shadow-2xl z-10 hidden lg:block ${
              reverse ? "right-10" : "left-10"
            }`}
          />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600/10 via-transparent to-gray-800/10 z-0" />
        </div>

        {/* Content Section - Now order-2 on mobile to appear after image */}
        <div className="lg:w-3/5 xl:w-1/2 p-6 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-2 bg-white">
          <div className="max-w-2xl mx-auto w-full">
            {/* Header - Hidden on mobile (shown on image) */}
            <div className="mb-6 lg:mb-12 hidden lg:block">
              <span className="inline-block bg-gradient-to-r from-gray-800 to-black text-white text-sm font-semibold uppercase px-6 py-3 rounded-full shadow-lg mb-4">
                {title}
              </span>
              <h1 className="text-5xl xl:text-6xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent leading-tight">
                {name}
              </h1>
            </div>

            {/* Highlights - Improved mobile layout */}
            <div className="space-y-4 lg:space-y-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 lg:gap-6 p-4 lg:p-6 rounded-2xl lg:rounded-3xl hover:bg-gray-50 hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-gray-200"
                >
                  <div className="flex-shrink-0 relative">
                    {/* Smaller circles on mobile */}
                    <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white text-lg lg:text-2xl font-bold shadow-lg lg:shadow-2xl group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-500 border-2 border-white">
                      {idx + 1}
                    </div>
                    {/* Smaller glow effect on mobile */}
                    <div className="absolute -inset-2 lg:-inset-3 bg-gray-300 rounded-full blur-md lg:blur-lg group-hover:blur-lg lg:group-hover:blur-xl group-hover:scale-105 lg:group-hover:scale-110 transition-all duration-500 -z-10" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-black transition-colors duration-300 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons - Improved mobile layout */}
            <div className="flex flex-wrap gap-2 lg:gap-4 mt-6 lg:mt-12 justify-center lg:justify-start">
              {["LinkedIn", "Contact", "Portfolio", "Schedule Meeting"].map((platform) => (
                <button
                  onClick={() => navigate('/contact')}
                  key={platform}
                  className="px-3 py-2 lg:px-6 lg:py-3 bg-white text-gray-800 text-xs lg:text-sm font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-md lg:shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-1 lg:gap-2 group flex-nowrap whitespace-nowrap"
                >
                  <span className="truncate">{platform}</span>
                  <svg 
                    className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div
        className={`absolute top-0 w-64 h-64 bg-gray-200 rounded-full -translate-y-32 blur-3xl -z-10 hidden lg:block ${
          reverse ? "left-0 -translate-x-32" : "right-0 translate-x-32"
        }`}
      />
      <div
        className={`absolute bottom-0 w-80 h-80 bg-gray-300 rounded-full translate-y-32 blur-3xl -z-10 hidden lg:block ${
          reverse ? "right-0 translate-x-32" : "left-0 -translate-x-32"
        }`}
      />
    </div>
  );
};

// Enhanced demo component with two co-founders
export default function AdvancedProfileDemo() {
  const profiles = [
    {
      name: "Mr. Abhinav Agarwal",
      title: "Co-Founder & Director at Shoperty",
      avatarUrl: Avatar1,
      highlights: [
        {
          title: "Visionary Entrepreneur",
          description: "23+ years' expertise in Real Estate and BFSI. Renowned consultant delivering invaluable property insights with unmatched industry acumen.",
        },
        {
          title: "Financial Wizard",
          description: "Skilful management of a ₹3,000 crore real estate portfolio, driving sustained growth and profitability via market dynamics navigation.",
        },
        {
          title: "Trusted Advisor",
          description: "A driven self-starter, consistently delivering trusted guidance for property investments and business expansion.",
        },
      ],
      reverse: false,
    },
    {
      name: "Mr. Kshitij Mehta",
      title: "Co-Founder & CEO at Shoperty",
      avatarUrl: Avatar2,
      highlights: [
        {
          title: "Experienced Luminary",
          description: "With 19 years of robust experience in finance and real estate consultancy, he brings a wealth of diversified industry expertise, crafting bespoke advice to provide clients with well-informed recommendations.",
        },
        {
          title: "Real Estate Virtuoso",
          description: "Steering portfolios of HNIs valued between ₹5 to ₹600 crores, his real estate expertise guides clients toward strategic investments for sustained financial success.",
        },
        {
          title: "Trust Pioneer",
          description: "His dedication to building lasting relationships and providing authentic guidance has established him as a trusted beacon of integrity, helping clients navigate away from misinformation.",
        },
      ],
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 rounded-4xl m-2">
      <div className="w-full space-y-0">
        {/* Our Management Header - Only Once */}
        <div className="text-center rounded-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 md:pt-6 lg:pt-8 xl:pt-12 pt-4 mb-4 tracking-tight">
            Our Management
          </h2>
        </div>
        
        {/* Profile Cards */}
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            title={profile.title}
            avatarUrl={profile.avatarUrl}
            highlights={profile.highlights}
            reverse={profile.reverse}
          />
        ))}
      </div>
    </div>
  );
}