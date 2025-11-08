import ContactForm from "@/components/Shared/MiniContactForm";
import comingSoonImg from "../assets/images/commingSoonBg.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import MagicBento from "@/components/Shared/MagicBento";
const Details = () => {
    return (
        <>
            {/* hero section */}
            <div className="min-h-[calc(90vh-5rem)] m-2 rounded-4xl relative">
                {/* Background Image Div */}
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-4xl bg-no-repeat"
                    style={{
                        backgroundImage: `url(${comingSoonImg})`
                    }}
                >
                    {/* Optional overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-black/100 rounded-4xl"></div>
                </div>

                {/* Content Div - This will appear above the background */}
                <div className="relative z-10 min-h-[calc(90vh-5rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full max-w-7xl gap-8 lg:gap-12 xl:gap-16">
                        {/* Text Content */}
                        <div className="text-center lg:text-left text-white space-y-3 lg:space-y-6" style={{ marginTop: "4rem" }}>
                            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                The Omaxe State
                            </h1>
                            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                                Sec 19B, Dwarka, Delhi
                            </h2>
                            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
                                Luxury Retail Area & Sports Complex
                                Investment Starts @ ₹75 Lacs*
                            </p>
                        </div>

                        {/* Contact Form Container */}
                        <div className="flex justify-center lg:mt-19 lg:justify-end h-[calc(90vh-5rem)]">
                            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl">
                                <ContactForm compact={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section end */}

            <div className="min-h-[calc(90vh-5rem)] m-2 rounded-4xl relative">
                <div className="relative z-10 min-h-[calc(90vh-5rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-8xl gap-16 lg:gap-24 xl:gap-32">

                        {/* Image Section */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-md lg:max-w-xl xl:max-w-2xl h-[400px] lg:h-[550px] xl:h-[650px] rounded-3xl overflow-hidden relative shadow-2xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${comingSoonImg})`
                                    }}
                                >
                                </div>
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="text-center lg:text-left space-y-6 lg:space-y-8 pt-3">
                            <div className="space-y-4 lg:space-y-6">
                                <h1 className="font-semibold sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black">
                                    Commercial Complex By Omaxe Dwarka Delhi
                                </h1>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-5 lg:space-y-7 text-left">
                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900">
                                            Luxury Sports Complex on 50 Acres

                                        </h4>
                                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mt-2 leading-relaxed">
                                            50 acres dedicated to upscale commercial sports amenities and facilities.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900">
                                            International Cricket-Football Stadium
                                        </h4>
                                        <p className="text-lg text-gray-500 mt-2 leading-relaxed">
                                            Premier international venue hosting cricket and football matches.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900">
                                            India's First Integrated Development
                                        </h4>
                                        <p className="text-lg text-gray-500 mt-2 leading-relaxed">
                                            A 5-in-1 Integrated Destination Sports, Shopping, Hospitality, Social & Food
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900">
                                            Project RERA No: DLRERA2024P0003
                                        </h4>
                                        <p className="text-lg text-gray-500 mt-2 leading-relaxed">
                                            Officially registered and approved project.
                                        </p>
                                    </div>
                                </li>
                            </ul>


                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-8">
                                <a href="/contact" className="cursor-pointer">
                                    <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group mx-auto">
                                        Contact Us

                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>

                                </a>
                                <a href="/contact" className="cursor-pointer">
                                    <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group mx-auto">
                                        Call Now

                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
            />


            <div className="h-[calc(70vh-5rem)] m-2 rounded-4xl relative">
                {/* Background Image Div */}
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-4xl bg-no-repeat"
                    style={{
                        backgroundImage: `url(${comingSoonImg})`
                    }}
                >
                    {/* Optional overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-black/100 rounded-4xl"></div>
                </div>

                {/* Content Div - This will appear above the background */}
                <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-20 px-4 sm:px-6 lg:px-8">
                    {/* First Text Block */}
                    <div className="text-center lg:text-left text-white lg:w-2/3">
                        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight lg:leading-relaxed">
                            Why some units make more profit than others? Selection of units is crucial.
                        </h1>
                    </div>

                    {/* Second Text Block */}
                    <div className="text-center text-gray-900 lg:w-1/3">
                        <button className="px-6 py-3 lg:px-20 lg:py-4 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-gray-900 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group mx-auto">
                            <a href="/contact">Contact Us</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Commercial Projects Section */}
            <div className="py-12 m-2 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100">
                {/* Commercial Projects Section */}
                <section className="max-w-7xl mx-auto px-4 mb-16">
                    <div className="text-center mb-12">
                        {/* <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Premium Developments</span> */}
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
                            The Omaxe State Gallery
                        </h2>

                    </div>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        autoPlay={true}
                        autoPlayInterval={3000}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {[
                                {
                                    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=600&fit=crop",
                                    name: "Skyline Business Center",
                                    location: "Downtown District",
                                    type: "Office Complex"
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop",
                                    name: "Commerce Plaza",
                                    location: "Financial Quarter",
                                    type: "Mixed-Use"
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=600&fit=crop",
                                    name: "Innovation Hub",
                                    location: "Tech Park",
                                    type: "Co-working Space"
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
                                    name: "Riverside Towers",
                                    location: "Waterfront",
                                    type: "Office & Retail"
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop",
                                    name: "Metropolitan Square",
                                    location: "City Center",
                                    type: "Commercial Complex"
                                }
                            ].map((project, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                                            <CardContent className="flex aspect-[1/1.3] items-center justify-center p-0 overflow-hidden relative">
                                                <div className="w-full h-full relative">
                                                    <img
                                                        src={project.image}
                                                        alt={project.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                                    {/* Hover Action */}
                                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <button className="bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-md transition-colors">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                    </Carousel>
                </section>
            </div>
            {/* Commercial Projects Section End */}


            <div className="min-h-[calc(90vh-5rem)] m-2 rounded-4xl relative bg-white p-2 mb-3">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-10 mb-10 tracking-tight text-center">Our Location's</h1>
                <div className="relative z-10 min-h-[calc(90vh-5rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-8xl gap-5">

                        {/* Text Section */}
                        <div className="text-center lg:text-left space-y-6 lg:space-y-8 pt-3">
                            <div className="space-y-4 lg:space-y-6">
                                <h1 className="font-semibold sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black">
                                    Robust Connectivity
                                </h1>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-5 lg:space-y-7 text-left">
                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-semibold text-gray-900">
                                            - Connected to an impressive network of 19 Highways
                                        </h4>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-semibold text-gray-900">
                                            - Proximity to shopping havens, esteemed educational institutions, and top-notch healthcare facilities.
                                        </h4>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-semibold text-gray-900">
                                            - Right Opposite to Bharat Vandana Park
                                        </h4>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-semibold text-gray-900">
                                            - Close to IGI Airports & Dwarka Metro
                                        </h4>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl font-semibold text-gray-900">
                                            - Residential catchment of more than 25 Lakhs+ People
                                        </h4>
                                    </div>
                                </li>
                            </ul>


                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-8">
                                <a href="/contact" className="cursor-pointer">
                                    <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group mx-auto">
                                        Contact Us

                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>

                                </a>
                                
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-md lg:max-w-4xl h-[400px] lg:h-[600px] rounded-4xl overflow-hidden relative shadow-2xl bg-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.366391156246!2d77.0338659753373!3d28.61087507567416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b7c7c5b7a5f%3A0x5a5a5a5a5a5a5a5a!2sSector%2019B%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890&zoom=15&language=en"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        borderRadius: '1rem',
                                        filter: 'contrast(1.05) brightness(0.95)'
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="The Omaxe State Commercial Complex Location Map"
                                    className="rounded-3xl"
                                />
                                {/* Glassmorphism overlay */}
                                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/20">
                                    🗺️ Interactive Map
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Details