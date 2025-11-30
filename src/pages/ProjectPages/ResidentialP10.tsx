// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/signatureab.png";
import project1Image2 from "../../assets/images/signatureab.png";

import galleryImage1 from "../../assets/images/signaturep1.jpg";
import galleryImage2 from "../../assets/images/signaturep2.jpg";
import galleryImage3 from "../../assets/images/signaturep3.png";
import galleryImage4 from "../../assets/images/signaturep4.jpg";
import galleryImage5 from "../../assets/images/signaturep5.jpg";

import premiumImage1 from "../../assets/images/signaturep6.jpg";
import premiumImage2 from "../../assets/images/signaturep7.jpg";
import premiumImage3 from "../../assets/images/signaturep8.jpg";
import premiumImage4 from "../../assets/images/signaturep3.png";
import premiumImage5 from "../../assets/images/signaturep2.jpg";
import premiumImage6 from "../../assets/images/signaturep1.jpg";

const ResidentialP10 = () => {
    const projectData = {
        projectName: "New Launch",
        location: "Signature Global 71",
        tagline: "3.5 & 4.5 BHK Luxury Residences",
        investmentInfo: "Price Starts @ ₹4.72 Cr*",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',

        headFeature1: 'Exclusive',
        headFeature1_2: '7 Towers',
        headFeature2: 'Flexible',
        headFeature2_2: 'Payment Pans',
        headFeature3: '22 Acres',
        headFeature3_2: 'Land Parcel',
        headFeature4: '65% Open & Green',
        headFeature4_2: 'Area',

        aboutTitle: "Signature Global Titanium",
        features: [
            {
                title: "Discover the Epitome of Modern Living",
                description: "Proudly presents its latest residential marvel in the heart of Gurgaon, Sector 71. Combining luxury, comfort, and affordability, this new launch promises to redefine urban living. Nestled in one of the most sought-after locations, our new project offers a perfect blend of contemporary architecture and world-class amenities. RERA.GRG-L64L-2024"
            },
            {
                title: "Project RERA:",
                description: "RC/REP/HARERA/GGM/831/563/2024/58"
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "Bang On 150 Mts Wide SPR Road",
            "40 min drive away from IGI Airport",
            "2 Minutes from NH-8",
            "Reputed schools and institutional in close proximity",
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

export default ResidentialP10;