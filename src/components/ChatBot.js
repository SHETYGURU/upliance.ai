import React, { useState } from "react";
import { AiOutlineMessage, AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // Handle sending the message logic here
      console.log("Message Sent:", message);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div>
      {/* Chat Button */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-800 transition transform hover:scale-110 duration-300 z-50"
        >
          <AiOutlineMessage size={24} /> Chat
        </button>
      )}

      {/* Chatbot UI */}
      {showChatbot && (
        <motion.div
          className="fixed bottom-0 right-0 w-full md:w-1/4 h-screen bg-white text-gray-900 shadow-lg border-l border-gray-300 flex flex-col rounded-l-2xl z-50"
          initial={{ opacity: 0, transform: "translateX(100%)" }}
          animate={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          exit={{
            opacity: 0,
            transform: "translateX(100%)",
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center bg-gray-800 text-white py-4 px-6 shadow-md rounded-tl-2xl">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712105.png"
                alt="Chatbot Icon"
                className="w-6 h-6"
              />
              Chatbot Assistant
            </h3>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-red-500"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-4">
            <img
              src="../assets/bot.png"
              alt="Chatbot"
              className="w-24 h-24 mb-3"
            />
            <p className="text-gray-700 text-lg font-medium animate-pulse">
              How may I help you?
            </p>
          </div>
          <div className="bg-gray-200 flex items-center p-4 border-t border-gray-300 rounded-bl-2xl">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-400 outline-none text-black"
            />
            <button
              className="p-2 text-blue-500 hover:text-blue-700"
              onClick={handleSendMessage}
            >
              <AiOutlineSend size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
