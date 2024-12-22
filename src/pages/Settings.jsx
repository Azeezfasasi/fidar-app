import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import DashMenu from "../assets/components/dashboard/DashMenu";
import DashHeader from "../assets/components/dashboard/DashHeader";
import GeneralSettings from "../assets/components/settingscomponent/GeneralSettings";
import ExportData from "../assets/components/settingscomponent/ExportData";
import Notification from "../assets/components/settingscomponent/Notification";
import Security from "../assets/components/settingscomponent/Security";
import Profile from "../assets/components/settingscomponent/Profile";
import Logout from "../assets/components/settingscomponent/Logout";
import { ThemeContext } from '../assets/components/context/ThemeContext';

const Settings = () => {
  const [activeSetting, setActiveSetting] = useState("General");
  const { isDarkMode } = useContext(ThemeContext);

  const handleSettingClick = (setting) => {
    setActiveSetting(setting);
  };

  return (
    <>
      <Helmet>
        <title>Settings - Fidar</title>
      </Helmet>
      <div className='w-full flex flex-col md:flex-row items-start justify-start border border-solid'>
        {/* Menu Section */}
        <div className='w-full md:w-[fit-content] h-auto md:h-[1000px] border border-solid border-red-700'>
            <DashMenu />
            </div>
        
        {/* Main Dashboard */}
        <div className='w-full md:w-[100%] h-auto md:h-[1000px] border border-solid border-red-700 relative p-4 md:pl-[10px] md:pr-[10px]'>
            <DashHeader />
            <div className="flex flex-col items-center p-6">
          <h1 className="text-xl font-semibold">Account Settings</h1>
          <p className="text-sm text-gray-600 mt-2">Manage your general, profile, security, and notification settings.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 px-6">
          {/* Sidebar */}
          <div className={`bg-white shadow-lg rounded-lg p-4 w-full lg:w-1/4 ${isDarkMode ? 'bg-gray-700 text-gray-200' : ''}`}>
            <div className="space-y-4">
              {["General", "Profile", "Security", "Notification", "Export Data", "Saved Password", "Log Out"].map((item) => (
                <div
                  key={item}
                  className={`p-3 rounded-lg cursor-pointer text-sm font-medium ${
                    activeSetting === item ? 'bg-blue-500 text-white' : 'border border-gray-300'
                  }`}
                  onClick={() => handleSettingClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className={`flex-1 bg-white shadow-lg rounded-lg p-6 ${isDarkMode ? 'bg-gray-700 text-gray-200' : ''}`}>
            {activeSetting === "General" && <GeneralSettings />}
            {activeSetting === "Profile" && <Profile />}
            {activeSetting === "Security" && <Security />}
            {activeSetting === "Notification" && <Notification />}
            {activeSetting === "Export Data" && <ExportData />}
            {activeSetting === "Saved Password" && <div>Saved Password Settings Content</div>}
            {activeSetting === "Log Out" && <Logout />}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
