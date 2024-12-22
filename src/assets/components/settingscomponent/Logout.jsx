import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Logout() {
    // useState hook to manage the visibility of the confirmation dialog
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();
    const { isDarkMode } = useContext(ThemeContext); // Access theme

    // Function to toggle the confirmation dialog
    const handleLogoutClick = () => {
        setShowConfirmation(true);
    };

    // Function to handle the "Yes" option
    const confirmLogout = () => {
        // Perform the logout action here
        console.log("User logged out.");
        setShowConfirmation(false);
        navigate("/");
    };

    // Function to handle the "No" option
    const cancelLogout = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                <button
                    onClick={handleLogoutClick}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Log Out
                </button>

                {showConfirmation && (
                    <div className={`mt-5 p-5 border border-gray-300 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
                        <p className="text-lg mb-4">Are you sure you want to log out?</p>
                        <div className="flex gap-4">
                            <button
                                onClick={confirmLogout}
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Yes
                            </button>
                            <button
                                onClick={cancelLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                No
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Logout;
