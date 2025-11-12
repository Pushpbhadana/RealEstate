import TiltedCard from '../components/ui/TiltedCard';

import ResidentialImg1 from "../assets/images/residessBG.webp";

import M3MAntalyaHillsImg1 from "../assets/images/m3mAntalya.jpg";
import SmartWorldSkyArcImg1 from "../assets/images/smartWorld.jpg";
import M3MGolfHillsImg1 from "../assets/images/m3mGolf.png";
import TheEditionImg1 from "../assets/images/p1.jpg";
import M3MAltitudeImg1 from "../assets/images/p4.jpg";
import WhitelandSector103Img1 from "../assets/images/whiteland103.jpg";
import PyramidAlbanImg1 from "../assets/images/pyramind.png";
import M3MMansionImg1 from "../assets/images/m3mMAnsion.jpg";
import DXP from "../assets/images/Dxp.jpg";
import SPR from "../assets/images/spr.png"; 
import CBS  from "../assets/images/cbs.webp";
import Victor from "../assets/images/victoryFloors.jpg";
import Max360 from "../assets/images/max360.jpg";
import M3MCrown from "../assets/images/m3mCrown.jpg";
import M3MOpus from "../assets/images/m3mopus.jpg";


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

const Residential = () => {
  const ResidentialProjects = [
    {
      imageSrc: M3MAntalyaHillsImg1,
      altText: "M3M Antalya Hills",
      captionText: "M3M Antalya Hills",
      description: "This new launch property offers compact units ranging from 905 to 1597 square feet, with prices starting from 75 lakhs onwards. These units are available on the ground floor, first floor, and second floor, providing flexible options for prospective buyers.",
      location: "Sector 79, SPR Road, Gurugram",
      builder: "By M3M Group",
      size: "905-1597 sq.ft",
      billStatus: "Ready to Move",
      projectStatus: "Completed",
      price: "₹1.5 Cr+"
    },
    
    // 2. SmartWorld Sky Arc
    {
      imageSrc: SmartWorldSkyArcImg1,
      altText: "SmartWorld Sky Arc",
      captionText: "SmartWorld Sky Arc",
      description: "This newly launched development offers spacious units ranging from 905 to 1597 square feet, with pricing beginning at 3.75 crores. These premium spaces are conveniently available on the lower ground, ground, first, second, and third floors, offering versatile options for discerning buyers.",
      location: "Sec 69, Golf Course Ext Rd, Gurugram",
      builder: "By SmartWorld Developers",
      size: "905-1597 sq.ft",
      billStatus: "Ready to Move",
      projectStatus: "Completed",
      price: "₹3.75 Cr+"
    },
    
    // 3. M3M Golf Hills
    {
      imageSrc: M3MGolfHillsImg1,
      altText: "M3M Golf Hills",
      captionText: "M3M Golf Hills",
      description: "This newly launched development offers spacious units ranging from 600 to 3000 square feet, with pricing beginning at 3.6 crores. These premium spaces are conveniently available on the lower ground, ground, first, second, third, and fourth floors, offering versatile options for discerning buyers.",
      location: "Sec 79, SPR Road, Gurugram",
      builder: "By M3M Group",
      size: "1420-2685 sq.ft",
      billStatus: "New Launch",
      projectStatus: "Under Construction",
      price: "₹3.6 Cr+"
    },
    
    // 4. The Edition
    {
      imageSrc: TheEditionImg1,
      altText: "The Edition",
      captionText: "The Edition",
      description: "This newly launched development offers spacious units ranging from 2945 to 3660 square feet, with pricing beginning at 6.77 crores. These premium spaces are conveniently available on the lower ground, ground, first, second, and third floors, offering versatile options for discerning buyers.",
      location: "Golf Course Ext Rd, Sec 66, Gurugram",
      builder: "By SmartWorld",
      size: "2945-3660 sq.ft",
      billStatus: "Ready to Move",
      projectStatus: "Completed",
      price: "₹6.77 Cr+"
    },
    
    // 5. M3M Altitude
    {
      imageSrc: M3MAltitudeImg1,
      altText: "M3M Altitude",
      captionText: "M3M Altitude",
      description: "This new launch property offers compact units ranging from 3685 to 8000 square feet, with prices starting from 7.4 crores onwards. These units are available on the ground floor, first floor, and second floor, providing flexible options for prospective buyers.",
      location: "Sector 65, Gurgaon",
      builder: "M3M Group",
      size: "3685 - 8000 sq.ft",
      billStatus: "New Launch",
      projectStatus: "Under Construction",
      price: "₹7.4 Cr+"
    },
    
    // 6. Whiteland Sector 103
    {
      imageSrc: WhitelandSector103Img1,
      altText: "Whiteland Sector 103",
      captionText: "Whiteland Sector 103",
      description: "Newly launched development offering 3 and 4 BHK units ranging from 2200 to 3400 square feet.",
      location: "Sector 103, Dwarka Expressway, Gurugram",
      builder: "Whiteland",
      size: "2200-3400 sq.ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹3.5 Cr+ Onwards"
    },

    // 7. Pyramid Alban
    {
      imageSrc: PyramidAlbanImg1,
      altText: "Pyramid Alban",
      captionText: "Pyramid Alban",
      description: "New launch project offering 3 BHK units of 2360 square feet.",
      location: "Sector 71, Gurugram",
      builder: "PYRAMID",
      size: "2360 sq.ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹3.7 Cr* Onwards"
    },

    // 8. M3M Mansion
    {
      imageSrc: M3MMansionImg1,
      altText: "M3M Mansion",
      captionText: "M3M Mansion",
      description: "New launch offering 3.5 and 4.5 BHK units ranging from 1600 to 2400 square feet.",
      location: "Sector 113, Dwarka Expressway, Gurugram",
      builder: "M3M India",
      size: "1600-2400 Sq.Ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹4.76 Cr* Onwards"
    },

    // 9. Smartworld One DXP
    {
      imageSrc: DXP,
      altText: "Smartworld One DXP",
      captionText: "Smartworld One DXP",
      description: "Premium project offering 3.5 and 4.5 BHK units ranging from 1850 to 2600 square feet.",
      location: "Sector 113, Dwarka Expressway, Gurugram",
      builder: "Smart World",
      size: "1850-2600 Sq.Ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹4.98 Cr* Onwards"
    },

    // 10. Signature Global Titanium SPR
    {
      imageSrc: SPR,
      altText: "Signature Global Titanium SPR",
      captionText: "Signature Global Titanium SPR",
      description: "New launch offering 3.5 and 4.5 BHK units ranging from 2780 to 3780 square feet.",
      location: "Sector 71, SPR Rd, Gurugram",
      builder: "Signature Global",
      size: "2780-3780 Sq.Ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹4.72 Cr* Onwards"
    },

    // 11. CBS Builder Floors
    {
      imageSrc: CBS,
      altText: "CBS Builder Floors",
      captionText: "CBS Builder Floors",
      description: "New launch project offering 3 BHK units of 2171 square feet.",
      location: "Sector 63A, Golf Course Ext Rd, Gurugram",
      builder: "CBS Developers",
      size: "2171 Sq.Ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹2.4 Cr* Onwards"
    },

    // 12. Victory Floors
    {
      imageSrc: Victor,
      altText: "Victory Floors",
      captionText: "Victory Floors",
      description: "New launch offering 3.5 BHK units of 1700 square feet.",
      location: "Sector 63A, Golf Course Ext Rd, Gurugram",
      builder: "Laburnum Developers",
      size: "1700 Sq.Ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹2.1 Cr* Onwards"
    },

    // 13. Max Estate 360
    {
      imageSrc: Max360,
      altText: "Max Estate 360",
      captionText: "Max Estate 360",
      description: "New launch project offering 3 & 4 BHK units ranging from 2611 to 3531 square feet.",
      location: "Sector 36A, Dwarka Expressway, Gurugram",
      builder: "Max Estates",
      size: "2611-3531 Sq.ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹5 Cr* Onwards"
    },

    // 14. M3M Crown
    {
      imageSrc: M3MCrown,
      altText: "M3M Crown",
      captionText: "M3M Crown",
      description: "New launch offering 3.5/4.5 BHK units ranging from 1605 to 2670 square feet.",
      location: "Sector 11, Dwarka Expressway, Gurugram",
      builder: "M3M",
      size: "1605-2670 Sq.ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹3.48 Cr* Onwards"
    },

    // 15. M3M Opus (Latitude II)
    {
      imageSrc: M3MOpus,
      altText: "M3M Opus (Latitude II)",
      captionText: "M3M Opus (Latitude II)",
      description: "New launch project offering 3.5 BHK units of 2398 square feet.",
      location: "M3M Merlin, Sector 67, Gurugram",
      builder: "M3M",
      size: "2398 sq.ft",
      billStatus: "Under Construction",
      projectStatus: "New Launch",
      price: "₹4.7 Cr*"
    }
  ];

  return (
    <>
      <div className="h-[calc(45vh-5rem)] md:h-[calc(70vh-5rem)] m-2 rounded-4xl relative">
        {/* Background Image Div */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-4xl bg-no-repeat"
          style={{
            backgroundImage: `url(${ResidentialImg1})`
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-3% to-black/100 rounded-4xl"></div>
        </div>

        {/* Content Div - This will appear above the background */}
        <div className="relative z-10 h-full flex items-end justify-center">
          <div className="text-center text-white pb-8">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 text-white">Residential Projects</h1>
            <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">We Recommend</h2>
          </div>
        </div>
      </div>

      <div className="m-2 py-10">
        <TiltedCardGrid
          itemsPerRow={1}
          rotateAmplitude={15}
          scaleOnHover={1.01}
          cards={ResidentialProjects}
        />
      </div>
    </>
  )
}

export default Residential