import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa"; // React icon for chatbot
import bgImage from "../assets/bg.png";

const Dashboard = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scrollY value when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the scale based on scroll position (make sure it's between 1 and 5 for a reasonable size)
  const scale = 1 + scrollY / 200;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      {/* Background with 20% opacity overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: 0.2,
        }}
      />

      {/* Animated React Icon (Above Heading and Paragraph) */}
      <motion.div
        className="absolute z-10 top-1/2 transform -translate-x-1/2 left-1/2"
        style={{
          scale: scale,
          transition: "scale 0.1s ease-out",
        }}
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 0.2 }}
        whileHover={{
          opacity: 1, // Full opacity on hover
          scale: 1.2, // Slightly larger on hover
          transition: { duration: 0.3 },
        }}
        transition={{ duration: 0.3 }}
      >
        <FaRobot size={60} /> {/* Icon size increased */}
      </motion.div>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-gray-800 mb-4 mt-20 relative z-0" // Keep relative z-index to ensure the icon overlaps
      >
        Welcome to the Chatbot Setup Dashboard
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-lg text-gray-600 mb-6 relative z-0" // Keep relative z-index for correct layering
      >
        This project will guide you through the process of setting up a new chatbot for your business.
      </motion.p>
    </div>
  );
};

export default Dashboard;
