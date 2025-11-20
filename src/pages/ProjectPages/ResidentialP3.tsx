// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/golfhillp8.jpg";
import project1Image2 from "../../assets/images/golfhillab.jpg";

import galleryImage1 from "../../assets/images/golfhillp1.jpg";
import galleryImage2 from "../../assets/images/golfhillp2.jpg";
import galleryImage3 from "../../assets/images/golfhillp3.jpg";
import galleryImage4 from "../../assets/images/golfhillp4.jpg";
import galleryImage5 from "../../assets/images/golfhillp5.jpg";

import premiumImage1 from "../../assets/images/golfhillp6.jpg";
import premiumImage2 from "../../assets/images/golfhillp7.jpg";
import premiumImage3 from "../../assets/images/golfhillp8.jpg";
import premiumImage4 from "../../assets/images/golfhillp1.jpg";
import premiumImage5 from "../../assets/images/golfhillp2.jpg";
import premiumImage6 from "../../assets/images/golfhillp4.jpg";

const ResidentialP3 = () => {
    const projectData = {
        projectName: "SECTOR 79, GURUGRAM",
        location: "M3M GOLF HILLS",
        tagline: "3.5 & 4.5 BHK GOLF-RESIDENCES",
        investmentInfo: "Price Starts At ₹ 3.6 Cr* Onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        aboutTitle: "M3M GOLF HILLS Sector 79, Gurugram",
        features: [
            {
                title: "Bang on Golf Course Extension Road.",
                description: "Enjoy the luxury of residing in a prime location with easy access to amenities and facilities."
            },
            {
                title: "Global Landscape Architecture",
                description: "Extending across 75 acres, it is masterfully crafted by Arcop International, based in Canada."
            },
            {
                title: "World-Class Amenities & Sports Facilities.",
                description: "Enjoy a plethora of amenities including clubhouse, swimming pool, and gymnasium."
            }
        ],

        connectivityTitle: "Location Advantages",
        connectivityFeatures: [
            "Upcoming public transportation systems such as ISBT, RRTS, etc.",
            "Near to Prominent educational institutions like DPS, Government Polytechnic Manesar, and Amity University",
            "30 Mint from IGI Airport",
            "Near to Prominent health institutions like Polaris hospital, VPS Rockland Hospital",
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

export default ResidentialP3;