import React, { useState, useEffect } from "react";
import profileimage from '../../images/profileimage.svg';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from "../context/UserContext";
import inbox from '../../images/inbox.svg';

function Profile() {
    const { isDarkMode } = useContext(ThemeContext); // Access theme
    const { currentUser, updateCurrentUser } = useContext(UserContext); // Access user from context

    // Local state to handle form inputs
    const [firstName, setFirstName] = useState(currentUser.firstName || '');
    const [lastName, setLastName] = useState(currentUser.lastName || '');
    const [email, setEmail] = useState(currentUser.email || '');
    const [profileImage, setProfileImage] = useState(currentUser.profileImage || '');

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedUser = { ...currentUser, profileImage: reader.result }; // Update user object with image
                updateCurrentUser(updatedUser); // Save to context and localStorage
                setProfileImage(reader.result); // Set local state to display
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission to update user details
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Update user information in context and localStorage
        const updatedUser = {
            ...currentUser,
            firstName,
            lastName,
            email,
            profileImage
        };

        updateCurrentUser(updatedUser); // Update the user in context
        alert('User details updated successfully!');
    };

    return (
        <>
            <div className={`text-left text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Avatar</div>
            <div className={`text-justify mt-5 text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Update your avatar by clicking the image below. 288x288 px size recommended in PNG or JPG format only.
            </div>

            <form className={`mt-5 ${isDarkMode ? 'text-white' : 'text-black'}`} onSubmit={handleFormSubmit}>
                <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center mt-7 relative">
                    <div className="w-12 h-12 flex items-center justify-center relative overflow-hidden">
                        <img className="w-2/3 h-2/3" src={inbox} alt="Inbox Icon" />
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                </div>

                {/* Display the uploaded image dynamically */}
                {profileImage && (
                    <div className="mt-4">
                        <h4 className="text-lg font-medium">Profile Picture Preview:</h4>
                        <img src={profileImage} alt="Profile" className="w-36 h-36 rounded-full border-2 border-gray-300 p-1" />
                    </div>
                )}

                <button
                    type="button"
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md mt-4 text-sm font-semibold"
                    onClick={() => {
                        localStorage.removeItem('profileImage'); // Remove image from localStorage
                        setProfileImage(null); // Clear image in the state
                    }}
                >
                    Remove Image
                </button>

                <input
                    type="text"
                    className="mt-4 w-full p-3 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    className="mt-4 w-full p-3 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    className="mt-4 w-full p-3 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Save changes
                </button>
            </form>
        </>
    );
}

export default Profile;
