// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/omxChk.jpg";
import project1Image2 from "../../assets/images/aboutOmexDwarka.webp";

import galleryImage1 from "../../assets/images/OmexDwarkag1.png";
import galleryImage2 from "../../assets/images/OmexDwarkag2.png";
import galleryImage3 from "../../assets/images/OmexDwarkag3.png";
import galleryImage4 from "../../assets/images/OmexDwarkag4.png";
import galleryImage5 from "../../assets/images/OmexDwarkag5.png";
import galleryImage6 from "../../assets/images/OmexDwarkag6.png";
import galleryImage7 from "../../assets/images/OmexDwarkag7.png";
import galleryImage8 from "../../assets/images/OmexDwarkag8.png";

import premiumImage1 from "../../assets/images/OmexDwarkap1.webp";
import premiumImage2 from "../../assets/images/OmexDwarkap2.webp";
import premiumImage3 from "../../assets/images/OmexDwarkap3.webp";
import premiumImage4 from "../../assets/images/OmexDwarkap4.webp";
import premiumImage5 from "../../assets/images/OmexDwarkap5.webp";
import premiumImage6 from "../../assets/images/OmexDwarkap6.webp";

const Project1 = () => {
    const projectData = {
        projectName: "The Omaxe State",
        location: "Sec 19B, Dwarka, Delhi",
        tagline: "Luxury Retail Area & Sports Complex",
        investmentInfo: "Investment Starts @ ₹75 Lacs*",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        aboutTitle: "Commercial Complex By Omaxe Dwarka Delhi",
        features: [
            {
                title: "Luxury Sports Complex on 50 Acres",
                description: "50 acres dedicated to upscale commercial sports amenities and facilities."
            },
            {
                title: "International Cricket-Football Stadium",
                description: "Premier international venue hosting cricket and football matches."
            },
            {
                title: "India's First Integrated Development",
                description: "A 5-in-1 Integrated Destination Sports, Shopping, Hospitality, Social & Food"
            },
            {
                title: "Project RERA No: DLRERA2024P0003",
                description: "Officially registered and approved project."
            }
        ],

        connectivityTitle: "Robust Connectivity",
        connectivityFeatures: [
            "Connected to an impressive network of 19 Highways",
            "Proximity to shopping havens, esteemed educational institutions, and top-notch healthcare facilities.",
            "Right Opposite to Bharat Vandana Park",
            "Close to IGI Airports & Dwarka Metro",
            "Residential catchment of more than 25 Lakhs+ People"
        ],

        galleryTitle: "The Omaxe State Gallery",
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
            {
                image: galleryImage6,
                name: "Skyline Business Center",
                location: "Downtown District",
                type: "Office Complex"
            },
            {
                image: galleryImage7,
                name: "Skyline Business Center",
                location: "Downtown District",
                type: "Office Complex"
            },
            {
                image: galleryImage8,
                name: "Skyline Business Center",
                location: "Downtown District",
                type: "Office Complex"
            },            
        ],

        ctaTitle: "Why some units make more profit than others? Selection of units is crucial.",

        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.366391156246!2d77.0338659753373!3d28.61087507567416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b7c7c5b7a5f%3A0x5a5a5a5a5a5a5a5a!2sSector%2019B%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890&zoom=15&language=en",

        bentoTitle: "Our Premium Features",
        bentoData: [
            {
                imageSrc: premiumImage1,
                title: "Air-Conditioned ",
                description: "Retail Corridor Spanning Over Half-a-KM",
                label: "Smart"
            },
            {
                imageSrc: premiumImage2,
                title: "Featuring",
                description: "Massive Anchor Stores",
                label: "Luxury"
            },
            {
                imageSrc: premiumImage3,
                title: "75% Of The Shops",
                description: "On The Ground Floor",
                label: "Smart"
            },
            {
                imageSrc: premiumImage4,
                title: "Multiplex",
                description: "5-Screen Multiplex On The Second Floor",
                label: "Luxury"
            },
            {
                imageSrc: premiumImage5,
                title: "Shops",
                description: "Sized From 450 Sq Ft To 33,000 Sq Ft",
                label: "Features"
            },
            {
                imageSrc: premiumImage6,
                title: "Garden Restaurants",
                description: "6 Terrace Garden Restaurants And A Café",
                label: "Luxury"
            },
            
    // Add more cards as needed
  ]

    };

    return <ProjectDetailsPage {...projectData} />;
};

export default Project1;