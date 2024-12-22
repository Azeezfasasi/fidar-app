import React from "react";
import { Link } from "react-router-dom";
import footerarrow from "../../images/footerarrow.svg";

function Footer() {
  return (
    <div className="bg-[#161c28] text-gray-400">
      <div className="container mx-auto p-8">
        {/* Top Section */}
        <div className="flex flex-wrap gap-16 justify-between">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-5xl font-semibold text-blue-400">
              Fidar
            </Link>
            <p className="text-lg leading-6">
              Get started now try our product
            </p>
            <form className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full h-12 px-4 text-lg text-gray-700 bg-gray-100 rounded-full focus:outline-none"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center"
              >
                <img src={footerarrow} alt="Arrow" className="w-6 h-6" />
              </button>
            </form>
          </div>

          {/* Right Columns */}
          <div className="flex flex-wrap gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <Link to="" className="hover:text-white">
                Support
              </Link>
              <Link to="" className="hover:text-white">
                Help centre
              </Link>
              <Link to="/pages/login" className="hover:text-white">
                Account information
              </Link>
              <Link to="" className="hover:text-white">
                About
              </Link>
              <Link to="" className="hover:text-white">
                Contact us
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <Link to="" className="hover:text-white">
                Help and Solution
              </Link>
              <Link to="" className="hover:text-white">
                Talk to support
              </Link>
              <Link to="" className="hover:text-white">
                Support docs
              </Link>
              <Link to="" className="hover:text-white">
                System status
              </Link>
              <Link to="" className="hover:text-white">
                Covid response
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <Link to="" className="hover:text-white">
                Product
              </Link>
              <Link to="" className="hover:text-white">
                Update
              </Link>
              <Link to="" className="hover:text-white">
                Security
              </Link>
              <Link to="" className="hover:text-white">
                Beta test
              </Link>
              <Link to="" className="hover:text-white">
                Pricing product
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-wrap justify-between items-center text-sm text-gray-300">
          <p>© 2024 Biccas Inc. Copyright and rights reserved</p>
          <div className="flex gap-4">
            <Link to="" className="hover:text-white">
              Terms and Conditions
            </Link>
            <Link to="" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
