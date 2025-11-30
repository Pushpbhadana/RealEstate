// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/maxab.jpg";
import project1Image2 from "../../assets/images/maxp13.jpg";

import galleryImage1 from "../../assets/images/maxp1.jpg";
import galleryImage2 from "../../assets/images/maxp2.jpg";
import galleryImage3 from "../../assets/images/maxp3.jpg";
import galleryImage4 from "../../assets/images/maxp4.jpg";
import galleryImage5 from "../../assets/images/maxp5.jpg";

import premiumImage1 from "../../assets/images/maxp6.jpg";
import premiumImage2 from "../../assets/images/maxp7.jpg";
import premiumImage3 from "../../assets/images/maxp8.jpg";
import premiumImage4 from "../../assets/images/maxp13.jpg";
import premiumImage5 from "../../assets/images/maxp12.jpg";
import premiumImage6 from "../../assets/images/maxp11.jpg";

const ResidentialP13 = () => {
    const projectData = {
        projectName: "Max Estate 360",
        location: "Sec 36A, Dwarka Exp, Gurgaon",
        tagline: "3 & 4 BHK Luxury Apartments",
        investmentInfo: "Price Starts @ ₹5 Cr*",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',

        headFeature1: 'Payment Plan',
        headFeature1_2: '25:25:25:25',
        headFeature2: '12 Acres',
        headFeature2_2: 'Land Parcel',
        headFeature3: '24*7 Health Care',
        headFeature3_2: 'Facilities',
        headFeature4: '6 Towers',
        headFeature4_2: 'G+38 Floors',

        aboutTitle: "A home for every need & generation",
        features: [
            {
                title: "Elevate Your Lifestyle",
                description: "Max Estate 360 is more than just a residence; it's a lifestyle. Located in the prime area of Sector 36A on the Dwarka Expressway, this residential marvel brings you the perfect blend of luxury, convenience, and comfort. Step into a world where modern design meets timeless elegance, and every detail is crafted to perfection."
            },
            {
                title: "Spacious Apartments",
                description: "Choose from a variety of 3, and 4 BHK (2611 to 3531 Sq.ft.) apartments, thoughtfully designed to offer ample natural light and ventilation."
            },
            {
                title: "Project Highlights",
                description: "Prime Location: Sector 9, Manesar, with easy access to NH-48, Dwarka Expressway, and major business hubs Spacious Residences: 2 BHK & 3 BHK and Builder Floors Modern Architecture: Our homes feature contemporary designs with high-quality finishes, ensuring a blend of aesthetics and functionality. Green Surroundings: Enjoy serene views and lush green landscapes that create a peaceful living environment."
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

export default ResidentialP13;