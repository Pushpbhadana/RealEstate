import { useState, useEffect } from "react";
import { Beer, Heart, Anchor, Users } from "lucide-react";

interface CounterProps {
  icon: React.ReactNode;
  endValue: number;
  title: string;
  delay: number;
}

const Counter: React.FC<CounterProps> = ({ icon, endValue, title, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start animation after delay
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 4000; // 4 seconds
      const steps = 60;
      const increment = endValue / steps;
      const stepDuration = duration / steps;

      const interval = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [endValue, delay]);

  return (
    <div className="flex flex-col items-center text-center group">
      {/* Icon */}
      <div className="mb-4 text-gray-900 group-hover:text-indigo-700 transition-colors">
        {icon}
      </div>

      {/* Counter Number */}
      <div className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wider mb-2 font-oswald">
        {count}
        <span className="text-gray-900">+</span>
      </div>

      {/* Counter Title */}
      <p className="text-xs md:text-sm uppercase tracking-widest text-gray-600 group-hover:text-gray-900 transition-colors font-semibold">
        {title}
      </p>
    </div>
  );
};

const CounterSection: React.FC = () => {
  const counters = [
    {
      icon: <Beer className="w-12 h-12" />,
      endValue: 10,
      suffix: "M",
      title: "Sq.Ft of Area Sold",
      delay: 0,
    },
    {
      icon: <Heart className="w-12 h-12" />,
      endValue: 5000,
      title: "Happy Investors",
      delay: 300,
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      endValue: 100,
      title: "Skilled Professionals",
      delay: 600,
    },
    {
      icon: <Users className="w-12 h-12" />,
      endValue: 50,
      title: "Proud Builder Associates",
      delay: 900,
    },
  ];

  return (
    <section className="py-20 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
            10+ Years of Experience
          </h2>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${counter.delay}ms`,
              }}
            >
              <Counter {...counter} />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
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
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default CounterSection;
