import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type WorkStepProps = {
  number: string;
  title: string;
  description: string;
  index: number;
};

const WorkStep: React.FC<WorkStepProps> = ({ number, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={stepRef}
      className={`group flex items-start gap-4 lg:gap-6 p-4 lg:p-6 rounded-2xl lg:rounded-3xl hover:bg-gray-50 hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-gray-200 transform transition-all ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex-shrink-0 relative">
        {/* Smaller circles on mobile */}
        <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white text-lg lg:text-2xl font-bold shadow-lg lg:shadow-2xl group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-500 border-2 border-white">
          {number}
        </div>
        {/* Smaller glow effect on mobile */}
        <div className="absolute -inset-2 lg:-inset-3 bg-gray-300 rounded-full blur-md lg:blur-lg group-hover:blur-lg lg:group-hover:blur-xl group-hover:scale-105 lg:group-hover:scale-110 transition-all duration-500 -z-10" />
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-black transition-colors duration-300 leading-tight">
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm lg:text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export const HowWeWork: React.FC = () => {
  const navigate = useNavigate();
  const workSteps = [
    {
      number: "1",
      title: "Select the Best Property – Residential or Commercial",
      description: "Expert Guidance to Help You Choose the Ideal Property for Your Needs."
    },
    {
      number: "2",
      title: "UNLOCK MAXIMUM RETURNS ON YOUR INVESTMENTS",
      description: "Proven Strategies for High ROI"
    },
    {
      number: "3",
      title: "Strategic Investment Exit Planning",
      description: "Optimizing Your Investment Exit Strategy for Maximum Returns"
    },
    {
      number: "4",
      title: "BUILD GENERATIONAL WEALTH",
      description: "Guiding you to secure long-term prosperity through smart, strategic financial choices."
    }
  ];

  return (
    <div className="p-6 lg:p-12 xl:p-16 transform transition-all duration-500 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-8 lg:mb-16">
        <span className="text-sm font-medium text-gray-600 uppercase tracking-wider block mb-4">
          Our Process
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent leading-tight">
          How We Work
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          A proven four-step process to guide you from property selection to generational wealth creation
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {workSteps.map((step, index) => (
            <WorkStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-8 lg:mt-16">
        <button  onClick={() => navigate('/contact')} className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group mx-auto">
          Start Your Journey Today
          <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Usage example
export default function HowWeWorkSection() {
  return (
    <div className="min-h-screen m-2">
      <div className="mx-auto">
        <HowWeWork />
      </div>
    </div>
  );
}