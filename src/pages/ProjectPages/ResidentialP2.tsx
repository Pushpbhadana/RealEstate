// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/smartworldbg.jpg";
import project1Image2 from "../../assets/images/smartworldAb.webp";

import galleryImage1 from "../../assets/images/smartworldp1.jpg";
import galleryImage2 from "../../assets/images/smartworldp2.jpg";
import galleryImage3 from "../../assets/images/smartworldp3.jpg";
import galleryImage4 from "../../assets/images/smartworldp4.jpg";
import galleryImage5 from "../../assets/images/smartworldp5.jpg";

import premiumImage1 from "../../assets/images/smartworldp6.jpg";
import premiumImage2 from "../../assets/images/smartworldp7.jpg";
import premiumImage3 from "../../assets/images/smartworldp8.jpg";
import premiumImage4 from "../../assets/images/smartworldp3.jpg";
import premiumImage5 from "../../assets/images/smartworldp2.jpg";
import premiumImage6 from "../../assets/images/smartworldp1.jpg";

const ResidentialP2 = () => {
    const projectData = {
        projectName: "Smart World",
        location: "SKY ARC",
        tagline: "3, 3.5, & 4.5 BHK Residences @ ₹3.75 Cr*",
        investmentInfo: "Sec 69, Golf Course Ext Rd, Gurugram",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        aboutTitle: "Replica of Marina Bay Sands Singapore",
        features: [
            {
                title: "A New Landmark in Sector 69",
                description: "Step into a world of unparalleled luxury with Smartworld's new launch residential project in Sector 69, Gurugram. Drawing inspiration from the iconic Marina Bay Sands in Singapore, this architectural marvel redefines upscale living in the heart of Gurugram. With a blend of modern design, world-class amenities, and an unbeatable location, this project is set to become a landmark in the city."
            },
            {
                title: "RC/REP/HARERA/GGM/878/610/2024/105",
                description: "DATE: 11.10.2024"
            },
            
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "Close proximity to Commercial Spaces",
            "Easy access to NH-8 & Dwarka Expressway",
            "Top-Rated Schools: Within a 5-10 km radius",
            "Multi-Specialty Hospitals: Located nearby",
            "20 mins drive from Indira Gandhi International Airport(IGI)",
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

export default ResidentialP2;