import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';
import OrganisationSetup from './components/OrganisationSetup'; // New Component
import ChatbotTrainingStatus from './components/ChatbotTrainingStatus'; // New Component
import ChatbotIntegrationTest from './components/ChatbotIntegrationTest'; // New Component for testing chatbot integration
import CompanyWebsite from './components/CompanyWebsite';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/footer" element={<Footer />} />
        
        {/* New Routes for Organisation Setup and Chatbot Training */}
        <Route path='/organisation-setup' element={<OrganisationSetup />} />
        <Route path='/chatbot-training' element={<ChatbotTrainingStatus />} />
        
        {/* Optional: Route for Chatbot Integration Test */}
        <Route path='/chatbot-integration' element={<ChatbotIntegrationTest />} />
        <Route path="/company-website" element={<CompanyWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;
