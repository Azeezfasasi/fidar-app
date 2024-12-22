import React, { useState, useEffect } from "react";
import dashboard from "../../images/dashboard.svg";
import indentdecrease from "../../images/indentdecrease.svg";
import fidarlogo from "../../images/fidarlogo.svg";
import inbox from "../../images/inbox.svg";
import folderdelete from "../../images/folderdelete.svg";
import settings from "../../images/settings.svg";
import help from "../../images/help.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../components/context/ThemeContext";

function DashMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  const [openDropMenu, setOpenDropMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenuDropdown = (menu) => {
    setOpenDropMenu(openDropMenu === menu ? null : menu);
  };

  return (
    <>
      <div className={`flex items-center p-4 lg:hidden ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <img
          src={indentdecrease}
          alt="Toggle Menu"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div className="w-full flex border border-solid border-red-700">
        <div
          className={`fixed lg:static top-0 left-0 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 z-50 flex flex-col bg-white dark:bg-gray-800 h-full border-r shadow-lg md:shadow-none`}
        >
          <div className="flex items-center p-4">
            <img src={fidarlogo} alt="FIDAR Logo" className="w-6 h-6" />
            {isMenuOpen && (
              <NavLink
                to="/"
                className="ml-2 text-lg font-bold text-gray-800 dark:text-gray-100"
              >
                FIDAR
              </NavLink>
            )}
            <img
              src={indentdecrease}
              alt="Toggle Menu"
              className="w-6 h-6 ml-auto cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <NavLink
            to="/pages/dashboard"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={dashboard} alt="Dashboard" className="w-6 h-6" />
            {isMenuOpen && <span className="w-full ml-4 mr-20 text-gray-700 dark:text-gray-300">Dashboard</span>}
          </NavLink>

          <NavLink
            to="/pages/document"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={inbox} alt="Document" className="w-6 h-6" />
            {isMenuOpen && <span className="ml-4 text-gray-700 dark:text-gray-300">Document</span>}
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={inbox} alt="Document" className="w-6 h-6" />
            {isMenuOpen && <span className="ml-4 text-gray-700 dark:text-gray-300">Archive</span>}
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={inbox} alt="Document" className="w-6 h-6" />
            {isMenuOpen && <span className="ml-4 text-gray-700 dark:text-gray-300">Orc Scan</span>}
          </NavLink>

          <div className="p-4">
            <button
              className="flex items-center w-full"
              onClick={() => toggleMenuDropdown("menu1")}
            >
              <img src={folderdelete} alt="Inventory" className="w-6 h-6" />
              {isMenuOpen && (
                <span className="ml-4 text-gray-700 dark:text-gray-300">Inventory</span>
              )}
            </button>
            {openDropMenu === "menu1" && isMenuOpen && (
              <ul className="pl-8 mt-2">
                <li>
                  <NavLink
                    to=""
                    className="block py-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Incoming Files
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="block py-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Outgoing Files
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={inbox} alt="Document" className="w-6 h-6" />
            {isMenuOpen && <span className="ml-4 text-gray-700 dark:text-gray-300">I-Track</span>}
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={inbox} alt="Document" className="w-6 h-6" />
            {isMenuOpen && <span className="ml-4 text-gray-700 dark:text-gray-300">Saved Password</span>}
          </NavLink>

          <NavLink
            to="/pages/trash"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={inbox} alt="Document" className="w-6 h-6" />
            {isMenuOpen && <span className="ml-4 text-gray-700 dark:text-gray-300">Trash</span>}
          </NavLink>

          <NavLink
            to="/pages/settings"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={settings} alt="Settings" className="w-6 h-6" />
            {isMenuOpen && <span className="ml-4 text-gray-700 dark:text-gray-300">Settings</span>}
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-4 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <img src={help} alt="Help" className="w-6 h-6" />
            {isMenuOpen && <span className="ml-4 text-gray-700 dark:text-gray-300">Help</span>}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default DashMenu;

