import { useSpring, animated } from "react-spring";
import { FiPlus, FiUser, FiEdit } from "react-icons/fi"; // Icons for Counter, User Form, and Rich Text

const Home = () => {
  // Animated Heading
  const headingAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 200, friction: 15 },
  });

  // Animated Description
  const descriptionAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 200, friction: 15 },
    delay: 300,
  });

  return (
    <div className="text-center p-10">
      {/* Heading with animation */}
      <animated.h1 className="text-4xl font-bold" style={headingAnimation}>
        Welcome to the React Dashboard
      </animated.h1>

      {/* Description with animation */}
      <animated.p className="text-gray-400 mt-4" style={descriptionAnimation}>
        Use the navbar to navigate and explore the features.
      </animated.p>

      {/* Navigation Links to Different Components */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Explore the Dashboard</h2>
        <p className="text-gray-500 mt-2">
          Click the icons below to access different sections of the dashboard.
        </p>

        {/* Links to Counter, User Form, and Rich Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
            <a href="/counter" className="flex items-center">
              <FiPlus className="mr-2 text-blue-500" />
              <span>Counter</span>
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
            <a href="/user-form" className="flex items-center">
              <FiUser className="mr-2 text-blue-500" />
              <span>User Form</span>
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
            <a href="/rich-text" className="flex items-center">
              <FiEdit className="mr-2 text-blue-500" />
              <span>Rich Text Editor</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
