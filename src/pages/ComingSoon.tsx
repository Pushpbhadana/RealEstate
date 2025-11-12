import TiltedCard from '../components/ui/TiltedCard';
import omxChk from "../assets/images/omxChk.jpg";

import Sector71LaunchImg1 from "../assets/images/VatikaChowkLaunchImg1.webp";
import VatikaChowkLaunchImg1 from "../assets/images/Sector71LaunchImg1.webp";
import AuraNewLaunchImg1 from "../assets/images/AuraNewLaunchImg1.jpg";
import IndiabullsLaunchImg1 from "../assets/images/IndiabullsLaunchImg1.jpg";
import ManesarUpcomingImg1 from "../assets/images/ManesarUpcomingImg1.jpg";

interface CardData {
  imageSrc: string;
  altText: string;
  captionText: string;
  description: string;
  location: string;
  builder: string;
  size: string;
  billStatus: string;
  projectStatus: string;
  price: string;
}

interface TiltedCardGridProps {
  cards?: CardData[];
  rotateAmplitude?: number;
  scaleOnHover?: number;
  itemsPerRow?: number;
}

const TiltedCardGrid = ({
  cards = [
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in ratione similique doloribus vitae molestiae vero veniam eius, earum excepturi ab atque provident exercitationem nihil sunt, harum itaque. Maiores, aliquid?",
      location: "Sector 104, Dworka Expressway, Gurgaon",
      builder: "By Indicbulls",
      size: "1500 sq.ft",
      billStatus: "Ready to Move",
      projectStatus: "Coming Soon",
      price: "₹1.5 Cr"
    }
  ],
  rotateAmplitude = 12,
  scaleOnHover = 1.01,
  itemsPerRow = 1
}: TiltedCardGridProps) => {
  return (
    <div className="min-h-screen w-full">
      <div className={`
        grid grid-cols-1 
        ${itemsPerRow >= 2 ? 'md:grid-cols-2' : ''}
        ${itemsPerRow >= 3 ? 'lg:grid-cols-3' : ''}
        gap-6 lg:gap-8 
        w-full h-full
      `}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-stretch w-full h-full min-h-[500px] bg-white p-6 lg:p-8 rounded-3xl lg:rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Image Section - Side by side on tablet/large screens */}
            <div className="lg:flex-1 lg:pr-6 lg:flex lg:items-center lg:justify-center mb-6 lg:mb-0">
              <div className="w-full h-[400px] lg:h-full lg:max-h-[500px]">
                <TiltedCard
                  imageSrc={card.imageSrc}
                  altText={card.altText}
                  captionText={card.captionText}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={rotateAmplitude}
                  scaleOnHover={scaleOnHover}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="text-white font-semibold text-sm lg:text-base bg-black bg-opacity-50 px-3 py-1 rounded-lg">
                      {card.captionText}
                    </p>
                  }
                />
              </div>
            </div>

            {/* Content Section - Side by side on tablet/large screens */}
            <div className="lg:flex-1 flex flex-col justify-between p-5">
              {/* Property Details */}
              <div className="flex-1">
                {/* Heading */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {card.captionText}
                </h3>

                {/* Location with pin icon */}
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm lg:text-base">{card.location}</span>
                </div>

                {/* Builder */}
                <div className="flex items-center text-gray-600 mb-6">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm lg:text-base">{card.builder}</span>
                </div>

                {/* Description */}
                <div className="text-gray-600 leading-relaxed text-sm lg:text-base mb-6">
                  {card.description}
                </div>

                {/* Property Specifications Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Size */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center text-gray-500 mb-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      <span className="text-xs font-medium">Size</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{card.size}</p>
                  </div>

                  {/* Price */}
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center text-blue-600 mb-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span className="text-xs font-medium">Price</span>
                    </div>
                    <p className="text-sm font-semibold text-blue-700">{card.price}</p>
                  </div>

                  {/* Bill */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center text-gray-500 mb-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-xs font-medium">Status</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{card.billStatus}</p>
                  </div>

                  {/* Project Status */}
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center text-green-600 mb-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-xs font-medium">Project</span>
                    </div>
                    <p className="text-sm font-semibold text-green-700">{card.projectStatus}</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/details"
                  className='flex-1 px-4 py-3 bg-black text-white text-sm lg:text-base font-medium rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group'
                >
                  <span className='truncate'>View Details</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>

                <a
                  href="/contact"
                  className='flex-1 px-4 py-3 bg-white text-gray-800 text-sm lg:text-base font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 flex items-center justify-center gap-2 group'
                >
                  <span className='truncate'>Call Now</span>
                  <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComingSoon = () => {
  const commercialProjects = [
    // 1. Sector 71 Project
    {
      imageSrc: Sector71LaunchImg1,
      altText: "New Launch Sector 71",
      captionText: "New Launch Sector 71",
      description: "Upcoming new launch project offering 3 BHK units starting from 1890 square feet. A premium residential development by renowned developer.",
      location: "Sector 71, Gurugram",
      builder: "Renowned Developer",
      size: "1890 sq ft",
      billStatus: "Coming Soon",
      projectStatus: "New Launch",
      price: "₹3.20 Cr*"
    },

    // 2. Vatika Chowk Project
    {
      imageSrc: VatikaChowkLaunchImg1,
      altText: "New Launch Near Vatika Chowk",
      captionText: "New Launch Near Vatika Chowk",
      description: "Upcoming premium development near Vatika Chowk offering 4 BHK units of 4500 square feet. Developed by renowned builder.",
      location: "Sector 48, Schon Road, Gurugram",
      builder: "Renowned Developer",
      size: "4500 sq ft",
      billStatus: "Coming Soon",
      projectStatus: "New Launch",
      price: "₹10.0 Cr*"
    },

    // 3. Aura New Launch
    {
      imageSrc: AuraNewLaunchImg1,
      altText: "Aura New Launch",
      captionText: "Aura New Launch",
      description: "New launch project by Aura Group offering 2.5 BHK units starting from 1500 square feet in the prime SPR location.",
      location: "Sector 78, SPR, Gurugram",
      builder: "Aura Group",
      size: "1500 sq ft",
      billStatus: "Coming Soon",
      projectStatus: "New Launch",
      price: "₹2.5 Cr*"
    },

    // 4. Indiabulls New Launch
    {
      imageSrc: IndiabullsLaunchImg1,
      altText: "New Launch Indiabulls",
      captionText: "New Launch Indiabulls",
      description: "Upcoming Indiabulls project on Dwarka Expressway offering 2.5 BHK units starting from 1500 square feet.",
      location: "Sector 104, Dwarka Expressway, Gurugram",
      builder: "Indiabulls",
      size: "1500 sq ft",
      billStatus: "Coming Soon",
      projectStatus: "New Launch",
      price: "₹1.95 Cr*"
    },

    // 5. Manesar Upcoming Project
    {
      imageSrc: ManesarUpcomingImg1,
      altText: "New Upcoming In Manesar",
      captionText: "New Upcoming In Manesar",
      description: "Upcoming residential project in Manesar offering 2, 3 BHK units with size on request. An affordable luxury option in developing area.",
      location: "Sector 9, Manesar, Gurugram",
      builder: "Renowned Developer",
      size: "On Request",
      billStatus: "Coming Soon",
      projectStatus: "New Launch",
      price: "₹1.5 Cr*"
    }
  ];

  return (
    <>
      <div className="h-[calc(45vh-5rem)] md:h-[calc(70vh-5rem)] m-2 rounded-4xl relative">
        {/* Background Image Div */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-4xl bg-no-repeat"
          style={{
            backgroundImage: `url(${omxChk})`
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-black/100 rounded-4xl"></div>
        </div>

        {/* Content Div - This will appear above the background */}
        <div className="relative z-10 h-full flex items-end justify-center">
          <div className="text-center text-white pb-8">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 text-white">Commercial Projects</h1>
            <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">We Recommend</h2>
          </div>
        </div>
      </div>

      <div className="m-2 py-10">
        <TiltedCardGrid
          itemsPerRow={1}
          rotateAmplitude={15}
          scaleOnHover={1.01}
          cards={commercialProjects}
        />
      </div>
    </>
  )
}

export default ComingSoon