// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/m3mpbanner.jpg";
import project1Image2 from "../../assets/images/m3mpabout.jpg";

import galleryImage1 from "../../assets/images/m3mpg1.jpg";
import galleryImage2 from "../../assets/images/m3mpg2.jpg";
import galleryImage3 from "../../assets/images/m3mpg3.jpg";
import galleryImage4 from "../../assets/images/m3mpg4.jpg";
import galleryImage5 from "../../assets/images/m3mpg5.jpg";
import galleryImage6 from "../../assets/images/m3mpg1.jpg";
import galleryImage7 from "../../assets/images/m3mpg3.jpg";
import galleryImage8 from "../../assets/images/m3mpg2.jpg";

import premiumImage1 from "../../assets/images/m3mpp1.jpg";
import premiumImage2 from "../../assets/images/m3mpp2.jpg";
import premiumImage3 from "../../assets/images/m3mpp3.jpg";
import premiumImage4 from "../../assets/images/m3mpp4.jpg";
import premiumImage5 from "../../assets/images/OmexDwarkap5.webp";
import premiumImage6 from "../../assets/images/OmexDwarkap6.webp";

const M3MParagon = () => {
    const projectData = {
        projectName: "M3M Paragon 57",
        location: "Sector 57, GURUGRAM",
        tagline: "Hypermarket & Anchor Stores",
        investmentInfo: "Price Starts at ₹ 80 Lakhs* onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        aboutTitle: "Invest in M3M Paragon 57",
        features: [
            {
                title: "Modern Retail Hub",
                description: "Four levels of retail space featuring a mix of big brands, niche stores, hypermarkets, and anchor stores."
            },
            {
                title: "High Footfall",
                description: "Surrounded by residential areas, educational institutions, and entertainment zones."
            },
            {
                title: "Investment Potential",
                description: "Attracts high-net-worth individuals and corporates, ensuring long-term value appreciation."
            },
            {
                title: "Project RERA No. GGM/651/383/2022/126",
                description: "Officially registered and approved project."
            }
        ],

        connectivityTitle: "Location Perks",
        connectivityFeatures: [
            '5 mins drive from Golf Course Road.',
            "Less than a min drive from Golf Course Road Extn.",
            "10 mins drive from Rajiv Chowk.",
            "25 mins drive from the International Airport",
            "Gurgaon’s top commercial property is close to the Golf Course Extension Road and Sohna Road.",
            // "Located near residential neighborhoods, malls, and entertainment areas.",
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

export default M3MParagon;