import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"


import Img1 from '../../assets/images/p1.jpg'

const ProjectsSection = () => {
  return (
    <>
        <div className="py-12 m-2 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100">
          {/* Commercial Projects Section */}
          <section className="max-w-7xl mx-auto px-4 mb-16">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Premium Developments</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
                Top Commercial Projects
              </h2>

            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              autoPlay={true}
              autoPlayInterval={5000}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    image: Img1,
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
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1 h-full">
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                        <CardContent className="flex aspect-[4/5] items-center justify-center p-0 overflow-hidden relative">
                          <div className="w-full h-full relative">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <div className="mb-2">
                                <span className="inline-block px-2 py-1 text-xs font-medium bg-emerald-600 rounded-full">
                                  {project.type}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                              <div className="flex items-center text-slate-200 text-sm">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {project.location}
                              </div>
                              <a href="/commercial">  
                              <button className="cursor-pointer mt-3 py-2 px-4 bg-white text-gray-800 text-xs lg:text-sm font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-md lg:shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-1 lg:gap-2 group flex-nowrap whitespace-nowrap">
                                
                                <span className="truncate">View Details</span>
                                <svg className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                
                              </button>
                              </a>
                            </div>

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

          {/* Residential Projects Section */}
          <section className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Luxury Living</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
                Top Residential Projects
              </h2>

            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              autoPlay={true}
              autoPlayInterval={5000}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
                    name: "Serenity Heights",
                    location: "Hillside District",
                    type: "Luxury Apartments"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop",
                    name: "Parkside Residences",
                    location: "Central Park",
                    type: "Condominiums"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=600&fit=crop",
                    name: "Waterfront Villas",
                    location: "Lake District",
                    type: "Luxury Villas"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
                    name: "Urban Lofts",
                    location: "Arts District",
                    type: "Modern Lofts"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop",
                    name: "Garden Estates",
                    location: "Suburban Area",
                    type: "Townhouses"
                  }
                ].map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1 h-full">
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                        <CardContent className="flex aspect-[4/5] items-center justify-center p-0 overflow-hidden relative">
                          <div className="w-full h-full relative">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <div className="mb-2">
                                <span className="inline-block px-2 py-1 text-xs font-medium bg-emerald-600 rounded-full">
                                  {project.type}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                              <div className="flex items-center text-slate-200 text-sm">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {project.location}
                              </div>

                              <a href="/residential">
                              <button className="cursor-pointer mt-3 py-2 px-4 bg-white text-gray-800 text-xs lg:text-sm font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-md lg:shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-1 lg:gap-2 group flex-nowrap whitespace-nowrap">
                                
                                <span className="truncate">View Details</span>
                                <svg className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                
                              </button>
                              </a>
                            </div>

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
    </>
  )
}

export default ProjectsSection