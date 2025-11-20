// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/antalyahillbBg.jpg";
import project1Image2 from "../../assets/images/antalyahillbBg.jpg";

import galleryImage1 from "../../assets/images/antalyahillg1.jpg";
import galleryImage2 from "../../assets/images/antalyahillg2.jpg";
import galleryImage3 from "../../assets/images/antalyahillg3.jpg";
import galleryImage4 from "../../assets/images/antalyahillg4.jpg";
import galleryImage5 from "../../assets/images/antalyahillg1.jpg";

import premiumImage1 from "../../assets/images/antalyahillp1.webp";
import premiumImage2 from "../../assets/images/antalyahillp2.webp";
import premiumImage3 from "../../assets/images/antalyahillp3.webp";
import premiumImage4 from "../../assets/images/antalyahillp4.webp";
import premiumImage5 from "../../assets/images/antalyahillp3.webp";
import premiumImage6 from "../../assets/images/antalyahillp4.webp";

const ResidentialP1 = () => {
    const projectData = {
        projectName: "M3M India",
        location: "ANTALYA HILLS",
        tagline: "Luxurious 1, 1.5, 2, 2.5 & 3.5 BHK Residences",
        investmentInfo: "Price Starts @ ₹1.5 Cr*.",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        aboutTitle: "M3M ANTALYA HILLS Sector 79, Gurugram",
        features: [
            {
                title: "Aravalli Hills Haven",
                description: "Embrace a serene living environment infused with nature's tranquility."
            },
            {
                title: "Unparalleled Luxury Living",
                description: "Experience opulent living in 1, 1.5, 2, 2.5 & 3.5 BHK luxury residences."
            },
            {
                title: "101 Exceptional Amenities",
                description: "Every need and desire is catered to within this luxurious township."
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "Surrounded by the Aravalli foothills. 30 minutes from IGI Airport.",
            "Next to huge commercial hubs (Sector-74A and 75A, Gurugram)",
            "Easy and smooth connectivity from NH-8, Southern Peripheral Road, KMP Expressway and IGI Airport",
            "Hospitals like- Swastik Hospital , VPS Rockland Hospital, Shubham Healthcare Hospital, etc. are in close proximity.",
            "Educational Institutions like- L.S. Convent School, UCSKM Public School, Ryan International School etc. are nearby.",
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

export default ResidentialP1;