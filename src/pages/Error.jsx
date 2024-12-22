import React from 'react';
import { Helmet } from 'react-helmet';
import error from '../assets/images/error.svg';
import fidarlogo from '../assets/images/fidarlogo.svg';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
    <Helmet>
        <title>404 - Fidar</title>
    </Helmet>
    <div className="bg-[#ffffff] rounded-[10px] h-[900px] md:h-[900px] relative overflow-hidden border border-solid border-red-700">
        <Link to="/">
            <img className="w-[72px] h-[60px] absolute left-[50px] top-[50px]" style={{ objectFit: "cover" }} src={fidarlogo} />
        </Link>
        <div className="flex flex-col gap-[84px] items-center justify-center">
            <div className="flex flex-col gap-3 items-center justify-center shrink-0 relative">
                <div className="flex flex-col gap-10 items-center justify-center shrink-0 relative">
                    <div className="shrink-0 w-[365px] h-[323px] relative mt-[180px] md:mt-[150px]">
                        <div className="w-[100%] h-[100%] flex flex-row items-center justify-center ">
                            <img className="w-[265px] md:w-[365px] h-[223px] md:h-[323px] overflow-visible" src={error} />
                        </div>
                    </div>
                    <div className="text-primary-500 text-center font-['Montserrat-Bold',_sans-serif] text-[44px] md:text-[64px] font-bold relative">Ooops... 404!</div>
                </div>
                <div className="text-[#82868c] text-center font-[600] text-[28px] font-title-text-title-1-font-weight relative">The page you requested could not be found.</div>
            </div>
            <Link to="/"
            className="text-[#35b2f6] text-left font-['Montserrat-SemiBold',_sans-serif] text-[28px] font-semibold relative" style={{ textDecoration: "underline" }}>Back to Dashboard</Link>
        </div>
    </div>

    </>
  )
}

export default Error