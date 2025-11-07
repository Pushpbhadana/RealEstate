import Footer from './components/Footer'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Home, Commercial, Residential, ComingSoon, Gallery, Contact } from './pages/index';

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
          </Routes>
      </div>
      <Footer />
        </BrowserRouter>
    </>
  )
}

export default App