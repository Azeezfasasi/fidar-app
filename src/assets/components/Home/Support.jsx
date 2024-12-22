import React from "react";
import starsrating from "../../images/starrating.svg";
import activity from "../../images/activity.svg";
import piechat from "../../images/piechat.svg";
import command from "../../images/command.svg";

function Support() {
  return (
    <div className="mt-16 bg-[#f9f8fe] px-2 py-10 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col md:flex-row md:gap-7 items-start w-full md:w-[90%] max-w-[1200px]">
        {/* Left Section */}
        <div className="flex flex-col gap-10 md:gap-24 w-full md:w-1/2">
          <div className="flex flex-col gap-7">
            <h2 className="text-[#191a15] font-semibold text-2xl md:text-5xl leading-snug">
              How we support our partner all over the world
            </h2>
            <p className="text-[#a6a6a6] text-sm md:text-lg">
              Fidar is a powerful SaaS product that revolutionizes file management, communication, and document creation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            {/* Rating 1 */}
            <div className="flex flex-col gap-4">
              <img src={starsrating} alt="Rating" className="w-[142px] h-[26px]" />
              <div className="text-[#191a15] text-lg">
                <span className="font-bold">4.9</span>
                <span className="mx-1">/</span>
                <span className="font-medium">5 rating</span>
              </div>
              <p className="text-[#a6a6a6] font-bold text-lg">Databricks</p>
            </div>

            {/* Rating 2 */}
            <div className="flex flex-col gap-4">
              <img src={starsrating} alt="Rating" className="w-[142px] h-[26px]" />
              <div className="text-[#191a15] text-lg">
                <span className="font-bold">4.8</span>
                <span className="mx-1">/</span>
                <span className="font-medium">5 rating</span>
              </div>
              <p className="text-[#a6a6a6] font-bold text-lg">Chainalysis</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-14 w-full md:w-1/2">
          {/* Stats Section */}
          <div className="flex flex-col gap-10">
            {/* Stat 1 */}
            <div className="flex flex-row gap-4">
              <div className="relative w-[60px] h-[60px] bg-white shadow-md rounded flex items-center justify-center">
                <img src={activity} alt="Activity" className="w-[30px] h-[30px]" />
              </div>
              <div className="flex flex-col w-[60%]">
                <h3 className="text-[#191a15] text-2xl font-bold">80%</h3>
                <p className="text-[#a6a6a6] text-sm">
                  Fidar's advanced file tracking feature reduces file search time by an average of 80%.
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-row gap-4">
              <div className="relative w-[60px] h-[60px] bg-white shadow-md rounded flex items-center justify-center">
                <img src={piechat} alt="Pie Chart" className="w-[30px] h-[30px]" />
              </div>
              <div className="flex flex-col w-[60%]">
                <h3 className="text-[#191a15] text-2xl font-bold">70%</h3>
                <p className="text-[#a6a6a6] text-sm">
                  Fidar's cross-platform accessibility enables users to collaborate and access files from any device, resulting in a 70% improvement in remote team productivity.
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-row gap-4">
              <div className="relative w-[60px] h-[60px] bg-white shadow-md rounded flex items-center justify-center">
                <img src={command} alt="Command" className="w-[30px] h-[30px]" />
              </div>
              <div className="flex flex-col w-[60%]">
                <h3 className="text-[#191a15] text-2xl font-bold">10 million</h3>
                <p className="text-[#a6a6a6] text-sm">
                  Fidar's secure encryption protocols ensure the safety of over 10 million files shared every month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;

