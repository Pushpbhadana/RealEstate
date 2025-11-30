// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/Elanbg.webp";
import project1Image2 from "../../assets/images/ElanAbout.jpg";

import galleryImage1 from "../../assets/images/Elang1.jpg";
import galleryImage2 from "../../assets/images/Elang2.jpg";
import galleryImage3 from "../../assets/images/Elang3.jpg";
import galleryImage4 from "../../assets/images/Elang4.jpg";
import galleryImage5 from "../../assets/images/Elang5.jpg";

import premiumImage1 from "../../assets/images/Elanp1.jpg";
import premiumImage2 from "../../assets/images/Elanp2.jpg";
import premiumImage3 from "../../assets/images/Elanp3.jpg";
import premiumImage4 from "../../assets/images/Elanp4.jpg";
import premiumImage5 from "../../assets/images/Elanp5.jpg";
import premiumImage6 from "../../assets/images/Elanp6.jpg";

const ElanImperial = () => {
    const projectData = {
        projectName: "ELAN IMPERIAL",
        location: "Elan Imperial,Sector 82, Gurgaon",
        tagline: "Studio, Office & Retail Spaces",
        investmentInfo: "Starting Price ₹ 1.5 cr* Onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',

        
        headFeature1: '1st Mall',
        headFeature1_2: 'of New Gurgaon',
        headFeature2: 'Assured Return',
        headFeature2_2: '12% Onwards',
        headFeature3: 'Lease Guarantee',
        headFeature3_2: '9 Years',
        headFeature4: 'Prime Location',
        headFeature4_2: 'Adjacent to DLF Gdn. City',


        aboutTitle: "Studio, Office & RetailELAN IMPERIAL",
        features: [
            {
                title: "First Mall of New Gurugram",
                description: "A dynamic business hub in Sector 82 that promises a new epicenter for Gurugram."
            },
            {
                title: "Dynamic SCO Spaces",
                description: "Experience unique and vibrant SCO spaces offering a wealth of investment opportunities."
            },
            {
                title: "Strategic Location",
                description: "Unlock a world of opportunities in a thriving and easily accessible location."
            },
            {
                title: "Project RERA No: DLRERA2024P0003",
                description: "Officially registered and approved project."
            }
        ],

        connectivityTitle: "Location Perks",
        connectivityFeatures: [
            "Just 1 minute drive from NH8.",
            "Just 8 minutes drive from Dwarka Expressway",
            "Just 20 minutes drive from IGI Airport",
            "Proximity To Renowned Schools",
            "Located On Southern Peripheral Road (SPR)",
            "Situated In Sector 82 Gurgaon Opposite DLF Ultima"
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

export default ElanImperial;