// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/m3mAtrium57Bg.jpg";
import project1Image2 from "../../assets/images/m3mAtrium57AboutBG.jpg";

import galleryImage1 from "../../assets/images/m3mAtrium57p1.jpg";
import galleryImage2 from "../../assets/images/m3mAtrium57p2.jpg";
import galleryImage3 from "../../assets/images/m3mAtrium57p3.jpg";
import galleryImage4 from "../../assets/images/m3mAtrium57p4.jpg";
import galleryImage5 from "../../assets/images/m3mAtrium57p5.jpg";
import galleryImage6 from "../../assets/images/m3mAtrium57p6.jpg";

import premiumImage1 from "../../assets/images/m3mAtrium57p1.jpg";
import premiumImage2 from "../../assets/images/m3mAtrium57p2.jpg";
import premiumImage3 from "../../assets/images/m3mAtrium57p3.jpg";
import premiumImage4 from "../../assets/images/m3mAtrium57p4.jpg";
import premiumImage5 from "../../assets/images/m3mAtrium57p5.jpg";
import premiumImage6 from "../../assets/images/m3mAtrium57p6.jpg";

const M3MAtrium57 = () => {
    const projectData = {
        projectName: "Sector 57, GURUGRAM",
        location: "M3M ATRIUM 57",
        tagline: "Retail Shops, Cafes, And Food Courts",
        investmentInfo: "Price Starts at ₹ 80 Lakhs* onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        aboutTitle: "Invest in M3M ATRIUM 57",
        features: [
            {
                title: "Exclusive Dual-sided Access",
                description: "Dual-sided access enhances visitor convenience, ensuring seamless entry into the upscale commercial space."
            },
            {
                title: "World Class Commercial Space",
                description: "Ground floor boasts triple-height shops whereas 2nd and 3rd floor offers premium space for F& B."
            },
            {
                title: "High Residential Catchment",
                description: "Strategically located on a traffic island with more than 50,000 families in close vicinity."
            },
            {
                title: "Project RERA No: DLRERA2024P0003",
                description: "Officially registered and approved project."
            }
        ],

        connectivityTitle: "Location Perks",
        connectivityFeatures: [
            "5 Min Golf Course Road | 10 Min Rajiv Chowk",
            "Less than a min drive from Golf Course Road Extn",
            "25 Minutes15-minute drive to Medanta, Medicity, Fortis, and Max. drive from IGI Airport",
            "Located near residential neighborhoods, malls, and entertainment areas.",
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

export default M3MAtrium57;