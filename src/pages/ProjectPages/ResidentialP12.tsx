// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/victoryab.webp";
import project1Image2 from "../../assets/images/victoryab.webp";

import galleryImage1 from "../../assets/images/victoryp1.jpg";
import galleryImage2 from "../../assets/images/victoryp2.jpg";
import galleryImage3 from "../../assets/images/victoryp3.jpg";
import galleryImage4 from "../../assets/images/victoryp4.jpg";
import galleryImage5 from "../../assets/images/victoryp5.jpg";

import premiumImage1 from "../../assets/images/victoryp1.jpg";
import premiumImage2 from "../../assets/images/victoryp3.jpg";
import premiumImage3 from "../../assets/images/victoryp4.jpg";
import premiumImage4 from "../../assets/images/victoryp3.jpg";
import premiumImage5 from "../../assets/images/victoryp2.jpg";
import premiumImage6 from "../../assets/images/victoryp1.jpg";

const ResidentialP12 = () => {
    const projectData = {
        projectName: "Laburnum Developers",
        location: "Victory Floors",
        tagline: "Sec 63A, Golf Course Ext Rd, Gurgaon",
        investmentInfo: "3.5 BHK @ ₹2.10 Cr*.",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',

        headFeature1: 'Low Rise',
        headFeature1_2: 'Development',
        headFeature2: 'Flexible',
        headFeature2_2: 'Payment Pans',
        headFeature3: 'Modular',
        headFeature3_2: 'Kitchen',
        headFeature4: 'Option To Choose',
        headFeature4_2: 'Private Terrace',

        aboutTitle: "Discover a Life of Luxury and Comfort",
        features: [
            {
                title: "Laburnum Victory Floors",
                description: "A prestigious residential community nestled in Anant Raj, Sector 63A, Gurugram. Designed for those who seek an exceptional living experience, our project offers a perfect blend of luxury, comfort, and modern amenities."
            },
            {
                title: "Crafted to Perfection",
                description: "Redefines the art of living with opulence and extravagance. Our focus is to create the finest homes, setting a new standard for unmatched living experiences. With innovative designs and flawless execution, we transform luxurious living spaces amidst sprawling, serene green landscapes."
            },
            {
                title: "Project Highlights",
                description: "Located in Sector 63A, Gurugram, Laburnum Victory Floors provides excellent connectivity to major hubs and conveniences. Choose from a variety of floor plans that cater to different family sizes and preferences, ensuring ample space for every member.  Our homes feature contemporary designs with high-quality finishes, ensuring a blend of aesthetics and functionality. Enjoy serene views and lush green landscapes that create a peaceful living environment."
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

export default ResidentialP12;