import Footer from './components/Footer'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Commercial from './pages/Commercial'
import Residential from './pages/Residential'
import ComingSoon from './pages/ComingSoon'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

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