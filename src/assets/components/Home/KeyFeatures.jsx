// import React from 'react'

// function KeyFeatures() {
//   return (
//     <>
//     {/* <div className="flex flex-col gap-[52px] items-center justify-start relative"> */}
//     <div className='flex w-full flex-col gap-[52px] items-center justify-start relative px-4 lg:px-0'>
//         {/* Header */}
//         <div className="w-full md:w-[90%] flex flex-col md:flex-row gap-[90px] items-center justify-start shrink-0 relative m-auto border border-solid border-red-700">
//             <div className="text-[#191a15] text-center md:text-left  font-['Inter-SemiBold',_sans-serif] text-[50px] font-semibold relative w-[100%] lg:w-[50%]">
//             Key features at your finger tip
//             </div>
//             <div className="text-[#a6a6a6] text-center font-['Inter-Medium',_sans-serif] text-lg leading-[30px] font-medium relative w-[100%] md:text-left lg:w-[30%]">
//             We offer a variety of interesting features that you can help increase yor
//             productivity at work and manage your projrct esaly
//             </div>
//             <div className="shrink-0 w-[162px] h-[66px] static">
//                 <div className="bg-[#35b2f6] flex flex-row justify-center items-center rounded-[70px] w-[162px] h-[66px] " >
//                     <div className="text-[#ffffff] text-left font-['Inter-Medium',_sans-serif] text-lg leading-[30px] font-medium ">
//                         Get Started
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {/* Middle Contents  */}
//         <div className="lg:w-[90%] md:w-[80%] lg:flex-row xlg:flex-row flex flex-col lg:justify-center md:flex-col gap-11 items-center justify-start shrink-0 relative">
//             {/* Frame 1 */}
//             <div className="bg-[#f9f8fe] rounded-[20px] shrink-0 w-[364px] h-[430px] relative overflow-hidden">
//                 <div className="bg-[#f5fafa] w-[326px] h-[314px] absolute left-[38px] top-[116px]" />
//                 <div className="w-80 h-[230px] static">
//                     <div className="w-[235px] h-[90px] static">
//                     <div className="bg-[#dbe5fa] w-[235px] h-[15px] absolute left-[107px] top-[55px]" />
//                     <div className="bg-[#dbe5fa] w-[214px] h-[15px] absolute left-[107px] top-20" />
//                     <div className="bg-[#dbe5fa] w-[190px] h-[15px] absolute left-[107px] top-[105px]" />
//                     <div className="bg-[#dbe5fa] w-[168px] h-[15px] absolute left-[107px] top-[130px]" />
//                     </div>
//                     <div className="w-[235px] h-[90px] static">
//                     <div className="bg-[#dbe5fa] w-[235px] h-[15px] absolute left-[107px] top-[175px]" />
//                     <div className="bg-[#dbe5fa] w-[214px] h-[15px] absolute left-[107px] top-[200px]" />
//                     <div className="bg-[#dbe5fa] w-[190px] h-[15px] absolute left-[107px] top-[225px]" />
//                     <div className="bg-[#dbe5fa] w-[168px] h-[15px] absolute left-[107px] top-[250px]" />
//                     </div>
//                     <div className="bg-[#35b2f6] rounded-sm w-[63px] h-[90px] absolute left-[22px] top-[55px]" />
//                     <div className="bg-[#0f8ce9] rounded-sm w-[63px] h-[90px] absolute left-[22px] top-[180px]" />
//                     <img
//                     className="w-[119px] h-[55px] absolute left-[165px] top-10 overflow-visible"
//                     src="group-1710.svg"
//                     />
//                 </div>
//                 <div className="w-80 h-[90px] static">
//                     <div className="bg-[#dbe5fa] rounded-[50%] w-[90px] h-[90px] absolute left-[22px] top-[300px]" />
//                     <div className="bg-[#0f8ce9] rounded-[50%] w-[90px] h-[90px] absolute left-[137px] top-[300px]" />
//                     <div className="bg-[#35b2f6] rounded-[50%] w-[90px] h-[90px] absolute left-[252px] top-[300px]" />
//                 </div>
//                 <div className="w-12 h-[18px] static">
//                     <div className="bg-[#ffffff] rounded-[50%] w-2 h-2 absolute left-[313px] top-[341px]" />
//                     <div className="bg-[#ffffff] rounded-[50%] w-3 h-3 absolute left-[296px] top-[339px]" />
//                     <div className="bg-[#ffffff] rounded-[50%] w-[18px] h-[18px] absolute left-[273px] top-[336px]" />
//                 </div>    
//             </div>
//             {/* Frame 2 */}
//             <div className="bg-[#f9f8fe] rounded-[20px] shrink-0 w-[364px] h-[430px] relative overflow-hidden border border-solid border-red-700">
//                 <div className="bg-[#e9effc] rounded-[10px] w-[353px] h-[351px] absolute left-5 top-[98px]" />
//                 <div className="bg-[#f5fafa] w-[326px] h-[314px] absolute left-[38px] top-[116px]" />
//                 <div className="w-[284px] h-[205px] static">
//                     <div
//                     className="bg-[#35b2f6] rounded-[10px] w-[267px] h-[174px] absolute left-[58px] top-16 overflow-hidden"
//                     style={{ boxShadow: "0px 14px 44px 0px rgba(0, 0, 0, 0.15)" }}
//                     >
//                     <img
//                         className="w-[270px] h-[174.5px] absolute left-[-3.5px] top-[0.5px] overflow-visible"
//                         src="vector-390.svg"
//                     />
//                     <div className="w-[42px] h-[42px] static">
//                         <div className="bg-[#fee900] rounded-[10px] w-[42px] h-[42px] absolute left-5 top-5" />
//                         <div className="bg-[#35b2f6] rounded w-5 h-5 absolute left-[31px] top-[31px]" />
//                         <img
//                         className="w-5 h-5 absolute left-[31px] top-[31px] overflow-visible"
//                         src="bar-chart-2-10.svg"
//                         />
//                     </div>
//                     <div className="text-[#ffffff] text-left font-['Inter-Medium',_sans-serif] text-3xl font-medium absolute left-5 top-[92px]">
//                         Document File
//                     </div>
//                     <div className="text-[#ffffff] text-left font-['Inter-Medium',_sans-serif] text-lg font-medium absolute left-5 top-[133px]">
//                         456 GB I 1056 Items
//                     </div>
//                     </div>
//                     <img
//                     className="w-[66px] h-[66px] absolute left-[276px] top-[33px] overflow-visible"
//                     src="group-1781.svg"
//                     />
//                 </div>
//                 <div className="bg-[#0f8ce9] rounded-[30px] w-7 h-36 absolute left-[345px] top-[115px]" />
//                 <img
//                     className="w-[266px] h-[134px] absolute left-[94px] top-[268px] overflow-visible"
//                     src="group-1820.svg"
//                 />
//             </div>
//             {/* Frame 3 */}
//             <div className="bg-[#f9f8fe] rounded-[20px] shrink-0 w-[364px] h-[430px] relative overflow-hidden">
//                 <div className="bg-[#e9effc] rounded-[10px] w-[353px] h-[351px] absolute left-5 top-[98px]" />
//                 <div className="bg-[#f5fafa] w-[326px] h-[314px] absolute left-[38px] top-[116px]" />
//                 <div className="rounded-[10px] border-solid border-[#eff2f7] border w-[313px] h-[106px] absolute left-[67px] top-[164px]" />
//                 <div className="w-[290px] h-[70px] static">
//                     <img
//                     className="w-[70px] h-[70px] absolute left-[85px] top-[182px] overflow-visible"
//                     src="group-1782.svg"
//                     />
//                     <div className="w-[190px] h-16 static">
//                     <div className="w-[190px] h-2.5 static">
//                         <div className="bg-[#dbe5fa] rounded-[70px] w-[190px] h-2.5 absolute left-[185px] top-[239px]" />
//                         <div className="bg-[#35b2f6] rounded-[70px] w-[92px] h-2.5 absolute left-[185px] top-[239px]" />
//                     </div>
//                     <div className="bg-[#dbe5fa] rounded-[70px] w-[104px] h-1.5 absolute left-[185px] top-[217px]" />
//                     <div className="bg-[#dbe5fa] rounded-[70px] w-[190px] h-4 absolute left-[185px] top-[185px]" />
//                     </div>
//                 </div>
//                 <div className="w-[348px] h-[106px] static">
//                     <div className="bg-[#ffffff] rounded-[10px] border-solid border-[#eff2f7] border w-[348px] h-[106px] absolute left-[27px] top-[296px]" />
//                     <div className="w-[328px] h-[70px] static">
//                     <div className="w-[70px] h-[70px] static">
//                         <div
//                         className="bg-[#ffffff] rounded-[10px] w-[70px] h-[70px] absolute left-[45px] top-[314px]"
//                         style={{ boxShadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.05)" }}
//                         />
//                     </div>
//                     <div className="w-[228px] h-16 static">
//                         <div className="w-[228px] h-2.5 static">
//                         <div className="bg-[#dbe5fa] rounded-[70px] w-[228px] h-2.5 absolute left-[145px] top-[371px]" />
//                         <div className="bg-[#35b2f6] rounded-[70px] w-[163.2px] h-2.5 absolute left-[145px] top-[371px]" />
//                         </div>
//                         <div className="bg-[#dbe5fa] rounded-[70px] w-[124.8px] h-1.5 absolute left-[145px] top-[349px]" />
//                         <div className="bg-[#dbe5fa] rounded-[70px] w-[228px] h-4 absolute left-[145px] top-[317px]" />
//                     </div>
//                     </div>
//                 </div>
//                 <div className="w-10 h-10 absolute left-[60px] top-[329px] overflow-hidden">
//                     <img
//                     className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
//                     src="group0.svg"
//                     />
//                 </div>
//                 <div className="w-[190px] h-[190px] static">
//                     <div className="w-[190px] h-[190px] static">
//                     <div className="rounded-[50%] border-solid border-[#52459f] border-[34px] w-[190px] h-[190px] absolute left-[85px] top-[21px]" />
//                     <div className="rounded-[50%] border-solid border-[#0f8ce9] border-[34px] w-[190px] h-[190px] absolute left-[85px] top-[21px]" />
//                     <div className="rounded-[50%] border-solid border-[#35b2f6] border-[34px] w-[190px] h-[190px] absolute left-[85px] top-[21px]" />
//                     <div className="rounded-[50%] border-solid border-[#fee900] border-[34px] w-[190px] h-[190px] absolute left-[85px] top-[21px]" />
//                     </div>
//                     <div className="text-[#000000] text-left font-['Inter-Medium',_sans-serif] text-sm font-medium absolute left-[89px] top-[126px]">
//                     60%
//                     </div>
//                     <div className="text-[#000000] text-left font-['Inter-Medium',_sans-serif] text-sm font-medium absolute left-[245px] top-[126px]">
//                     40%
//                     </div>
//                     <div className="w-[78px] h-[78px] static">
//                     <div className="w-[78px] h-[78px] static">
//                         <div className="bg-[#fefefd] rounded-[50%] w-[78px] h-[78px] absolute left-[141px] top-[77px]" />
//                     </div>
//                     <div className="bg-[#e6f9fd] rounded-[50%] w-[60px] h-[60px] absolute left-[150px] top-[86px]" />
//                     </div>
//                     <img
//                     className="w-[21.62px] h-[29.85px] absolute left-[181.61px] top-[134.43px] overflow-visible"
//                     src="group1.svg"
//                     />
//                 </div>`
//             </div>
//         </div>
//         {/* End of Frame 3 */}
//         <div className="flex flex-row gap-[50px] items-start justify-start shrink-0 relative">
//             <div className="shrink-0 w-[376px] h-[138px] static">
//                 <div className="text-[#191a15] text-left font-['Inter-SemiBold',_sans-serif] text-3xl leading-[30px] font-semibold absolute left-0 top-0">
//                         Collboration Teams
//                     </div>
//                 <div className="text-[#a6a6a6] text-left font-['Inter-Regular',_sans-serif] text-lg font-normal absolute left-0 top-[50px] w-[376px]">
//                     Engage in one-on-one or group conversations, share files, and
//                     collaborate instantly within Fidar's integrated chat functionality.
//                 </div>
//             </div>
//             <div className="shrink-0 w-[340px] h-[110px] static">
//             <div className="text-[#a6a6a6] text-left font-['Inter-Medium',_sans-serif] text-lg leading-[30px] font-medium absolute left-[426px] top-[50px] w-[340px]">
//                 No nedd to worry about storage because we provide storage up to 2 TB
//             </div>
//             <div className="text-[#191a15] text-left font-['Inter-SemiBold',_sans-serif] text-3xl leading-[30px] font-semibold absolute left-[426px] top-0">
//                 Cloud Storage
//             </div>
//             </div>
//             <div className="shrink-0 w-[340px] h-[110px] static">
//             <div className="text-[#a6a6a6] text-left font-['Inter-Medium',_sans-serif] text-lg leading-[30px] font-medium absolute left-[816px] top-[50px] w-[340px]">
//                 We always provide useful informatin to make it easier for you every day
//             </div>
//             <div className="text-[#191a15] text-left font-['Inter-SemiBold',_sans-serif] text-3xl leading-[30px] font-semibold absolute left-[816px] top-0">
//                 Daily Analytics
//             </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default KeyFeatures

import React from "react";
import circlearror from "../../images/circlearror.svg";
import cloud from "../../images/cloud.svg";
import havetriangle from "../../images/havetriangle.svg";
import linechat from "../../images/linechat.svg";
import bluecurve from "../../images/bluecurve.svg";
import rightmeasure from "../../images/rightmeasure.svg";
import middleframe from "../../images/middleframe.svg";
import documentframe1 from "../../images/documentframe1.svg";
import { Link } from "react-router-dom";

function KeyFeatures() {
  return (
    <>
    <div className="mt-16 flex flex-col gap-8 items-start justify-start w-full">
      {/* Opening Section */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-8 lg:gap-20 items-center justify-center w-full mx-auto">
        <div className="w-[80%] md:w-[60%] text-center md:text-left">
          <h2 className="text-2xl lg:text-5xl font-semibold text-gray-900">
            Key features at your finger tip
          </h2>
          <p className="text-sm lg:text-lg text-center md:text-left text-gray-500 mt-4 max-w-xl leading-7">
            We offer a variety of interesting features that can help increase
            your productivity at work and manage your project easily.
          </p>
        </div>
        <Link
          to="/pages/signup"
          className="bg-blue-500 text-white font-medium text-lg px-6 py-3 rounded-full hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </div>

      {/* First Column */}
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-col gap-8 items-start justify-center w-full mx-auto">
            <img
            className="bg-gray-100 rounded-lg w-full lg:w-full h-96 border-solid border-red-700"
            src={documentframe1}
            alt="Document Frame"
            />
            <div className="flex flex-col items-start text-left w-full lg:w-full">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                    Collaboration Teams
                </h3>
                <p className="text-gray-500 mt-2 leading-6">
                    Engage in one-on-one or group conversations, share files, and
                    collaborate instantly within Fidar's integrated chat functionality.
                </p>
            </div>
        </div>
        {/* Second Column */}
      <div className="flex flex-col lg:flex-col gap-8 items-start justify-center w-full mx-auto">
        <img
            className="bg-gray-100 rounded-lg w-full lg:w-full h-96"
            src={middleframe}
            alt="Middle Frame"
            />
        <div className="flex flex-col items-start text-left w-full lg:w-full">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
            Cloud Storage
          </h3>
          <p className="text-gray-500 mt-2 leading-6">
            No need to worry about storage because we provide storage up to 2
            TB.
          </p>
        </div>
      </div>
      {/* Third colum */}
        <div className="flex flex-col lg:flex-col gap-8 items-start justify-center w-full mx-auto">
            <img
            className="bg-gray-100 rounded-lg w-full lg:w-full h-96"
            src={rightmeasure}
            alt="Right Measure"
            />
            <div className="flex flex-col items-start text-left w-full lg:w-full">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                Daily Analytics
            </h3>
            <p className="text-gray-500 mt-2 leading-6">
                We always provide useful information to make it easier for you
                every day.
            </p>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default KeyFeatures;

