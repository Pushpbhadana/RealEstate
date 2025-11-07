import CounterSection from '@/components/_other/Counter'
import HeroSection from '../components/_other/HeroSection'
import WhyChooseUs from '@/components/_other/Why'
import Cofunders from '@/components/_other/Profile'
import WorkPro from '@/components/_other/WorkPro'
import Awords from '@/components/_other/Awords'
import TestimonialsSection from '@/components/_other/Testimonial'
import Partners from '@/components/_other/Partners'
import ProjectsSection from '@/components/_other/ProjectsSection'
import ContactForm from '@/components/_other/ContactForm'

const Home = () => {

  return (
    <>
      <div className='overflow-x-hidden'>
        {/* The main content of the home page */}
        <HeroSection />
        {/* Main content of the home page */}

        {/* Hidden content on the home page */}
        <div className='m-2 p-8 hidden'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">HIGHER RETURNS</h2>
                <p className="mt-2 text-sm text-gray-600">High Rental Yields, Resale Values, and Exit Prices.</p>

              </div>
              <button className="w-full mt-6 px-4 py-2.5 bg-black text-white rounded-2xl hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-200 text-sm">
                Know More
              </button>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">EXPERT NEGOTIATORS</h2>
                <p className="mt-2 text-sm text-gray-600">Securing the Best Real Estate Offers for You.</p>

              </div>
              <button className="w-full mt-6 px-4 py-2.5 bg-black text-white rounded-2xl hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-200 text-sm">
                Know More
              </button>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">RERA REGISTERED</h2>
                <p className="mt-2 text-sm text-gray-600">HARERA/GGM/2282/1877/2023/295</p>
              </div>
              <button className="w-full mt-6 px-4 py-2.5 bg-black text-white rounded-2xl hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-200 text-sm">
                Know More
              </button>
            </div>

          </div>
        </div>
        {/* Hidden content on the home page */}

        {/* Why Choose Us Section */}
        <WhyChooseUs />
        {/* Why Choose Us Section */}

        {/* Counter Section */}
        <CounterSection />
        {/* Counter Section */}

        {/* Commercial Projects Section */}
        <ProjectsSection/>
        {/* Commercial Projects Section */}

        {/* Partners Section */}
          <Partners/>
        {/* Partners Section */}
        
        {/* Our Management */}
          <Cofunders/>        
        {/* Our Management */}

        {/* Work Process */}
        <WorkPro/>
        {/* Work Process */}

        {/* Awards & Accolades */}
        <Awords/>
        {/* Awards & Accolades */}

        {/* Testimonials */}
        <TestimonialsSection />
        {/* Testimonials */}

        {/* Contact Us */}
        <ContactForm/>
        {/* Contact Us */}
      
      </div>
    </>
  )
}

export default Home
