import React, { useState } from "react";
import { FaSearch, FaSlidersH, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ filters = { name: '', category: '', quantity: '' }, setFilters }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Logo and Text */}
      <div className="flex items-center space-x-2">
        {/* Placeholder Logo */}
        <div className="h-8 w-auto" onClick={() => navigate("/dashboard")}>
          <img
            src="/assets/logo.svg" // Replace with the actual image URL or path
            alt="Logo"
            className="h-full object-contain"
          />
        </div>
      </div>

      {/* Center Search Bar */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl ${
          showSearchBar ? "block" : "hidden"
        } sm:block`}
      >
        <div className="relative w-full">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            className="w-full pl-10 pr-4 py-1.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button
          onClick={() => setShowSearchBar(!showSearchBar)}
          className="text-gray-600 hover:text-black focus:outline-none sm:hidden"
        >
          <FaSearch size={20} />
        </button>

        {/* Filter Icon */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-gray-600 hover:text-black focus:outline-none"
        >
          <FaSlidersH size={20} />
        </button>

        {/* Profile Icon */}
        <button
          className="text-gray-600 hover:text-black focus:outline-none"
          onClick={() => navigate("/profile")}
        >
          <FaUserCircle size={24} />
        </button>
      </div>

      {/* Dropdown Dialog for Filters */}
      {showFilters && (
        <div className="absolute right-4 top-12 bg-white border border-gray-300 rounded-lg shadow-lg w-64 p-4 z-10">
          <h3 className="mb-2 text-gray-700 font-semibold">Filters</h3>
          <div className="space-y-2">
            {/* Filter by Name */}
            <input
              type="text"
              placeholder="Filter by name"
              value={filters.name}
              onChange={(e) => setFilters({ ...filters, name: e.target.value })}
              className="w-full px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-black"
            />

            {/* Filter by Category */}
            <input
              type="text"
              placeholder="Filter by category"
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="w-full px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-black"
            />

            {/* Filter by Quantity */}
            <input
              type="number"
              placeholder="Filter by quantity"
              value={filters.quantity || ""}
              onChange={(e) =>
                setFilters({ ...filters, quantity: e.target.value })
              }
              className="w-full px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-black"
            />

            <button
              onClick={() => setShowFilters(false)}
              className="w-full py-1.5 text-white bg-black rounded hover:opacity-80"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
