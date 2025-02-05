import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlus, FiUser, FiEdit } from "react-icons/fi"; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-8" /> {/* Replace with your logo */}
          <Link to="/Home" className="text-xl font-bold">Uplaiace.ai</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/Home" className="flex items-center hover:text-blue-400"><FiHome className="mr-2" />Home</Link></li>
          <li><Link to="/counter" className="flex items-center hover:text-blue-400"><FiPlus className="mr-2" />Counter</Link></li>
          <li><Link to="/user-form" className="flex items-center hover:text-blue-400"><FiUser className="mr-2" />User Form</Link></li>
          <li><Link to="/rich-text" className="flex items-center hover:text-blue-400"><FiEdit className="mr-2" />Rich Text</Link></li>
        </ul>

        {/* Profile Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
  <div className="flex items-center space-x-2">
    <Link to="/profile" className="flex items-center">
      <FiUser className="mr-2" /> {/* Profile icon */}
      <span className="text-white">Profile</span>
    </Link>
  </div>
</div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 p-4 space-y-4">
          <li><Link to="/Home" className="block text-white flex items-center" onClick={() => setIsOpen(false)}><FiHome className="mr-2" />Home</Link></li>
          <li><Link to="/counter" className="block text-white flex items-center" onClick={() => setIsOpen(false)}><FiPlus className="mr-2" />Counter</Link></li>
          <li><Link to="/user-form" className="block text-white flex items-center" onClick={() => setIsOpen(false)}><FiUser className="mr-2" />User Form</Link></li>
          <li><Link to="/rich-text" className="block text-white flex items-center" onClick={() => setIsOpen(false)}><FiEdit className="mr-2" />Rich Text</Link></li>
          <li><Link to="/profile" className="block text-white flex items-center" onClick={() => setIsOpen(false)}><FiUser className="mr-2" />Profile</Link></li>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;
