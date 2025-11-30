// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/whitelandp1.jpg";
import project1Image2 from "../../assets/images/whitelandbg.jpg";

import galleryImage1 from "../../assets/images/whitelandp1.jpg";
import galleryImage2 from "../../assets/images/whitelandp2.jpg";
import galleryImage3 from "../../assets/images/whitelandp3.jpg";
import galleryImage4 from "../../assets/images/whitelandp4.jpg";
import galleryImage5 from "../../assets/images/whitelandp5.jpg";

import premiumImage1 from "../../assets/images/whitelandp4.jpg";
import premiumImage2 from "../../assets/images/whitelandp5.jpg";
import premiumImage3 from "../../assets/images/whitelandp4.jpg";
import premiumImage4 from "../../assets/images/whitelandp3.jpg";
import premiumImage5 from "../../assets/images/whitelandp2.jpg";
import premiumImage6 from "../../assets/images/whitelandp1.jpg";

const ResidentialP6 = () => {
    const projectData = {
        projectName: "SECTOR 103, GURUGRAM",
        location: "WHITELAND NEW LAUNCH",
        tagline: "3 BHK/4 BHK ULTRA LUXURY HIGH APARTMENTS",
        investmentInfo: "Price Starts at ₹ 3.50 Cr* Onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        
        headFeature1: 'Payment Plan',
        headFeature1_2: '30:30:40',
        headFeature2: 'Sunlight',
        headFeature2_2: 'Facing Balconies',
        headFeature3: 'Modular Kitchen Along',
        headFeature3_2: 'With All White Goods',
        headFeature4: 'First Movers',
        headFeature4_2: 'Advantages',

        aboutTitle: "WHITELAND NEW LAUNCH",
        features: [
            {
                title: "Premier Dwarka Expressway Location",
                description: "Whiteland Sector 103 offers an unbeatable address for luxury living, at the crossroads of convenience and opulence."
            },
            {
                title: "3 & 4 BHK Apartments & Penthouse",
                description: "Choose from carefully crafted 3 & 4 BHK apartments and penthouses, combining comfort and sophistication seamlessly."
            },
            {
                title: "High-end Luxury Specifications",
                description: "This luxurious residential project redefines urban living with its high-end luxury specifications."
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "6 Km from 18-hole biggest Asia Golf Course",
            "40 min drive away from IGI Airport",
            "Easy access to IT parks, industrial zones, and corporate offices",
            "Great Hospital Nearby: Rockland Hospital, Columbia Asia Hospital, and Artemis Hospital.",
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

export default ResidentialP6;