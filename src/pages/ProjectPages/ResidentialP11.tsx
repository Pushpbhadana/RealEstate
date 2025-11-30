// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/cbsp6.jpg";
import project1Image2 from "../../assets/images/cbsab.jpg";

import galleryImage1 from "../../assets/images/cbsp1.jpg";
import galleryImage2 from "../../assets/images/cbsp2.jpg";
import galleryImage3 from "../../assets/images/cbsp3.jpg";
import galleryImage4 from "../../assets/images/cbsp4.jpg";
import galleryImage5 from "../../assets/images/cbsp5.jpg";

import premiumImage1 from "../../assets/images/cbsp6.jpg";
import premiumImage2 from "../../assets/images/cbsp7.jpg";
import premiumImage3 from "../../assets/images/cbsp8.jpg";
import premiumImage4 from "../../assets/images/cbsp3.jpg";
import premiumImage5 from "../../assets/images/cbsp2.jpg";
import premiumImage6 from "../../assets/images/cbsp1.jpg";

const ResidentialP11 = () => {
    const projectData = {
        projectName: "CBS Developers",
        location: "Builder Floors",
        tagline: "Sec 63A, Golf Course Ext Rd, Gurgaon",
        investmentInfo: "3 BHK @ ₹2.40 Cr*.",
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
                title: "CBS Developers",
                description: "Presents an exclusive collection of 3 BHK luxury builder floors, meticulously designed to redefine modern living in Gurgaon. Located in the prestigious Sector 63-A, Golf Course Ext Rd, Gurugram. These homes offer the perfect combination of luxury, convenience, and sophistication, starting at just ₹2.30 Cr*."
            },
            {
                title: "Vaastu Compliant Homes",
                description: "Designed according to Vaastu principles for harmony and positive energy."
            },
            {
                title: "Project Highlights",
                description: "Spacious 3 BHK Apartments: Our homes provide ample space, designed with your comfort and lifestyle in mind. Dedicated Car Parking: Secure and spacious parking facilities for all residents. Modular Kitchen: State-of-the-art kitchens equipped with modern amenities for a seamless cooking experience. Flexible Payment Plans: Tailored payment options to meet your financial requirements. Early Possession: Move into your dream home sooner with our timely possession plans. Multi-layer Security: Advanced security systems to ensure the safety of you and your loved ones. Secured Gated Community: Enjoy the peace and privacy of a gated community.."
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "Close to NH-48, Dwarka Expressway, KMP Expressway, and IGI Airport",
            "Very close to (Heritage Experiential Learning School, Lotus Valley School, St. Xavier’s High School, Dps International Presidium School, etc.).",
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

export default ResidentialP11;