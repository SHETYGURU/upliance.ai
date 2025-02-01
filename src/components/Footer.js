import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import companyLogo from "../assets/logo.png"; // Replace with actual logo path

const Footer = () => {
  return (
    <footer className="bg-[#152238] text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Company Logo & Name */}
        <div className="flex items-center gap-4">
          <img src={companyLogo} alt="Company Logo" className="h-16 w-16 object-contain" />
          <h2 className="text-xl font-bold">BeyondChats</h2>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Main Street, City, Country
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +1 234 567 890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@beyondchats.com
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="/organisation-setup" className="text-xl hover:text-gray-400"><FaFacebook /></a>
          <a href="/organisation-setup" className="text-xl hover:text-gray-400"><FaTwitter /></a>
          <a href="/organisation-setup" className="text-xl hover:text-gray-400"><FaInstagram /></a>
          <a href="/organisation-setup" className="text-xl hover:text-gray-400"><FaLinkedin /></a>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} BeyondChats. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
