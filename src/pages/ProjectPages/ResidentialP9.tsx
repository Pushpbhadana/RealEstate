// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/dxp1.jpg";
import project1Image2 from "../../assets/images/Dxp.jpg";

import galleryImage1 from "../../assets/images/dxp1.jpg";
import galleryImage2 from "../../assets/images/dxp2.jpg";
import galleryImage3 from "../../assets/images/dxp3.jpg";
import galleryImage4 from "../../assets/images/dxp4.jpg";
import galleryImage5 from "../../assets/images/dxp5.jpg";

import premiumImage1 from "../../assets/images/dxp2.jpg";
import premiumImage2 from "../../assets/images/dxp1.jpg";
import premiumImage3 from "../../assets/images/dxp5.jpg";
import premiumImage4 from "../../assets/images/dxp3.jpg";
import premiumImage5 from "../../assets/images/dxp2.jpg";
import premiumImage6 from "../../assets/images/dxp1.jpg";

const ResidentialP9 = () => {
    const projectData = {
        projectName: "Sector 113, Dwarka Expressway, Gurugram",
        location: "Smartworld One DXP",
        tagline: "3.5, and 4.5 BHK Residences.",
        investmentInfo: "Price Starts At ₹4.98 Cr* Onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        
        headFeature1: 'Resort Style Landscape',
        headFeature1_2: 'With Lagoons.',
        headFeature2: 'First 24x7 CoWorking',
        headFeature2_2: 'Space In Delhi NCR.',
        headFeature3: 'Fully Loaded Apartment',
        headFeature3_2: 'PWith Modular Kitchen.',
        headFeature4: 'Observatory Deck with',
        headFeature4_2: 'city skyline.',

        aboutTitle: "Smartworld One DXP",
        features: [
            {
                title: "State-of-the-Art Homes",
                description: "Elevating your lifestyle with a selection of 3.5, and 4.5 BHK residences. Facade Design By Uha, London."
            },
            {
                title: "Located on Dwarka Expressway",
                description: "Situated strategically along the Dwarka Expressway, SmartWorld One DXP enjoys seamless connectivity to key landmarks."
            },
            {
                title: "1.10 Lacs Sq Ft Club Facilities",
                description: "Featuring expansive social, sports, and satellite club zones, as well as luxurious condos with scenic views of central lagoons."
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

export default ResidentialP9;