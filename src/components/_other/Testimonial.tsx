"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function TestimonialsSection() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">

            <div className="text-center mb-8 md:mb-12 lg:mb-16">

                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent leading-tight">
                    SATISFIED CLIENTS
                </h1>

                <p className="text-base md:text-lg text-gray-600 mt-2 md:mt-4 max-w-2xl mx-auto">
                    Loved by some of most valuable customers
                </p>
            </div>

            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "Thank you so much Shopertyy. I had an excellent experience as the team did a fantastic job.Their knowledge about the Gurgaon location is incredible. ",
        name: "Jayesh Sudhan",
        title: "Their knowledge about the Gurgoan location is incredible",
    },
    {
        quote:
            " Our Experience with Shopertyy	Consultants was very good.They always come up with the best deal form me.They helped me in making the right decision and I’m receiving very good returns from the property that I invested in",
        name: "Mr. Rakesh Chopra",
        title: "Experience with Shopertyy was very good.",
    },
    {
        quote:
            "We are extremely satisfied with the support provided by the Shopertyy team. We are now looking forward to a long-term relationship with Shopertyy, as their professionalism and dedication have earned our trust and confidence.",
        name: "Mr. Karun Jalali",
        title: "Looking forward to a long-term relationship with Shopertyy",
    },
    {
        quote:
            "I booked my desired property with the courteous support of the team of Shopertyy. I am grateful and happy with their customer service and looking forward to forming a long & strong relationship with Shopertyy.",
        name: "Mr. Karun Jalali",
        title: "Grateful and happy with their customer service",
    },

];

export default TestimonialsSection;

