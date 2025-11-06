import React from "react";
import {
  Award,
  Target,
  TrendingUp,
  Handshake,
  Network,
  HeartHandshake,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
}) => (
  <div
    className="group relative bg-white rounded-4xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    style={{
      animation: `slideInUp 0.6s ease-out forwards`,
      animationDelay: `${index * 100}ms`,
      opacity: 0,
    }}
  >
    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Content */}
    <div className="relative z-10">
      {/* Icon Container */}
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-4xl bg-slate-100 group-hover:bg-slate-800 transition-all duration-500 transform group-hover:scale-105">
        <div className="text-slate-600 group-hover:text-white transition-colors duration-500">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-black transition-colors duration-300 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-sm lg:text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300">
        {description}
      </p>
    </div>

    {/* Subtle corner accent */}
    <div className="absolute bottom-4 right-4 w-2 h-2 bg-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
  </div>
);

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-7 h-7" />,
      title: "Professional Expertise",
      description: "Decades of experience simplifying complex real estate challenges with precision and care.",
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Personalized Solutions",
      description: "Tailored strategies crafted specifically for your unique requirements and goals.",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Market Intelligence",
      description: "Data-driven insights and trend analysis for strategic investment decisions.",
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      title: "Transparent Process",
      description: "Clear documentation and honest communication throughout every transaction.",
    },
    {
      icon: <Network className="w-7 h-7" />,
      title: "Exclusive Network",
      description: "Access to premium properties through our extensive industry connections.",
    },
    {
      icon: <HeartHandshake className="w-7 h-7" />,
      title: "Comprehensive Support",
      description: "End-to-end guidance from initial consultation to final closing and beyond.",
    },
  ];

  return (
    <section className="py-10 md:py-10 m-2 rounded-4xl bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
            WHY CHOOSE <span className="font-semibold">US</span>
          </h2>
          {/* <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the difference that professional expertise and personalized <br /> service can make.
          </p> */}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
            />
          ))} 
            
        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;