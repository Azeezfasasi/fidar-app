import React from 'react'
import { Helmet } from 'react-helmet'
import welcomeicon from '../assets/images/welcomeicon.svg';
import google from '../assets/images/google.svg';
import facebook from '../assets/images/facebook.svg';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <Helmet>
        <title>Sign Up - Fidar</title>
      </Helmet>
      <div className="bg-white rounded-lg min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-8 mt-8 mb-8 md:mt-0">
        <div className="w-[602px] max-w-lg sm:max-w-2xl lg:max-w-4xl bg-white rounded-lg p-6 sm:p-10 relative">
          <Link to="/">
            <img
              class="w-[72px] h-[60px] relative"
              src={welcomeicon}
            />
          </Link>
          <div className="text-gray-800 text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-8">
            Sign Up
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            {/*  */}
            <div class="flex flex-row gap-4 items-center justify-start shrink-0 relative">
              <div class="shrink-0 w-[90px] h-1 relative">
                <div class="bg-[#35b2f6] rounded-[10px] w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%]"></div>
              </div>
              <div
                class="text-primary-500 text-left font-title-text-title-3-font-family text-title-text-title-3-font-size font-title-text-title-3-font-weight relative"
              >
                Sign up with
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-4 justify-between">
                <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 w-full">
                  <img src={google} alt="Google Icon" className="w-4 h-4" />
                  <span className="text-black text-[12px] md:text-[13px] font-semibold ">Sign in with Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-3 w-full">
                  <img src={facebook} alt="Facebook Icon" className="w-4 h-4" />
                  <span className="text-black text-[12px] md:text-[13px] font-semibold">Sign in with Facebook</span>
                </button>
              </div>
              <div className="flex items-center justify-between w-full mt-4">
                <div className="h-px bg-gray-300 w-[45%]"></div>
                <span className="text-gray-400 text-sm px-4">Or</span>
                <div className="h-px bg-gray-300 w-[45%]"></div>
              </div>
              <form className="flex flex-col gap-4">
                {/* first row */}
                <div className="flex flex-row sm:flex-row gap-4">
                  <div className='w-[50%] flex flex-col'>
                    <label htmlFor="name" className="text-[#3a3c40] font-bold text-[14px]">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 border border-solid border-[#babfc5] rounded-md text-black bg-[#f5f5f791]"
                    />
                  </div>
                  <div className='w-[50%] flex flex-col'>
                    <label htmlFor="name" className="text-[#3a3c40] font-bold text-[14px]">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border border-[#babfc5] rounded-md text-black bg-[#f5f5f791]"
                    />
                  </div>
                </div>
                {/* second row */}
                <div className="flex flex-row sm:flex-row gap-4">
                  <div className='w-[50%] flex flex-col'>
                    <label htmlFor="name" className="text-[#3a3c40] font-bold text-[14px]">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 border border-solid border-[#babfc5] rounded-md text-black bg-[#f5f5f791]"
                    />
                  </div>
                  <div className='w-[50%] flex flex-col'>
                    <label htmlFor="name" className="text-[#3a3c40] font-bold text-[14px]">Repeat Password</label>
                    <input
                      type="password"
                      placeholder="Repeat Password"
                      className="w-full p-3 border border-[#babfc5] rounded-md text-black bg-[#f5f5f791]"
                    />
                  </div>
                </div>
                <div className="text-gray-500 text-sm mt-[-10px]">
                  <span>Password Strength: </span>
                  <span className="text-[#35b2f6]">Not bad but you know you can do better</span>
                </div>
                {/* Third row */}
                <div className="flex flex-row sm:flex-row gap-4">
                  <div className='w-[50%] flex flex-col'>
                    <label htmlFor="name" className="text-[#3a3c40] font-bold text-[14px]">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      className="w-full p-3 border border-solid border-[#babfc5] rounded-md text-black bg-[#f5f5f791]"
                    />
                  </div>
                  <div className='w-[50%] flex flex-col'>
                    <label htmlFor="name" className="text-[#3a3c40] font-bold text-[14px]">City</label>
                    <input
                      type="test"
                      placeholder="City"
                      className="w-full p-3 border border-[#babfc5] rounded-md text-black bg-[#f5f5f791]"
                    />
                  </div>
                </div>
              </form>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="terms" className="w-4 h-4 border border-gray-300" />
                <label htmlFor="terms" className="ml-2 text-gray-500 text-sm">
                  I agree to <Link to=""><span className="text-blue-500">terms & conditions</span></Link>
                </label>
              </div>
              <Link to="/pages/dashboard" className="bg-[#35b2f6] text-white rounded-md py-3 text-center font-semibold w-full">
                Sign up for free
              </Link>
            </div>
            <div className="text-gray-800 text-center font-semibold text-sm sm:text-base">
              <span>Already have an account? </span>
              <Link to="/pages/login"><span className="text-[#35b2f6] cursor-pointer">Log in</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
