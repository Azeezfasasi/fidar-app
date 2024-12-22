import React from "react";

function WaitingList() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center relative w-11/12 mx-auto mt-8 mb-5">
      {/* Left Side */}
      <div className="flex flex-col gap-8 items-start text-left">
        <div className="text-black font-bold text-5xl lg:text-4xl">
          Join Waiting List
        </div>
        <div className="text-gray-500 text-lg font-normal">
          Be the First to Know! Join Our Exclusive Launch Notification List
          <br />
          Get ready for the launch of Fidar, the ultimate collaboration platform.
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <form className="flex items-center w-full lg:w-auto relative">
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full lg:w-96 h-14 border-2 border-[#35B2F6] rounded-full px-4 text-gray-500 placeholder-gray-400 font-medium focus:outline-none"
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#35B2F6] text-white rounded-full w-40 h-14 flex items-center justify-center font-medium"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default WaitingList;
