import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="mb-6 flex gap-4">
        <Link to="/" className="px-4 py-2 bg-blue-600 rounded">Home</Link>
      </nav>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
