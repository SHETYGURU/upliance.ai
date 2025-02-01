import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMessage,
  AiOutlineClose,
  AiOutlineSend,
} from "react-icons/ai";

const CompanyWebsite = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showChatbot) {
      timer = setTimeout(() => {
        navigate("/chatbot-integration");
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [showChatbot, navigate]);

  const handleSendMessage = () => {
    setMessage("");
    navigate("/chatbot-integration");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col relative">
      {/* Feedback Top Bar */}
      <div className="w-full bg-gray-800 text-white py-2 px-4 text-center text-sm flex justify-center items-center gap-2">
        <span>Chatbot not working as intended?</span>
        <button
          onClick={() => navigate("/chatbot-integration")}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-white text-xs font-medium transition"
        >
          Share Feedback
        </button>
      </div>

      {/* Navbar */}
      <nav className="bg-black py-4 px-6 flex justify-between items-center shadow-md w-full">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <AiOutlineHome /> Company Name
        </h1>
        <div className="hidden md:flex gap-6">
          <button className="hover:text-gray-400 transition">Home</button>
          <button className="hover:text-gray-400 transition">About</button>
          <button className="hover:text-gray-400 transition">Services</button>
          <button className="hover:text-gray-400 transition">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={`flex-1 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 w-full ${showChatbot ? "md:w-4/5" : "w-full"}`}>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Welcome to Our Website</h2>
        <p className="text-gray-400 text-lg">Explore our services and connect with our chatbot for instant help.</p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition transform hover:scale-105 duration-300">
          <AiOutlineInfoCircle /> Learn More
        </button>
      </header>

      {/* Floating Chatbot Button */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-800 transition transform hover:scale-110 duration-300"
        >
          <AiOutlineMessage size={24} /> Chat
        </button>
      )}

      {/* Chatbot UI */}
      {showChatbot && (
        <div className="fixed top-0 right-0 w-full md:w-1/4 h-full bg-white text-gray-900 shadow-lg border-l border-gray-300 flex flex-col rounded-l-2xl animate-slideIn">
          <div className="flex justify-between items-center bg-gray-800 text-white py-4 px-6 shadow-md rounded-tl-2xl">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/4712/4712105.png" alt="Chatbot Icon" className="w-6 h-6" />
              Chatbot Assistant
            </h3>
            <button onClick={() => setShowChatbot(false)} className="text-red-500">
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-4">
            <img src="../assets/bot.png" alt="Chatbot" className="w-24 h-24 mb-3" />
            <p className="text-gray-700 text-lg font-medium animate-pulse">How may I help you?</p>
          </div>
          <div className="bg-gray-200 flex items-center p-4 border-t border-gray-300 rounded-bl-2xl">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-400 outline-none text-black"
            />
            <button className="p-2 text-blue-500 hover:text-blue-700" onClick={handleSendMessage}>
              <AiOutlineSend size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-6 w-full">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </footer>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default CompanyWebsite;