import Footer from './components/Shared/Footer'
import Navbar from './components/Shared/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, 
         Home, 
         Commercial, 
         Residential, 
         ComingSoon, 
         Gallery, 
         Contact, 
         Details, 
         TheOmaxeState,
         OmaxeChowk,
         M3MParagon,
         M3MAtrium57,
         M3MRoute65,
         ElanImperial,
         ComingSoonP1,
         ComingSoonP2,
         ComingSoonP3,
         ComingSoonP4,
         ComingSoonP5,
         ResidentialP1,
         ResidentialP2,
         ResidentialP3,
         ResidentialP4,
         ResidentialP5,
         ResidentialP6,
         ResidentialP7,
         ResidentialP8,
         ResidentialP9,
         ResidentialP10,
         ResidentialP11,
         ResidentialP12,
         ResidentialP13,
         ResidentialP14,
         ResidentialP15,
         } from './pages/index';

const App = () => {
  return (
    <>
        <BrowserRouter>
      <Navbar />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details" element={<Details />} />
            <Route path="/the-omaxe-state" element={<TheOmaxeState />} />
            <Route path="/omaxe-chowk" element={<OmaxeChowk />} />
            <Route path="/m3m-paragon" element={<M3MParagon />} />
            <Route path="/m3m-atrium-57" element={<M3MAtrium57 />} />
            <Route path="/m3m-route-65" element={<M3MRoute65 />} />
            <Route path="/elan-imperial" element={<ElanImperial />} />
            <Route path="/coming-soon-p1" element={<ComingSoonP1 />} />
            <Route path="/coming-soon-p2" element={<ComingSoonP2 />} />
            <Route path="/coming-soon-p3" element={<ComingSoonP3 />} />
            <Route path="/coming-soon-p4" element={<ComingSoonP4 />} />
            <Route path="/coming-soon-p5" element={<ComingSoonP5 />} />
            <Route path="/residential-p1" element={<ResidentialP1 />} />
            <Route path="/residential-p2" element={<ResidentialP2 />} />
            <Route path="/residential-p3" element={<ResidentialP3 />} />
            <Route path="/residential-p4" element={<ResidentialP4 />} />
            <Route path="/residential-p5" element={<ResidentialP5 />} />
            <Route path="/residential-p6" element={<ResidentialP6 />} />
            <Route path="/residential-p7" element={<ResidentialP7 />} />
            <Route path="/residential-p8" element={<ResidentialP8 />} />
            <Route path="/residential-p9" element={<ResidentialP9 />} />
            <Route path="/residential-p10" element={<ResidentialP10 />} />
            <Route path="/residential-p11" element={<ResidentialP11 />} />
            <Route path="/residential-p12" element={<ResidentialP12 />} />
            <Route path="/residential-p13" element={<ResidentialP13 />} />
            <Route path="/residential-p14" element={<ResidentialP14 />} />
            <Route path="/residential-p15" element={<ResidentialP15 />} />
          </Routes>
      </div>
      <Footer />
        </BrowserRouter>
    </>
  )
}

export default App