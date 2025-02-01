import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineArrowRight } from "react-icons/ai";
import bgImage from "../assets/bg.jpg"; // Import the background image
import Navbar from "./Navbar";
import Footer from "./Footer";

const steps = [
  "Initializing System...",
  "Connecting to API...",
  "Fetching Training Data...",
  "Preprocessing Data...",
  "Loading Model...",
  "Starting Training...",
  "Analyzing Patterns...",
  "Optimizing Parameters...",
  "Running Tests...",
  "Finalizing Training...",
  "Verifying Accuracy...",
];

const ChatbotTrainingStatus = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [trainingComplete, setTrainingComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
      }, 1500); // Delay each step by 1.5s
      return () => clearTimeout(timer);
    } else {
      setTrainingComplete(true);
    }
  }, [currentStep]);

  return (
    <div>
      <Navbar />

      <div
        className="flex items-center justify-center min-h-screen w-full bg-cover bg-center p-6 pt-16 lg:pt-24" // Add padding-top for larger screens
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white bg-opacity-90 shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chatbot Training Status</h2>

          {/* Status Box */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <strong className="block text-lg font-semibold text-gray-800">Status:</strong>
            <p className={`text-gray-600 ${trainingComplete ? "text-green-600 font-semibold" : ""}`}>
              {trainingComplete ? "Training Complete" : "Training in Progress..."}
            </p>
          </div>

          {/* Training Steps List */}
          <ul className="space-y-3 text-left">
            {steps.map((step, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-gray-700 font-medium text-sm"
              >
                {index < currentStep ? (
                  <AiOutlineCheckCircle className="text-green-500" size={18} />
                ) : (
                  <span className="w-4 h-4 border-2 border-gray-400 rounded-full animate-pulse"></span>
                )}
                {step}
              </li>
            ))}
          </ul>

          {/* Proceed to Next Step Button (Animated) */}
          {trainingComplete && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => navigate("/chatbot-integration")}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full 
                         text-sm font-medium transition-all duration-500 ease-in-out transform 
                         hover:scale-105 hover:bg-gray-900 active:scale-95"
              >
                Proceed <AiOutlineArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatbotTrainingStatus;
