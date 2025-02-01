import React, { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineSync,
  AiOutlineArrowRight,
  AiOutlineLoading,
} from "react-icons/ai";
import { FaBolt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";
import bgImage from "../assets/bg.jpg";
import Footer from "./Footer";

const OrganisationSetup = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [showWebpages, setShowWebpages] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [urlError, setUrlError] = useState("");

  const isValidURL = (url) => {
    const regex = /^(https?:\/\/)([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(\/.*)?$/;
    return regex.test(url);
  };

  const handleFetchMetaDescription = () => {
    setDialogVisible(true);
    setTimeout(() => {
      setDialogVisible(false);
      setCompanyDescription("Sample company description fetched from the website.");
    }, 5000);
  };

  const handleScrapeData = () => {
    setShowWebpages(true);
    setDialogVisible(true);
    setTimeout(() => {
      setDialogVisible(false);
    }, 5000);
  };

  const handleNextStep = () => {
    navigate("/chatbot-training");
  };

  const allFieldsFilled = companyName.trim() !== "" && isValidURL(companyURL) && companyDescription.trim() !== "";

  const handleURLChange = (e) => {
    const url = e.target.value;
    setCompanyURL(url);
    if (!isValidURL(url)) {
      setUrlError("Please enter a valid URL (with http:// or https://).");
    } else {
      setUrlError("");
    }
  };

  return (
    <div>
      <Navbar />
      <Dashboard />
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto p-6 min-h-screen flex flex-col items-center text-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Organisation Setup</h2>
          <p className="text-gray-600 text-center max-w-2xl mb-6">
            Set up your organization by entering the details below. Ensure the information is accurate for optimal performance.
          </p>

          <form className="w-full max-w-lg p-6 bg-white shadow-lg rounded-[0.5cm] border border-gray-300">
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
                className="mt-2 px-3 py-2 border border-gray-300 rounded-[0.5cm] bg-white text-black focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-700">Company Website URL</label>
              <input
                type="url"
                value={companyURL}
                onChange={handleURLChange}
                placeholder="Enter company website URL"
                className="mt-2 px-3 py-2 border border-gray-300 rounded-[0.5cm] bg-white text-black focus:ring-2 focus:ring-black"
              />
              {urlError && <p className="text-red-600 text-sm mt-2">{urlError}</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-700">Company Description</label>
              <div className="flex items-center gap-2">
                <textarea
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  placeholder="Enter company description"
                  className="mt-2 px-3 py-2 border border-gray-300 rounded-[0.5cm] bg-white text-black flex-1 focus:ring-2 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={handleFetchMetaDescription}
                  className="px-3 py-2 rounded-[0.4cm] bg-[#152238] text-white flex items-center gap-1 font-medium hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
                >
                  <FaBolt size={14} />
                </button>
              </div>
            </div>
          </form>

          {allFieldsFilled && (
            <button
              type="button"
              onClick={handleScrapeData}
              className="mt-6 px-4 py-2 rounded-[0.4cm] bg-[#152238] text-white flex items-center gap-2 font-medium hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
            >
              <FaBolt /> Scrape Data
            </button>
          )}

          {showWebpages && (
            <motion.div
              className="w-full max-w-lg mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Webpages Detected</h3>
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Webpage URL</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {["", "/about", "/contact"].map((path, index) => (
                    <tr key={index} className="border-t border-gray-300">
                      <td className="px-4 py-3 text-black">{companyURL + path}</td>
                      <td className="px-4 py-3 flex items-center gap-2">
                        {index === 0 ? (
                          <span className="text-green-600 flex items-center gap-1">
                            <AiOutlineCheckCircle /> Scraped
                          </span>
                        ) : index === 1 ? (
                          <span className="text-yellow-600 flex items-center gap-1">
                            <AiOutlineClockCircle /> Pending
                          </span>
                        ) : (
                          <span className="text-blue-600 flex items-center gap-1">
                            <AiOutlineSync className="animate-spin" /> In Progress
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {showWebpages && (
            <button
              type="button"
              onClick={handleNextStep}
              className="mt-8 px-4 py-2 rounded-[0.4cm] bg-[#152238] text-white flex items-center gap-2 font-medium hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
            >
              Next Step <AiOutlineArrowRight />
            </button>
          )}
        </div>

        {dialogVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-2">
              <AiOutlineLoading className="animate-spin text-black text-3xl" />
              <p>Fetching data...</p>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default OrganisationSetup;
