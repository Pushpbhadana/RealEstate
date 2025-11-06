import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import Partner1 from '../assets/images/1.png'
import Partner2 from '../assets/images/2.png'
import Partner3 from '../assets/images/3.png'
import Partner4 from '../assets/images/4.png'
import Partner5 from '../assets/images/5.png'
import Partner6 from '../assets/images/6.jpg'
import Partner7 from '../assets/images/7.png'
import Partner8 from '../assets/images/8.png'
import Partner9 from '../assets/images/9.jpg'
import Partner10 from '../assets/images/10.png'
import Partner11 from '../assets/images/11.png'
import Partner12 from '../assets/images/12.png'
import Partner13 from '../assets/images/13.png'
import Partner14 from '../assets/images/14.png'

const Partners = () => {
  return (
    <>
        <div className="py-12 m-2">
          <section className="max-w-7xl mx-auto px-4 mb-16">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Our Partners</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
                Builders we are working with
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
                    image: Partner1,
                  },
                  {
                    image: Partner2,
                  },
                  {
                    image: Partner3,
                  },
                  {
                    image: Partner4,
                  },
                  {
                    image: Partner5,
                  },
                  {
                    image: Partner6,
                  },
                  {
                    image: Partner7,
                  },
                  {
                    image: Partner8,
                  },
                  {
                    image: Partner9,
                  },
                  {
                    image: Partner10,
                  },
                  {
                    image: Partner11,
                  },
                  {
                    image: Partner12,
                  },
                  {
                    image: Partner13,
                  },
                  {
                    image: Partner14,
                  },
                ].map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="p-1 h-full">
                      <Card className="overflow-hidden border-0 transition-all duration-300 h-full group">
                        <CardContent className="flex aspect-[5/2 ] items-center justify-center p-2 overflow-hidden relative">
                          <div className="w-full h-full relative">
                            <img
                              src={project.image}
                              className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
                            />
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
    </>
  )
}

export default Partners