import comingSoonImg from "../assets/images/commingSoonBg.jpg";
import TiltedCardGrid from "../components/Shared/MyCard";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";


const ComingSoon = () => {
  return (
    <>
      <div className="h-[calc(70vh-5rem)] m-2 rounded-4xl relative">
        {/* Background Image Div */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-4xl bg-no-repeat"
          style={{
            backgroundImage: `url(${comingSoonImg})`
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-black/100 rounded-4xl"></div>
        </div>

        {/* Content Div - This will appear above the background */}
        <div className="relative z-10 h-full flex items-end justify-center">
          <div className="text-center text-white">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 text-white">Coming Soon</h1>
            <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">New Projects</h2>
          </div>
        </div>
      </div>

      <div className="m-2 py-10">
        <TiltedCardGrid
          itemsPerRow={3}
          rotateAmplitude={15}
          scaleOnHover={1.05}
          cards={[
            {
              imageSrc: p1,
              altText: "The Omaxe State",
              captionText: "The Omaxe State",
              description: "This new launch property offers compact units ranging from 50 to 330 square feet, with prices starting from 75 lakhs onwards. These units are available on the ground floor, first floor, and second floor, providing flexible options for prospective buyers."
            },
            {
              imageSrc: p2,
              altText: "Omaxe Chowk",
              captionText: "Omaxe Chowk",
              description: "This newly launched development offers spacious units ranging from 480 to 1340 square feet, with pricing beginning at 1 crore. These premium spaces are conveniently available on the lower ground, ground, first, second, and third floors, offering versatile options for discerning buyers."
            },
            {
              imageSrc: p3,
              altText: "Elan Imperial",
              captionText: "Elan Imperial",
              description: "This newly launched development offers spacious units ranging from 600 to 3000 square feet, with pricing beginning at 1.5 crores. These premium spaces are conveniently available on the lower ground, ground, first, second, third, and fourth floors, offering versatile options for discerning"
            },
            {
              imageSrc: p4,
              altText: "M3M Route 65",
              captionText: "M3M Route 65",
              description: "This newly launched development offers spacious units ranging from 480 to 1340 square feet, with pricing beginning at 1 crore. These premium spaces are conveniently available on the lower ground, ground, first, second, and third floors, offering versatile options for discerning buyers."
            },
            {
              imageSrc: p4,
              altText: "The Omaxe State",
              captionText: "The Omaxe State",
              description: "This new launch property offers compact units ranging from 50 to 330 square feet, with prices starting from 75 lakhs onwards. These units are available on the ground floor, first floor, and second floor, providing flexible options for prospective buyers."
            },
            {
              imageSrc: p3,
              altText: "M3M Atrium 57",
              captionText: "M3M Atrium 57",
              description: "This newly launched development offers spacious units ranging from 480 to 1340 square feet, with pricing beginning at 1 crore. These premium spaces are conveniently available on the lower ground, ground, first, second, and third floors, offering versatile options for discerning buyers."
            },
            {
              imageSrc: p2,
              altText: "M3M Paragon",
              captionText: "M3M Paragon",
              description: "This newly launched development offers spacious units ranging from 600 to 3000 square feet, with pricing beginning at 1.5 crores. These premium spaces are conveniently available on the lower ground, ground, first, second, third, and fourth floors, offering versatile options for discerning"
            },
            {
              imageSrc: p1,
              altText: "M3M2 Paragon",
              captionText: "M3M Paragon",
              description: "This newly launched development offers spacious units ranging from 480 to 1340 square feet, with pricing beginning at 1 crore. These premium spaces are conveniently available on the lower ground, ground, first, second, and third floors, offering versatile options for discerning buyers."
            },
            {
              imageSrc: p2,
              altText: "Omaxe Chowk",
              captionText: "Omaxe Chowk",
              description: "This newly launched development offers spacious units ranging from 480 to 1340 square feet, with pricing beginning at 1 crore. These premium spaces are conveniently available on the lower ground, ground, first, second, and third floors, offering versatile options for discerning buyers."
            },


          ]}
        />
      </div>
    </>
  )
}

export default ComingSoon