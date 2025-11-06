import React from "react";
import logo from "../assets/images/logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-4 sm:px-8 md:px-16 rounded-t-3xl lg:rounded-4xl lg:m-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10  md:text-left sm:text-left">

        {/* Contact Section */}
        <div>
          <img
            src={logo}
            alt="Shopertyy Logo"
            className="mb-6 mx-auto md:mx-0 w-36"
          />
          <h3 className="text-xl font-semibold mb-4 text-white">Get in touch</h3>
          <address className="not-italic mb-4 leading-relaxed">
            Unit No. 501-507, Tower A, Spaze Business Park<br />
            Sector 66, Gurgaon(HR)
          </address>
          <a href="tel:+919650771333" className="block mb-2 hover:text-white transition">
            +91 9650771333
          </a>
          <a href="mailto:info@shopertyy.com" className="block hover:text-white transition">
            info@shopertyy.com
          </a>
        </div>

        {/* Quick Links */}
        <nav>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Gallery</a></li>
            <li><a href="#" className="hover:text-white transition">Blog / News</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </nav>

        {/* Properties */}
        <nav>
          <h3 className="text-xl font-semibold mb-4 text-white">Properties</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Commercial Projects</a></li>
            <li><a href="#" className="hover:text-white transition">Residential Projects</a></li>
            <li><a href="#" className="hover:text-white transition">Coming Soon</a></li>
            <li><a href="#" className="hover:text-white transition">Plots</a></li>
          </ul>
        </nav>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow us</h3>
          <ul className="space-y-2">
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">X (Formerly Twitter)</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Youtube</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Shopertyy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
