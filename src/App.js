import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import UserFormPage from "./pages/UserFormPage";
import RichTextEditorPage from "./pages/RichTextEditorPage";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/user-form" element={<UserFormPage />} />
          <Route path="/rich-text" element={<RichTextEditorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
