import React, { useState } from "react";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Notification() {
    // useState hook to manage the on/off state
    const [isInboxOn, setIsInboxOn] = useState(false);
    const [isChatOn, setIsChatOn] = useState(false);
    const [isInvetoryOn, setIsInvetoryOn] = useState(false);
    const [isTrackOn, setIsTrackOn] = useState(false);
    const { isDarkMode } = useContext(ThemeContext); // Access theme

    // Function to toggle the state
    const handleInboxToggle = () => {
        setIsInboxOn(!isInboxOn);
    };
    const handleChatToggle = () => {
        setIsChatOn(!isChatOn);
    };
    const handleInvetoryToggle = () => {
        setIsInvetoryOn(!isInvetoryOn);
    };
    const handleTrackToggle = () => {
        setIsTrackOn(!isTrackOn);
    };

    return (
        <>
            <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                <div className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Notification</div>
                <div className="mt-10 text-sm font-semibold text-gray-600">Click the toggle to enable your preferred notifications</div>

                <div className="mt-7 flex flex-row gap-8 items-center">
                    <div className="text-sm font-semibold text-gray-600">Inbox</div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleInboxToggle}>
                        <div className={`w-12 h-4 rounded-full ${isInboxOn ? 'bg-blue-500' : 'bg-gray-300'} relative transition-colors`}>
                            <div className={`w-4 h-4 bg-black rounded-full absolute top-0 left-0 transition-transform ${isInboxOn ? 'translate-x-8' : ''}`}></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{isInboxOn ? "On" : "Off"}</span>
                    </div>
                </div>

                <div className="mt-7 flex flex-row gap-8 items-center">
                    <div className="text-sm font-semibold text-gray-600">Chat</div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleChatToggle}>
                        <div className={`w-12 h-4 rounded-full ${isChatOn ? 'bg-blue-500' : 'bg-gray-300'} relative transition-colors`}>
                            <div className={`w-4 h-4 bg-black rounded-full absolute top-0 left-0 transition-transform ${isChatOn ? 'translate-x-8' : ''}`}></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{isChatOn ? "On" : "Off"}</span>
                    </div>
                </div>

                <div className="mt-7 flex flex-row gap-8 items-center">
                    <div className="text-sm font-semibold text-gray-600">Inventory</div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleInvetoryToggle}>
                        <div className={`w-12 h-4 rounded-full ${isInvetoryOn ? 'bg-blue-500' : 'bg-gray-300'} relative transition-colors`}>
                            <div className={`w-4 h-4 bg-black rounded-full absolute top-0 left-0 transition-transform ${isInvetoryOn ? 'translate-x-8' : ''}`}></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{isInvetoryOn ? "On" : "Off"}</span>
                    </div>
                </div>

                <div className="mt-7 flex flex-row gap-8 items-center">
                    <div className="text-sm font-semibold text-gray-600">Track Recorded</div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleTrackToggle}>
                        <div className={`w-12 h-4 rounded-full ${isTrackOn ? 'bg-blue-500' : 'bg-gray-300'} relative transition-colors`}>
                            <div className={`w-4 h-4 bg-black rounded-full absolute top-0 left-0 transition-transform ${isTrackOn ? 'translate-x-8' : ''}`}></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{isTrackOn ? "On" : "Off"}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
