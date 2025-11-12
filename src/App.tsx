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
          </Routes>
      </div>
      <Footer />
        </BrowserRouter>
    </>
  )
}

export default App