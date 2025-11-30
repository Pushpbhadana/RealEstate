// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/m3maltitudeab.jpeg";
import project1Image2 from "../../assets/images/m3maltitudeab.jpeg";

import galleryImage1 from "../../assets/images/m3maltitudep1.jpg";
import galleryImage2 from "../../assets/images/m3maltitudep2.jpg";
import galleryImage3 from "../../assets/images/m3maltitudep3.jpg";
import galleryImage4 from "../../assets/images/m3maltitudep4.jpg";
import galleryImage5 from "../../assets/images/m3maltitudep5.jpg";

import premiumImage1 from "../../assets/images/m3maltitudep1.jpg";
import premiumImage2 from "../../assets/images/m3maltitudep2.jpg";
import premiumImage3 from "../../assets/images/m3maltitudep3.jpg";
import premiumImage4 from "../../assets/images/m3maltitudep4.jpg";
import premiumImage5 from "../../assets/images/m3maltitudep5.jpg";
import premiumImage6 from "../../assets/images/m3maltitudep6.jpg";

const ResidentialP5 = () => {
    const projectData = {
        projectName: "Ultra Luxury Suites",
        location: "M3M Altitude",
        tagline: "4.5 BHK & Pent House @ ₹ 7.40 Cr*",
        investmentInfo: "Sec 65, Gurugram",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',

        
        headFeature1: '200+',
        headFeature1_2: 'Amenities',
        headFeature2: '6+',
        headFeature2_2: 'Clubhouses',
        headFeature3: '50000+ Sq. Ft.',
        headFeature3_2: 'Of Sports Amenities',
        headFeature4: '5+',
        headFeature4_2: 'Pools',

        aboutTitle: "M3M Altitude at Golf Estate Sec 65, Gruurgram",
        features: [
            {
                title: "Ultra Luxury 4.5 BHK & Pent House",
                description: "Experience the epitome of luxury living at M3M Altitude, an ultra-luxury high-rise residential project located in Gurugram’s thriving Sector 65. Offering Luxury Suites (4.5 Bhk+S) & Skyline Pentsuites. Designed to offer unparalleled comfort and sophistication, M3M Altitude is the perfect blend of modern architecture, world-class amenities, and exquisite interiors."
            },
            {
                title: "New Apartment Launches in Manesar",
                description: "Step into a world where modern design meets everyday convenience. These new apartment launches in Sector 9, Manesar offer thoughtfully designed 3BHK and builder floor homes, crafted for those who value space, comfort, and connectivity. Located just minutes from NH-48 and surrounded by essential amenities, each residence brings a balanced lifestyle."
            },
            {
                title: "RERA Regd. No",
                description: "RC/REP/HARERA/GGM/821/553/2024/48"
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "Just a 30-minute drive from Delhi International Airport",
            "Close Proximity To Renowned Schools And Shopping Malls",
            "Easy access to IT parks, industrial zones, and corporate offices",
            "Proximity to renowned hospitals and healthcare facilities",
            "Nearest metro station is 5 km away"
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

export default ResidentialP5;