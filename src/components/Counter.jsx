import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { FiPlus, FiMinus, FiRefreshCw } from "react-icons/fi";

const Counter = () => {
  const [count, setCount] = useState(() => parseInt(localStorage.getItem("count")) || 0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // Full background color animation
  const bgStyle = useSpring({
    backgroundColor: `rgb(${200 - count * 3}, ${220 + count * 2}, ${250 - count * 4})`,
  });

  return (
    <animated.div style={bgStyle} className="min-h-screen flex items-center justify-center transition-all">
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotateX: 90 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="p-6 sm:p-8 bg-white bg-opacity-80 rounded-2xl shadow-2xl text-center max-w-xs sm:max-w-sm transition-all">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {count}
          </motion.h1>

          <div className="flex justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-blue-400 text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-blue-500"
              onClick={() => setCount(count + 1)}
            >
              <FiPlus size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-gray-700"
              onClick={() => setCount(0)}
            >
              <FiRefreshCw size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-pink-400 text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-pink-500"
              onClick={() => setCount(count - 1)}
            >
              <FiMinus size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </animated.div>
  );
};

export default Counter;
