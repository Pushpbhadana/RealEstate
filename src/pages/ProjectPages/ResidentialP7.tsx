// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/pyramidab.png";
import project1Image2 from "../../assets/images/pyramidpab.jpg";

import galleryImage1 from "../../assets/images/pyramidp1.jpg";
import galleryImage2 from "../../assets/images/pyramidp2.jpg";
import galleryImage3 from "../../assets/images/pyramidp3.jpg";
import galleryImage4 from "../../assets/images/pyramidp4.jpg";
import galleryImage5 from "../../assets/images/pyramidp1.jpg";

import premiumImage1 from "../../assets/images/pyramidp6.jpg";
import premiumImage2 from "../../assets/images/pyramidp4.jpg";
import premiumImage3 from "../../assets/images/pyramidp1.jpg";
import premiumImage4 from "../../assets/images/pyramidp3.jpg";
import premiumImage5 from "../../assets/images/pyramidp2.jpg";
import premiumImage6 from "../../assets/images/pyramidp1.jpg";

const ResidentialP7 = () => {
    const projectData = {
        projectName: "SECTOR 71, GURUGRAM",
        location: "PYRAMID ALBAN",
        tagline: "3 BHK ULTRA LUXURY HIGH APARTMENTS",
        investmentInfo: "Price Starts at ₹ 3.7 Cr* Onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',

        
        headFeature1: 'Payment Plan',
        headFeature1_2: '35:30:35',
        headFeature2: 'Full Glass Facade',
        headFeature2_2: 'Apartment',
        headFeature3: 'First Movers',
        headFeature3_2: 'Advantages',
        headFeature4: '80% Open',
        headFeature4_2: 'Green Area',

        aboutTitle: "PYRAMID ALBAN",
        features: [
            {
                title: "5-Acre Ultra-Luxury High Rise Development",
                description: "Experience an unparalleled level of luxury in this high-rise development spanning across 5 acres of prime land."
            },
            {
                title: "Prime Location: SPR Sector 71",
                description: "Situated in the heart of SPR - Southern Periphery Road, Sector 71, directly across from DLF Alameda."
            },
            {
                title: "World Class Amenities",
                description: "Experience lavish landscaped gardens, clubhouse, spa and wellness center, sports facilities, and 24/7 security."
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "Bang On 150 Mts Wide SPR Road",
            "Close to NH-48, Dwarka Expressway, KMP Expressway, and IGI Airport",
            "Malls and Multiplexes near by",
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

export default ResidentialP7;