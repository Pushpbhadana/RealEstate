import AboutHero from "../components/_other/AboutHero";
import aboutImg from "../assets/images/aboutcover.jpg";
import p2 from "../assets/images/p2.jpg";
import Why2 from "@/components/_other/Why2";
const About = () => {
  return (
    <>
      <div className="h-[calc(90vh-5rem)] m-2 rounded-4xl relative">
        {/* Background Image Div */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-4xl bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutImg})`
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-black/100 rounded-4xl"></div>
        </div>

        {/* Content Div - This will appear above the background */}
        <div className="relative z-10 h-full flex items-end justify-center">
          <div className="text-center text-white">
            <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">Shoperty</h2>
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-15 text-white">Gurugram's Premier Award-Winning Real<br /> Estate Advisors, Crafting Dreams into Reality</h1>
          </div>
        </div>
      </div>

      <div className="m-2">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 tracking-tight text-gray-900 ">About Shopertyy</h2>
            {/* <div className="mx-auto mt-4 h-1 w-20 bg-gray-600"></div> */}
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-gray-600 ">Shopertyy, an award-winning and RERA registered real estate consultancy firm, is your dedicated partner throughout your property journey. With a team of over 100 skilled professionals, we guide you seamlessly through the entire process of buying, reselling, and exploring exit options. From meticulously identifying and selecting the finest properties to conducting comprehensive background checks on both the property and its location, we ensure a thorough approach.</p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600 ">Our expertise encompasses legal documentation support and strategic planning for your investment exit. At Shopertyy, our ultimate mission is to assist you in building generational wealth through well-informed and astute real estate decisions.</p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-xl">
                <img src={p2} alt="Our team collaborating" className="h-auto w-full object-cover" />
              </div>
              <div className="absolute -right-6 -bottom-6 rounded-lg bg-gray-600 px-6 py-3 text-white shadow-lg">
                <div className="text-2xl font-bold text-center">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <svg className="h-6 w-6 text-gray-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg lg:text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300 leading-tight ">10 Million+ sq.ft of Area&nbsp;Sold</h3>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300 ">Delivering unparalleled expertise and commitment, Shopertyy has facilitated the successful sale of over 10 million sq.ft of prime real estate to our esteemed investors.</p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg ">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 ">
                <svg className="h-6 w-6 text-gray-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg lg:text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300 leading-tight ">5000+ Delighted Investors</h3>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300 ">The satisfaction of over 5000 investors affirm our commitment to excellence through personalized service and transparent dealings, creating a community of fulfilled clients.</p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg ">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 ">
                <svg className="h-6 w-6 text-gray-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg lg:text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300 leading-tight ">50+ Reputed Builder Associates</h3>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300 ">Shopertyy's 50+ Builder Associates ensure exclusive access to premium properties, providing clients with unique opportunities in Gurugram's dynamic real estate market.</p>
            </div>
          </div>
        </div>
      </div>

      <AboutHero />

      <div>
        <Why2 />
      </div>
    </>
  )
}

export default About