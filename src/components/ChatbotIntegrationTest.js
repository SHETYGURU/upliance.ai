import React, { useState } from "react";
import { AiOutlineRobot, AiOutlineArrowRight, AiOutlineMail, AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "./ChatBot";

const ChatbotIntegrationTest = () => {
  const [isIntegrationSuccessful, setIsIntegrationSuccessful] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [developerEmail, setDeveloperEmail] = useState("");
  const [showEmailField, setShowEmailField] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false); 
  const [emailError, setEmailError] = useState(""); 
  const [urlError, setUrlError] = useState(""); 
  const navigate = useNavigate();

  const handleTestIntegration = () => {
    if (!websiteUrl.trim()) {
      setIsIntegrationSuccessful(false);
      setShowEmailField(true); 
      setUrlError("Please enter a valid URL."); 
    } else if (!/^(https?:\/\/)/.test(websiteUrl)) {
      setUrlError("URL should include a valid protocol (e.g., http:// or https://).");
      setIsIntegrationSuccessful(false);
    } else if (!/\.[a-z]{2,6}$/.test(websiteUrl)) {
      setUrlError("URL is missing a top-level domain (e.g., .com, .org).");
      setIsIntegrationSuccessful(false);
    } else {
      setUrlError(""); 
      setIsIntegrationSuccessful(true);
      setShowEmailField(false); 
    }
  };

  const handleSendEmail = () => {
    if (!developerEmail.trim()) {
      setEmailError("Email cannot be empty.");
      return;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(developerEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError(""); 
    setShowSuccessDialog(true); 
    setTimeout(() => {
      setShowSuccessDialog(false); 
    }, 1500);
    
    setShowModal(false); 
  };

  return (
    <div>
      <Navbar />
      <Chatbot/>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen text-gray-900 p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${require('../assets/bg.jpg')})` }}
      >
        <h2 className="text-3xl font-semibold mb-6 mt-8">Chatbot Integration & Testing</h2>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/company-website")}
            className="flex items-center gap-2 bg-[#152238] text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-black transition-all duration-300"
          >
            <AiOutlineRobot size={18} /> Test Chatbot
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-[#152238] text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-black transition-all duration-300"
          >
            <AiOutlineArrowRight size={18} /> Integrate on Your Website
          </button>
        </div>

        {/* Input Field for Website URL */}
        <input
          type="text"
          placeholder="Enter your website URL"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 rounded-lg bg-gray-100 border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />
        {urlError && <p className="text-red-500 text-sm mb-4">{urlError}</p>}

        <button
          onClick={handleTestIntegration}
          className="bg-[#152238] text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-black transition-all duration-300"
        >
          Test Integration
        </button>

        {showEmailField && (
          <div className="w-2/3 sm:w-1/2 md:w-1/3 flex items-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter developer's email"
              value={developerEmail}
              onChange={(e) => setDeveloperEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendEmail}
              className="flex items-center gap-2 bg-[#152238] text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-black transition-all duration-300"
            >
              <AiOutlineMail size={18} /> Send
            </button>
          </div>
        )}
        {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}

        {isIntegrationSuccessful !== null && (
          <div className="mt-10 w-full md:w-2/3 lg:w-1/2">
            {isIntegrationSuccessful ? (
              <div className="text-center bg-green-100 text-green-700 p-6 rounded-md border border-green-500 shadow-lg">
                <h3 className="text-2xl font-semibold">Integration Successful!</h3>
                <p className="text-green-600 mt-2">Your chatbot is live and ready to use.</p>
                <div className="mt-6 flex flex-col items-center space-y-4">
                  <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800" onClick={() => navigate("/organisation-setup")}>
                    Explore Admin Panel
                  </button>
                  <button className="bg-[#152238] text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800" onClick={() => navigate("/company-website")}>
                    Start Talking to Your Chatbot
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center bg-red-100 text-red-700 p-6 rounded-md border border-red-500 shadow-lg">
                <h3 className="text-2xl font-semibold">Integration Failed</h3>
                <p className="text-red-600">Please check your integration code or contact support.</p>
              </div>
            )}
          </div>
        )}

        {showSuccessDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
              <div className="animate-tick">
                <AiOutlineCheck size={48} className="text-green-500" />
              </div>
              <p className="mt-4 text-lg font-semibold">Email Sent Successfully!</p>
            </div>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6">
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4">Integrate Chatbot</h3>

              <p className="text-gray-600 mb-3">
                Copy-paste the following code inside your website’s <code className="bg-gray-200 p-1 rounded">&lt;head&gt;</code> section:
              </p>

              <div className="bg-gray-100 p-3 rounded-md text-sm font-mono text-gray-700 mb-4 border border-gray-300">
                <code>
                  {"<script src='https://your-chatbot-url.com/integration.js'></script>"}
                </code>
              </div>

              <p className="text-gray-600 mb-3">Or, send these instructions to your developer:</p>

              <input
                type="email"
                placeholder="Enter developer's email"
                value={developerEmail}
                onChange={(e) => setDeveloperEmail(e.target.value)}
                className="w-full p-2 border border-gray-400 rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendEmail} // This now closes the modal as well
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 flex items-center gap-2"
                >
                  <AiOutlineMail size={18} /> Send Email
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default ChatbotIntegrationTest;
