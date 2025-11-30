// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/manesarbg.jpg";
import project1Image2 from "../../assets/images/elan49.jpg";

import galleryImage1 from "../../assets/images/manesarp1.jpg";
import galleryImage2 from "../../assets/images/manesarp2.jpg";
import galleryImage3 from "../../assets/images/manesarp3.jpg";
import galleryImage4 from "../../assets/images/manesarp4.jpg";
import galleryImage5 from "../../assets/images/manesarp5.jpg";

import premiumImage1 from "../../assets/images/manesarp6.jpg";
import premiumImage2 from "../../assets/images/manesarp7.jpg";
import premiumImage3 from "../../assets/images/manesarp8.jpg";
import premiumImage4 from "../../assets/images/manesarp3.jpg";
import premiumImage5 from "../../assets/images/manesarp2.jpg";
import premiumImage6 from "../../assets/images/manesarp1.jpg";

const ComingSoonP5 = () => {
    const projectData = {
        projectName: "Sector-9, Manesar, Gurgaon",
        location: "New Launch",
        tagline: "Studio, Office & Retail Spaces",
        investmentInfo: "2 BHK @ ₹1.50 Cr*.",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        
        headFeature1: 'High Rise',
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
                title: "Upcoming Manesar Apartments",
                description: "presents luxury High-rise floors with modern specifications, designed to cater to stylish urban residents. The development emphasizes green living with landscaped gardens, parks, and eco-friendly features like rainwater harvesting and solar panels. Residents can expect spacious layouts, high-quality finishes, and a sense of community within a well-connected locale."
            },
            {
                title: "New Apartment Launches in Manesar",
                description: "Step into a world where modern design meets everyday convenience. These new apartment launches in Sector 9, Manesar offer thoughtfully designed 3BHK and builder floor homes, crafted for those who value space, comfort, and connectivity. Located just minutes from NH-48 and surrounded by essential amenities, each residence brings a balanced lifestyle."
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

export default ComingSoonP5;