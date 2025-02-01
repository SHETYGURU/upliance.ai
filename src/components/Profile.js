import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./connection_db";
import Footer from "./Footer";

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Profile = () => {
  const [user, setUser] = useState({
    username: "Guest",
    email: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const email = localStorage.getItem("email");
      console.log("Email from localStorage:", email); // Debugging log

      if (email) {
        try {
          // Fetch user data from Firestore using the correct collection name ("Users")
          const userRef = doc(db, "Users", email);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            console.log("Fetched user data:", userData); // Debugging log

            setUser({
              username: userData.UserName || "Guest",  // Match Firestore field name exactly
              email: userData.Email || email, // Ensure email is displayed
            });
          } else {
            console.log("No user data found for this email.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${require('../assets/bg.png')})` }} // Set background image
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-opacity-60">
        {/* Profile GIF */}
        <img
          src="/assets/profile.gif"
          alt="Welcome"
          className="w-48 h-48 rounded-full"
        />

        {/* User Information */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.username}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
