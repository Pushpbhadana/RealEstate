// pages/Commercial.tsx
import TiltedCard from '../components/ui/TiltedCard';
import omxChk from "../assets/images/omxChk.jpg";
import OmaxeStateImg1 from "../assets/images/omaxeState.png";
import useFetch from '@/hooks/useFeatch'; 

// types/commercial-product.ts
interface CommercialProduct {
  id: number;
  documentId: string;
  captionText: string;
  description: string;
  location: string;
  builder: string;
  size: string;
  billStatus: string;
  projectStatus: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: any[]; // Changed from imageSrc to image array
  images?: any;
  thumbnail?: any;
  viewDetailsLink?: string; // Added this field
}

interface ApiResponse {
  data: CommercialProduct[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

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
  viewDetailsLink: string;
  contactLink: string;
}

interface TiltedCardGridProps {
  cards?: CardData[];
  rotateAmplitude?: number;
  scaleOnHover?: number;
  itemsPerRow?: number;
}

const TiltedCardGrid = ({
  cards = [],
  rotateAmplitude = 12,
  scaleOnHover = 1.01,
  itemsPerRow = 1
}: TiltedCardGridProps) => {
  if (cards.length === 0) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-gray-500 text-lg">No projects found</div>
      </div>
    );
  }

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
            {/* Image Section */}
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

            {/* Content Section */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="text-sm lg:text-base">{card.location}</span>
                </div>
                
                {/* Builder */}
                <div className="flex items-center text-gray-600 mb-6">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"/>
                      </svg>
                      <span className="text-xs font-medium">Size</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{card.size}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center text-blue-600 mb-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      </svg>
                      <span className="text-xs font-medium">Price</span>
                    </div>
                    <p className="text-sm font-semibold text-blue-700">{card.price}</p>
                  </div>
                  
                  {/* Bill */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center text-gray-500 mb-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      <span className="text-xs font-medium">Status</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{card.billStatus}</p>
                  </div>
                  
                  {/* Project Status */}
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center text-green-600 mb-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
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
                  href={card.viewDetailsLink}
                  className='flex-1 px-4 py-3 bg-black text-white text-sm lg:text-base font-medium rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group'
                > 
                  <span className='truncate'>View Details</span> 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>

                <a 
                  href={card.contactLink}
                  className='flex-1 px-4 py-3 bg-white text-gray-800 text-sm lg:text-base font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 flex items-center justify-center gap-2 group'
                > 
                  <span className='truncate'>Call Now</span> 
                  <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
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

// Helper function to map API data to CardData - FIXED VERSION
const mapApiDataToCardData = (apiData: CommercialProduct[]): CardData[] => {
  return apiData.map(product => {
    // Get image URL from API response
    let imageUrl = omxChk; // Default fallback image
    
    // Check if image array exists and has at least one image
    if (product.image && product.image.length > 0) {
      const imageData = product.image[0]; // Get first image from array
      
      // Use medium format if available, otherwise use original
      if (imageData.formats?.medium?.url) {
        imageUrl = imageData.formats.medium.url;
      } else if (imageData.url) {
        imageUrl = imageData.url;
      }
    }

    // Use the viewDetailsLink from API if available, otherwise generate one
    const viewDetailsLink = product.viewDetailsLink || `/${product.captionText.toLowerCase().replace(/\s+/g, '-')}`;
    
    return {
      imageSrc: imageUrl,
      altText: product.image && product.image[0]?.alternativeText || product.captionText,
      captionText: product.captionText,
      description: product.description,
      location: product.location,
      builder: product.builder,
      size: product.size,
      billStatus: product.billStatus,
      projectStatus: product.projectStatus,
      price: product.price.startsWith('₹') ? product.price : `₹${product.price}`,
      viewDetailsLink: viewDetailsLink,
      contactLink: "/contact"
    };
  });
};

const Commercial = () => {
  const { loading, error, data } = useFetch<ApiResponse>('https://classic-melody-c69059d0ad.strapiapp.com/api/commercial-pages?populate=*');

  // Fallback data in case API is not available
  const fallbackProjects: CardData[] = [
    {
      imageSrc: OmaxeStateImg1,
      altText: "The Omaxe State",
      captionText: "The Omaxe State",
      description: "This new launch property offers compact units ranging from 50 to 330 square feet, with prices starting from 75 lakhs onwards.",
      location: "Sector 19B, Dwarka",
      builder: "By Omaxe",
      size: "50-330 sq.ft",
      billStatus: "New Launch",
      projectStatus: "Under Construction",
      price: "₹75 L+",
      viewDetailsLink: "/view-details",
      contactLink: "/contact"
    },
  ];

  // Use API data if available, otherwise use fallback
  const commercialProjects = data?.data 
    ? mapApiDataToCardData(data.data) 
    : fallbackProjects;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading commercial projects...</div>
      </div>
    );
  }

  if (error) {
    console.error('Error fetching commercial projects:', error);
    // Continue with fallback data but show error message
  }

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
            {/* <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 text-white">We Recommden</h1> */}
            <h1 className="font-semibold text-3xl md:text-5xl lg:text-7xl leading-tight mb-6 text-white">Commercial Projects</h1>
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

export default Commercial;