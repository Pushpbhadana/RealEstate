// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/indusbullbg.jpg";
import project1Image2 from "../../assets/images/indusbullp1.jpg";

import galleryImage1 from "../../assets/images/indusbullAb.jpg";
import galleryImage2 from "../../assets/images/indusbullp2.jpg";
import galleryImage3 from "../../assets/images/indusbullp3.jpg";
import galleryImage4 from "../../assets/images/indusbullp4.jpg";
import galleryImage5 from "../../assets/images/indusbullp5.jpg";

import premiumImage1 from "../../assets/images/indusbullp1.jpg";
import premiumImage2 from "../../assets/images/indusbullp2.jpg";
import premiumImage3 from "../../assets/images/indusbullp3.jpg";
import premiumImage4 from "../../assets/images/indusbullp4.jpg";
import premiumImage5 from "../../assets/images/indusbullp5.jpg";
import premiumImage6 from "../../assets/images/indusbullp6.jpg";

const ComingSoonP4 = () => {
    const projectData = {
        projectName: "Dwarka Expressway, Sector 104, Gurugram",
        location: "Indiabulls",
        tagline: "Coming Soon",
        investmentInfo: "2.5 BHK @ ₹1.95 Cr*.",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',

        headFeature1: 'High Rise',
        headFeature1_2: 'Development',
        headFeature2: 'Flexible',
        headFeature2_2: 'Payment Pans',
        headFeature3: 'Clubhouse',
        headFeature3_2: 'Luxury',
        headFeature4: 'Option To Choose',
        headFeature4_2: 'Private Terrace',

        aboutTitle: "Discover a Life of Luxury and Comfort",
        features: [
            {
                title: "Indian Bulls Discover A New Standard of Luxury Living",
                description: "Discover a life of luxury and comfort with Indian Bulls Discover, an upcoming residential project in Gurgaon’s prime Sector 104, right next to the Dwarka Expressway. This high-class address offers thoughtfully designed 2 BHK and 3 BHK apartments that blend elegance with practical living. Every corner of the building is crafted to reflect modern lifestyles, making it ideal for those who want convenience without compromising on style."
            },
            {
                title: "Live the High Life",
                description: "Experience premium living at Indian Bulls Discover, coming soon in Sector 104, Gurgaon. Strategically located next to the Dwarka Expressway, this upscale residential project offers spacious 2 BHK and 3 BHK apartments designed for comfort and modern living. With smart layouts and luxury finishes, it’s more than just a home – it’s a lifestyle statement for those who value convenience, connectivity, and class."
            },
        ],

        connectivityTitle: "Location Advantages",
        connectivityFeatures: [
            "Only minutes away from Delhi and NH-48.",
            "IGI Airport, DLF Cybercity, and Ambience Mall – just 15 minutes away.",
            "Excellent connectivity via Dwarka Expressway.",
            // "Diplomatic Enclave II & Yashobhoomi Convention Centre – 5 minutes’ drive.",
            "Delhi Public School – Renowned for academic excellence, just 10 minutes away",
            "Just 10 minutes from Medanta – The Medicity Hospital"
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

export default ComingSoonP4;