import React from 'react';
import { Helmet } from 'react-helmet';
import fidarlogo from '../assets/images/fidarlogo.svg';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  return (
    <>
    <Helmet>
        <title>Forget Passowrd - Fidar</title>
    </Helmet>
    <div className="bg-[#ffffff] w-full rounded-[10px] h-[750px] relative flex flex-row items-center justify-center">
        <div className="flex flex-col gap-[15.51px] items-center justify-center w-[937px]">
            <div className="text-[#121625] text-left font-display-small-font-family text-[32px] font-[800] relative">
            Forgotten Password?
            </div>
            <div className="text-[#35b2f6] text-left font-title-3-font-family text-[18px] font-[600] relative mb-[-13px]">
            Get reset link with your email
            </div>
            <form className='w-full flex flex-col items-center justify-start'>
                <input type='email' placeholder='Type your email' required className="rounded-lg border-solid border-[#909090] border pt-[8.62px] pr-[17.24px] pb-[8.62px] pl-[17.24px] flex flex-row gap-[8.62px] items-start justify-start shrink-0 w-[80%] md:w-[556px] h-[50px] relative" />
                <button className="bg-[#35b2f6] rounded-md mt-4 pt-4 md:pt-6 pr-5 pb-4 md:pb-6 pl-5 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[70%] md:w-[499px] relative">
                    <div className="text-white text-center font-['Montserrat-SemiBold',_sans-serif] text-sm font-semibold relative flex items-center justify-center">
                        Get link
                    </div>
                </button>
            </form>
            <div className="text-[#001724] text-left text-[18px] font-[700] relative">Remember your password? <Link to="/pages/login" className='text-[#35b2f6]'>Log In</Link></div>
        </div>
        <Link to="/">
            <img
                className="w-[72px] h-[60px] absolute left-[50px] top-[50px]"
                style={{ objectFit: "cover" }}
                src={fidarlogo}
            />
        </Link>
    </div>

    </>
  )
}

export default ForgetPassword