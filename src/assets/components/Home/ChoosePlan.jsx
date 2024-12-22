import React, { useState } from "react";
import bulletpoint from '../../images/bulletpoint.svg';
import { Link } from "react-router-dom";

function ChoosePlan() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleBillingToggle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <>
    <div className="flex flex-col items-center gap-16 relative mb-8">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl font-bold text-gray-900 text-center">
          Choose Plan
          <br />
          That’s Right For You
        </h1>
        <p className="text-lg text-gray-500 font-semibold text-center">
          Choose plan that works best for you, feel free to contact us
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center w-80 h-16 bg-white rounded-lg shadow-lg">
          <div
            className={`w-1/2 flex items-center justify-center h-full cursor-pointer rounded-l-lg ${
              billingCycle === "monthly"
                ? "bg-blue-500 text-white font-bold"
                : "text-gray-900"
            }`}
            onClick={() => handleBillingToggle("monthly")}
          >
            Bill Monthly
          </div>
          <button
            className={`w-1/2 flex items-center justify-center h-full cursor-pointer rounded-r-lg ${
              billingCycle === "yearly"
                ? "bg-blue-500 text-white font-bold"
                : "text-gray-900"
            }`}
            onClick={() => handleBillingToggle("yearly")}
          >
            Bill Yearly
          </button>
        </div>
      </div>
      

      {/* Plans */}
      <div className="w-full flex flex-col sm:flex-col md:flex-row lg:flex-row gap-8 items-center md:justify-center">
        {/* Plan 1: Free */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-96">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">Free</h2>
          <p className="text-center text-gray-500 mt-2">
            Have a go and test your superpowers
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500 text-lg">$</span>
            <span className="text-4xl font-bold text-gray-900">0</span>
          </div>
          <div className="mt-8 space-y-4">
            {["2 Users", "2 Files", "Public Share & Comments", "Chat Support", "New income apps"].map((feature) => (
              <div key={feature} className="flex items-center">
                <img src={bulletpoint} alt="bullet" className="w-6 h-6" />
                <span className="ml-2 text-gray-900">{feature}</span>
              </div> 
            ))}
          </div>
          <Link
            to="/pages/signup"
            className="mt-8 bg-blue-500 text-white text-center py-2 rounded-lg"
          >
            Goto Business
          </Link>
        </div>

        {/* Plan 2: Pro */}
        <div className="relative flex flex-col bg-blue-500 text-white rounded-lg shadow-lg p-6 w-96">
          <h2 className="text-2xl font-semibold text-center">Pro</h2>
          <p className="text-center mt-2">
            Unveil new superpowers and join the Design League
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className="text-lg">$</span>
            <span className="text-4xl font-bold">
              {billingCycle === "monthly" ? "8" : "80"}
            </span>
          </div>
          <div className="mt-8 space-y-4">
            {[
              "All apps",
              "4 Users",
              "Unlimited editable exports",
              "Folders and collaboration",
              "All incoming apps",
            ].map((feature) => (
              <div key={feature} className="flex items-center">
                <img src={bulletpoint} alt="bullet" className="w-6 h-6" />
                <span className="ml-2">{feature}</span>
              </div>
            ))}
          </div>
          <Link
            to="/pages/signup"
            className="mt-8 bg-white text-blue-500 text-center py-2 rounded-lg"
          >
            Goto Business
          </Link>
        </div>

        {/* Plan 3: Business */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-96">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">Business</h2>
          <p className="text-center text-gray-500 mt-2">
            Unveil new superpowers and join the Design League
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500 text-lg">$</span>
            <span className="text-4xl font-bold text-gray-900">
              {billingCycle === "monthly" ? "50" : "160"}
            </span>
          </div>
          <div className="mt-8 space-y-4">
            {[
              "All the features of Pro plan",
              "Account Success Manager",
              "Single Sign-On (SSO)",
              "Co-conception program",
              "Collaboration-Soon",
            ].map((feature) => (
              <div key={feature} className="flex items-center">
                <img src={bulletpoint} alt="bullet" className="w-6 h-6" />
                <span className="ml-2 text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
          <Link
            to="/pages/signup"
            className="mt-8 bg-blue-500 text-white text-center py-2 rounded-lg"
          >
            Goto Business
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default ChoosePlan;

