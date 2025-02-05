import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiHome, FiMail, FiPhone, FiSave, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const UserForm = () => {
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem("userData")) || { 
      id: Date.now(), name: "", address: "", email: "", phone: "" 
    };
  });

  const [isDirty, setIsDirty] = useState(false);
  const [showDialog, setShowDialog] = useState(null); // "saved" or "unsaved"

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        setShowDialog("unsaved");
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e) => {
    setIsDirty(true);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDirty(false);
    localStorage.setItem("userData", JSON.stringify(formData));
    setShowDialog("saved");
    setTimeout(() => setShowDialog(null), 1000); // Hide after 1 second
  };

  return (
    <motion.div
      className="p-8 bg-white text-gray-800 rounded-xl shadow-2xl max-w-md mx-auto transition-all duration-300 border border-gray-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-500 text-sm mb-4">User ID: {formData.id}</p>

      <motion.form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <FiUser className="absolute left-3 top-3 text-gray-400" />
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 pl-10 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 transition-all"
          />
        </div>

        <div className="relative mb-4">
          <FiHome className="absolute left-3 top-3 text-gray-400" />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 pl-10 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 transition-all"
          />
        </div>

        <div className="relative mb-4">
          <FiMail className="absolute left-3 top-3 text-gray-400" />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 pl-10 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 transition-all"
          />
        </div>

        <div className="relative mb-4">
          <FiPhone className="absolute left-3 top-3 text-gray-400" />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 pl-10 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 transition-all"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-800 text-white rounded-lg w-full transition-all shadow-md"
          type="submit"
        >
          <FiSave size={20} />
          Save
        </motion.button>
      </motion.form>

      {/* Dialog for Save & Unsaved Warning */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 text-white ${
              showDialog === "saved" ? "bg-green-600" : "bg-red-600"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {showDialog === "saved" ? (
              <>
                <FiCheckCircle size={20} /> <span>Data Saved!</span>
              </>
            ) : (
              <>
                <FiAlertCircle size={20} /> <span>Unsaved Changes!</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UserForm;
