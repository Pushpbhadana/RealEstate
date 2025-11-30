// pages/project1.tsx
import ProjectDetailsPage from "@/components/Shared/ProjectDetailsPage";
import project1Image from "../../assets/images/m3mRoute65bg.jpg";
import project1Image2 from "../../assets/images/m3mRoute65aboutBg.webp";

import galleryImage1 from "../../assets/images/m3mRoute65p1.webp";
import galleryImage2 from "../../assets/images/m3mRoute65p2.webp";
import galleryImage3 from "../../assets/images/m3mRoute65p3.jpg";
import galleryImage4 from "../../assets/images/m3mRoute65p4.jpg";
import galleryImage5 from "../../assets/images/m3mRoute65p5.webp";

import premiumImage1 from "../../assets/images/m3mRoute65p1.webp";
import premiumImage2 from "../../assets/images/m3mRoute65p2.webp";
import premiumImage3 from "../../assets/images/m3mRoute65p3.jpg";
import premiumImage4 from "../../assets/images/m3mRoute65p4.jpg";
import premiumImage5 from "../../assets/images/m3mRoute65p5.webp";
import premiumImage6 from "../../assets/images/m3mRoute65p6.png";

const M3MRoute65 = () => {
    const projectData = {
        projectName: "The New Fashion Address",
        location: "M3M ROUTE 65",
        tagline: "High-Street Retail Market",
        investmentInfo: "Starting Price ₹1 Cr* Onwards",
        backgroundImage: project1Image,
        backgroundImage2: project1Image2,
        backgroundImage3: '',
        
        headFeature1: 'Payment Plan',
        headFeature1_2: '50:50',
        headFeature2: 'Assured Return',
        headFeature2_2: '12% Onwards',
        headFeature3: 'Lease Guarantee',
        headFeature3_2: '3 Years',
        headFeature4: 'Most Premium Fashion',
        headFeature4_2: 'Destination of Gurgaon',

        aboutTitle: "Invest in M3M Route 65",
        features: [
            {
                title: "Located at Prime Location",
                description: "Gurugram's premier retail destination, located at M3M 65th Avenue Route 65."
            },
            {
                title: "Diverse Retail Experience",
                description: "Shops, anchor stores, food courts, hypermarkets, and versatile spaces."
            },
            {
                title: "Investment Excellence",
                description: "A lucrative investment with innovative design and strong infrastructure for promising returns."
            },
            {
                title: "Project RERA No: DLRERA2024P0003",
                description: "Officially registered and approved project."
            }
        ],

        connectivityTitle: "Location Perks",
        connectivityFeatures: [
            "0 min to Golf Course Road Extension",
            "8 min from HUDA City Center Metro",
            "15 min from Rapid Metro Station & Gurgaon Railway Station",
            "10 min from NH-48 | 25 min from IGI Airport",
            "Premium schools: DPS International, St. Xavier's High School",
            "Hospitals & corporates like Artemis, Amex, IBM within 5 km radius"
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

export default M3MRoute65;