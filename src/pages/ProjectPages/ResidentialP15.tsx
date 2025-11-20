// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/lastp8.jpg";
import project1Image2 from "../../assets/images/lastab.jpg";

import galleryImage1 from "../../assets/images/lastp1.jpg";
import galleryImage2 from "../../assets/images/lastp2.jpg";
import galleryImage3 from "../../assets/images/lastp3.jpg";
import galleryImage4 from "../../assets/images/lastp4.jpg";
import galleryImage5 from "../../assets/images/lastp5.jpg";

import premiumImage1 from "../../assets/images/lastp6.jpg";
import premiumImage2 from "../../assets/images/lastp7.jpg";
import premiumImage3 from "../../assets/images/lastp8.jpg";
import premiumImage4 from "../../assets/images/lastp9.jpg";
import premiumImage5 from "../../assets/images/lastp10.jpg";
import premiumImage6 from "../../assets/images/lastp11.jpg";

const ResidentialP15 = () => {
    const projectData = {
        projectName: "New Launch",
        location: "M3M Opus",
        tagline: "M3M Merlin, Sec 67, Gurgaon",
        investmentInfo: "3.5 BHK @ ₹4.7 Cr*",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        aboutTitle: "Discover a Life of Luxury and Comfort",
        features: [
            {
                title: "M3M Opus (Latitude II)",
                description: "A brand-new luxury residential tower in the prestigious M3M Merlin, Sector 67, Gurgaon. Offering an unparalleled living experience, this 33-storey high-rise redefines opulence with stunning 3BHK + Servant apartments, thoughtfully designed for those who seek an extravagant lifestyle. With 2398 sq. ft. of spacious living, each residence combines modern design, top-of-the-line amenities, and exceptional views of the city."
            },
            {
                title: "RERA No: RC/REP/HARERA/GGM/876/608/2024/103",
                description: "32-Storey Tower with Spacious Apartments: M3M Opus offers exclusive 100 units of 3BHK + Servant apartments (2398 sq. ft.) in a luxurious 33-storey high-rise, designed for those who value both space and style. The project features modern architecture, high ceilings, and expansive layouts, providing the perfect balance of luxury and comfort for families."
            },
            {
                title: "",
                description: "Top-Floor Clubhouse with Premium Amenities: Experience the height of luxury at the rooftop clubhouse, featuring breathtaking panoramic views of the city. Enjoy world-class amenities such as a swimming pool, state-of-the-art gym, spa, lounge, and recreational areas, all designed to enhance your lifestyle and create memorable experiences."
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "Close to NH-48, Dwarka Expressway, KMP Expressway, and IGI Airport",
            "40 min drive away from IGI Airport",
            "Easy access to IT parks, industrial zones, and corporate offices",
            "Proximity to renowned hospitals and healthcare facilities",
            "Top schools and colleges within easy reach"
        ],

        galleryTitle: "Gallery",
        galleryItems: [
            {
                image: galleryImage1,
                name: "Skyline Business Center",
                location: "Downtown District",
                type: "Office Complex"
            },
            {
                image: galleryImage2,
                name: "Skyline Business Center",
                location: "Downtown District",
                type: "Office Complex"
            },
            {
                image: galleryImage3,
                name: "Skyline Business Center",
                location: "Downtown District",
                type: "Office Complex"
            },
            {
                image: galleryImage4,
                name: "Skyline Business Center",
                location: "Downtown District",
                type: "Office Complex"
            },
            {
                image: galleryImage5,
                name: "Skyline Business Center",
                location: "Downtown District",
                type: "Office Complex"
            },          
        ],

        ctaTitle: "Why some units make more profit than others? Selection of units is crucial.",

        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.917391156246!2d77.0338659753373!3d28.41087507567416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b294e5e7b3f%3A0x5a5a5a5a5a5a5a5a!2sSector%2082%2C%20Gurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1234567890&zoom=15&language=en",

        bentoTitle: "Our Premium Features",
        bentoData: [
            {
                imageSrc: premiumImage1,
                title: "First & Finest",
                description: "Commercial Mall of New Gurugram",
                label: "Smart"
            },
            {
                imageSrc: premiumImage2,
                title: "Shopping Mall",
                description: "Spread across 9 Acres",
                label: "Luxury"
            },
            {
                imageSrc: premiumImage3,
                title: "Mix of Retail",
                description: "F&B, 5 Screen Multiplex & 5 Star Hotel",
                label: "Smart"
            },
            {
                imageSrc: premiumImage4,
                title: "Direct access",
                description: "From Dwarka Expressway & NH8",
                label: "Luxury"
            },
            {
                imageSrc: premiumImage5,
                title: "Double Height",
                description: "Road Facing Shops With Maximum Visibility",
                label: "Features"
            },
            {
                imageSrc: premiumImage6,
                title: "Incredibly High",
                description: " Residential & Commercial Catchment",
                label: "Luxury"
            },
            
    // Add more cards as needed
  ]

    };

    return <ProjectDetailsPage {...projectData} />;
};

export default ResidentialP15;