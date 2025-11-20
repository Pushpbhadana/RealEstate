// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/Elanbg.webp";
import project1Image2 from "../../assets/images/auraab.jpg";

import galleryImage1 from "../../assets/images/auraab.jpg";
import galleryImage2 from "../../assets/images/aurap1.jpg";
import galleryImage3 from "../../assets/images/aurap2.jpeg";
import galleryImage4 from "../../assets/images/aurap3.jpeg";
import galleryImage5 from "../../assets/images/aurap4.jpeg";

import premiumImage1 from "../../assets/images/aurap1.jpg";
import premiumImage2 from "../../assets/images/aurap2.jpeg";
import premiumImage3 from "../../assets/images/aurap3.jpeg";
import premiumImage4 from "../../assets/images/aurap4.jpeg";
import premiumImage5 from "../../assets/images/aurap2.jpeg";
import premiumImage6 from "../../assets/images/aurap1.jpg";

const ComingSoonP3 = () => {
    const projectData = {
        projectName: "Aura New Launch",
        location: "Sector – 79, GURUGRAM",
        tagline: "2.5, 3 & 3.5 BHK GOLF-RESIDENCES",
        investmentInfo: "Price Starts at ₹1.93 Cr.* onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        aboutTitle: "Aura Pre Launch Gurgaon",
        features: [
            {
                title: "Welcome to Aura",
                description: "Welcome to Aura, a refined residential address set across a sprawling 5-acre estate in Sector 79, Gurgaon. Comprising five elegant high-rise towers, Aura offers a meticulously curated living experience where luxury meets connectivity.."
            },
            {
                title: "With each new launch",
                description: "With each new launch such as our upcoming project in Sector 79, Gurgaon we bring together a refined blend of location, design and value. The result: limited-inventory, ultra-premium offerings in the heart of a growing, connected city. When you choose Aura, you’re choosing more than a space you’re choosing a lifestyle built on trust, foresight and excellence."
            },
            {
                title: "At Aura",
                description: "At Aura, we believe in building more than just structures we build communities with purpose, homes with personality, and spaces that stand the test of time. Our mission is to transform carefully selected locations into vibrant, future-ready environments where families thrive and investors prosper."
            },
            {
                title: "About Aura",
                description: "At Aura, we believe in building more than just structures we build communities with purpose, homes with personality, and spaces that stand the test of time. Our mission is to transform carefully selected locations into vibrant, future-ready environments where families thrive and investors prosper."
            }

        ],

        connectivityTitle: "Location Perks",
        connectivityFeatures: [
            "NH8 I SPR I GCRE I KMP ExpresswayI Dwarka Expressway | IGI Airport",
            "Cricket Stadium I Karma Lakelands Golden Greens Golf & Resorts I Jungle Safari & Trails | Cyber Hub |Ambience Mall",
            "Just 20 minutes drive from IGI Airport",
            "DPS, Manesar I Kunskapsskolan, Gurgaon IAmity University, Gurgaon",
            "Proximity To Renowned Schools",
            "Medanta- The Medicity |IGD Primary Healthcare Center, | VPS Rockland Hospital, etc."
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

export default ComingSoonP3;