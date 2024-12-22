import React, { useContext } from "react";
import document from "../../images/document.svg";
import docu1 from "../../images/docu1.svg";
import share from "../../images/share.svg";
import person from "../../images/person.svg";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";


function DashCard() {
  const { isDarkMode } = useContext(ThemeContext); // Access theme
  const { users } = useContext(UserContext); // Access the users array from context

  return (
    <div
      className={`flex flex-nowrap gap-4 justify-between w-full mt-[40px] ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900 overflow-scroll "
      }`}
    >
      {/* Card 1 */}
      <div className="relative flex-shrink-0 w-[80%] md:w-[33%] min-w-[40%] h-[210px] bg-blue-500 rounded-lg shadow-md">
        <div className="absolute top-6 left-4 w-16 h-16 bg-white rounded-full flex flex-row items-center justify-center">
            <img
            className=""
            src={document}
            alt="Document Icon"
            />
        </div>
        <div className="absolute top-[44px] left-[90px]">
          <p className="text-white font-semibold text-lg">Received Files</p>
        </div>
        <div className="absolute bottom-[24px] right-[20px]">
          <p className="text-white font-bold text-2xl mt-4">2,580</p>
        </div>
        <img
          className="absolute w-40 h-44 left-[6rem] -top-2"
          src={docu1}
          alt="Decorative Document Icon"
        />
      </div>

      {/* Card 2 */}
      <div className="relative flex-shrink-0 w-[80%] md:w-[33%] min-w-[40%] h-[210px] bg-blue-500 rounded-lg shadow-md">
        <div className="absolute top-6 left-4 w-16 h-16 bg-white rounded-full flex flex-row items-center justify-center">
            <img
            className=""
            src={document}
            alt="Document Icon"
            />
        </div>
        <div className="absolute top-[44px] left-[90px]">
          <p className="text-white font-semibold text-lg">Shared Files</p>
        </div>
        <div className="absolute bottom-[24px] right-[20px]">
          <p className="text-white font-bold text-2xl mt-4">1,780</p>
        </div>
        <img
          className="absolute w-40 h-44 left-[6rem] -top-2"
          src={share}
          alt="Decorative Share Icon"
        />
      </div>

      {/* Card 3 */}
      <div className="relative flex-shrink-0 w-[80%] md:w-[33%] min-w-[40%] h-[210px] bg-blue-500 rounded-lg shadow-md">
        <div className="absolute top-6 left-4 w-16 h-16 bg-white rounded-full flex flex-row items-center justify-center">
            <img
            className=""
            src={document}
            alt="Document Icon"
            />
        </div>
        <div className="absolute top-[44px] left-[90px]">
          <p className="text-white font-semibold text-lg">Members</p>
        </div>
        <div className="absolute bottom-[24px] right-[20px]">
          <p className="text-white font-bold text-2xl mt-4">{users.length}</p>
        </div>
        <img
          className="absolute w-40 h-44 left-[6rem] -top-2"
          src={person}
          alt="Decorative Person Icon"
        />
      </div>
    </div>
  );
}

export default DashCard;
