import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [text, setText] = useState(() => localStorage.getItem("richText") || "");

  useEffect(() => {
    localStorage.setItem("richText", text);
  }, [text]);

  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-2xl max-w-3xl mx-auto transform transition-all"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
        Rich Text Editor
      </h2>

      <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <ReactQuill
          theme="snow"
          value={text}
          onChange={setText}
          className="min-h-[300px] text-gray-800"
        />
      </div>
    </motion.div>
  );
};

export default RichTextEditor;
