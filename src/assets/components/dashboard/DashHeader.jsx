import React, { useState, useContext } from "react";
import search from "../../images/search.svg";
import filter from "../../images/filter.svg";
import notifications from "../../images/notifications.svg";
import { Link } from "react-router-dom";
import {ThemeContext} from '../context/ThemeContext';
import { UserContext } from "../context/UserContext";

function DashHeader() {
    const { isDarkMode } = useContext(ThemeContext); // Access theme
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
    const { currentUser } = useContext(UserContext); // Access currentUser from context

    const toggleDropdown = () => setIsProfileOpen(!isProfileOpen);
    const toggleSearchDropdown = () => setIsSearchDropdownOpen(!isSearchDropdownOpen);
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const selectFilter = (filter) => {
        setSelectedFilter(filter);
        setIsSearchDropdownOpen(false);
    };

    return (
        <>
        <div className="flex flex-row items-start justify-around">
            {/* Search Section */}
            <div
                className={`flex items-center justify-between p-2 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"} mt-6 w-[90%] md:w-[70%] relative`}
            >
                <input
                    type="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search here..."
                    className="flex-grow p-2 bg-transparent outline-none"
                />
                <img src={search} alt="search" className="w-6 h-6 ml-2" />
                <img
                    src={filter}
                    alt="filter"
                    className="w-6 h-6 cursor-pointer ml-2"
                    onClick={toggleSearchDropdown}
                />
                <span className="ml-2 text-gray-500">{selectedFilter}</span>
                {isSearchDropdownOpen && (
                    <ul
                        className={`absolute mt-2 top-10 right-0 bg-white shadow-md p-2 rounded-md z-10 ${isDarkMode ? "bg-gray-800 text-white" : "text-gray-900"}`}
                    >
                        {['All', 'PDF', 'PNG', 'JPG', 'PowerPoints', 'Excel'].map((filter) => (
                            <li
                                key={filter}
                                onClick={() => selectFilter(filter)}
                                className="cursor-pointer hover:bg-gray-200 p-1"
                            >
                                {filter}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Profile Section */}
            <div className="w-[20%] mt-8 flex items-center space-x-3">
                <img src={notifications} alt="notifications" className="w-6 h-6" />
                <div
                    onClick={toggleDropdown}
                    className="cursor-pointer text-gray-600 font-semibold"
                >
                    Hello {currentUser?.firstName}
                </div>
                <div
                    onClick={toggleDropdown}
                    className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-300 cursor-pointer"
                >
                    {currentUser?.profileImage && (
                        <img src={currentUser.profileImage} alt="profile" className="object-cover w-full h-full" />
                    )}
                </div>
            </div>

            {isProfileOpen && (
                <div
                    className={`absolute top-20 right-5 bg-white shadow-md p-4 rounded-md z-10 ${isDarkMode ? "bg-gray-800 text-white" : "text-gray-900"}`}
                >
                    <ul>
                        <li><Link to="/pages/dashboard" className="block py-1 hover:text-blue-500">Dashboard</Link></li>
                        <li><Link to="/pages/settings" className="block py-1 hover:text-blue-500">Profile</Link></li>
                        <li><Link to="/pages/settings" className="block py-1 hover:text-blue-500">Notification</Link></li>
                        <li><Link to="/pages/help" className="block py-1 hover:text-blue-500">Help</Link></li>
                        <li><Link to="/pages/login" className="block py-1 hover:text-blue-500">Logout</Link></li>
                    </ul>
                </div>
            )}
        </div>
        </>
    );
}

export default DashHeader;

