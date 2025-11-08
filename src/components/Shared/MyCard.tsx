import TiltedCard from '../ui/TiltedCard'; // Adjust import path as needed

interface CardData {
  imageSrc: string;
  altText: string;
  captionText: string;
  description: string;
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
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in ratione similique doloribus vitae molestiae vero veniam eius, earum excepturi ab atque provident exercitationem nihil sunt, harum itaque. Maiores, aliquid?"
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in ratione similique doloribus vitae molestiae vero veniam eius, earum excepturi ab atque provident exercitationem nihil sunt, harum itaque. Maiores, aliquid?"
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in ratione similique doloribus vitae molestiae vero veniam eius, earum excepturi ab atque provident exercitationem nihil sunt, harum itaque. Maiores, aliquid?"
    }
  ],
  rotateAmplitude = 12,
  scaleOnHover = 1.01,
  itemsPerRow = 3
}: TiltedCardGridProps) => {
  return (
    <div className="w-full px-4 lg:px-6">
      <div className={`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${itemsPerRow}
        gap-4 lg:gap-6 justify-items-center
        ${itemsPerRow === 2 ? 'xl:grid-cols-2' : ''}
        ${itemsPerRow === 4 ? 'xl:grid-cols-4' : ''}
        ${itemsPerRow === 5 ? 'xl:grid-cols-5' : ''}
        ${itemsPerRow === 6 ? 'xl:grid-cols-6' : ''}
      `}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full max-w-sm bg-white p-4 lg:p-6 rounded-3xl lg:rounded-4xl shadow-lg hover:shadow-xl transition-shadow duration-300 my-4 lg:my-0"
          >
            <TiltedCard
              imageSrc={card.imageSrc}
              altText={card.altText}
              captionText={card.captionText}
              containerHeight="350px"
              containerWidth="350px"
              imageHeight="340px"
              imageWidth="335px"
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
            <div className="text-gray-700 leading-relaxed text-sm lg:text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300 mt-4">
              {card.description}
            </div>

            <div className="flex flex-row items-center mt-4   gap-4">
            <a href="/details" className='px-4 py-2  mt-4 bg-white text-gray-800 text-sm md:text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group mx-auto'> 
            <span className='truncat'>View Details</span> 
            <svg className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>

            <a href="/contact" className='px-4 py-2  mt-4 bg-white text-gray-800 text-sm md:text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group mx-auto'> 
            <span className='truncat'>Give a Call</span> 
            <svg className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiltedCardGrid;