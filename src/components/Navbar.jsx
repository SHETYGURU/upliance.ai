import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      {/* Left Section: Logo & Title */}
      <div className="flex items-center gap-3">
        <Link to="/organisation-setup">
          <img src="/assets/logo.png" alt="BeyondChats Logo" className="h-10 w-10" />
        </Link>
        <Link to="/organisation-setup">
          <span className="text-xl text-white font-bold">BeyondChats</span>
        </Link>
      </div>

      {/* Right Section: Profile & Logout */}
      <div className="flex items-center gap-5">
        <Link to="/profile" className="text-gray-300 hover:text-white transition">
          <FaUserCircle size={24} />
        </Link>
        <Link to="/login" className="text-gray-300 hover:text-white transition">
          <FiLogOut size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
