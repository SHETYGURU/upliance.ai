import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineArrowRight, AiOutlineRobot } from "react-icons/ai"; // Robot icon added
import bgImage from "../assets/bg.jpg"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "./ChatBot";

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
      }, 1000); // Delay each step by 1s
      return () => clearTimeout(timer);
    } else {
      setTrainingComplete(true);
    }
  }, [currentStep]);

  return (
    <div>
      <Navbar />
      <Chatbot />
      <div
        className="flex items-center justify-center min-h-screen w-full bg-cover bg-center p-6 pt-16 lg:pt-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="bg-white bg-opacity-90 shadow-lg rounded-2xl p-6 w-full max-w-md text-center transform transition-all duration-1000 ease-in-out fold-page"
          style={{ animation: 'foldIn 1s forwards' }} // Add fold-in animation
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chatbot Training Status</h2>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <strong className="block text-lg font-semibold text-gray-800">Status:</strong>
            <p className={`text-gray-600 ${trainingComplete ? "text-green-600 font-semibold" : ""}`}>
              {trainingComplete ? "Training Complete" : "Training in Progress..."}
            </p>
          </div>

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

          <div className="mt-6 flex justify-center">
            {!trainingComplete ? (
              <AiOutlineRobot
                className="animate-blink mx-auto text-4xl text-gray-600"
                size={40} 
              />
            ) : (
              <button
                onClick={() => navigate("/chatbot-integration")}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full 
                         text-sm font-medium transition-all duration-500 ease-in-out transform 
                         hover:scale-105 hover:bg-gray-900 active:scale-95 animate-burst"
              >
                Proceed <AiOutlineArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatbotTrainingStatus;
