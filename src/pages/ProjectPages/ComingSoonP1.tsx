// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/ComingSoonP1bg.jpg";
import project1Image2 from "../../assets/images/ComingSoonP1abbg.jpg";

import galleryImage1 from "../../assets/images/ComingSoonP1p1.jpeg";
import galleryImage2 from "../../assets/images/ComingSoonP1p2.jpeg";
import galleryImage3 from "../../assets/images/ComingSoonP1p3.jpeg";
import galleryImage4 from "../../assets/images/ComingSoonP1p4.png";
import galleryImage5 from "../../assets/images/ComingSoonP1p1.jpeg";

import premiumImage1 from "../../assets/images/ComingSoonP1g1.png";
import premiumImage2 from "../../assets/images/ComingSoonP1g2.png";
import premiumImage3 from "../../assets/images/ComingSoonP1g3.png";
import premiumImage4 from "../../assets/images/ComingSoonP1g1.png";
import premiumImage5 from "../../assets/images/ComingSoonP1g2.png";
import premiumImage6 from "../../assets/images/ComingSoonP1g3.png";

const ComingSoonP1 = () => {
    const projectData = {
        projectName: "Get Pre-Launch ₹2K Offer*",
        location: "BIRLA PRAVAAH",
        tagline: "3 BHK & 3.5 BHK Ultra-luxury Apartments",
        investmentInfo: "Starting Price ₹ 1.5 cr* Onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',

        headFeature1: 'High Density',
        headFeature1_2: 'Project',
        headFeature2: 'Flexible',
        headFeature2_2: 'Payment Pan',
        headFeature3: '100+',
        headFeature3_2: 'Amenities',
        headFeature4: 'Private',
        headFeature4_2: 'Terrace',

        aboutTitle: "BIRLA Sector 71, Gurugram",
        features: [
            {
                title: "Experience Next-Level Luxury",
                description: "Welcome to BIRLA the latest ultra-luxury residential development by Birla Estates, nestled in the heart of Sector 71, Gurgaon. Designed for those who seek sophistication, comfort, and an unmatched lifestyle, BIRLA GURGAON brings together timeless architecture, premium amenities, and an ideal location that promises high appreciation and strong investment potential."
            },
            {
                title: "RERA Regd. No: ",
                description: "Coming Soon"
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "5 mins to Rapid Metro Station (Sector 55-56)",
            "10 mins – Huda City Centre Metro",
            "15 mins – Cyber City, DLF Cyberhub",
            "15 mins to IGI Airport via NH-48",
            "Close to top schools, hospitals & shopping malls",
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

export default ComingSoonP1;