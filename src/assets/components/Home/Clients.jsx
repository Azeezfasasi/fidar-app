// import React from 'react'
// import block from '../../images/block.svg';
// import threelines from '../../images/threelines.svg';
// import animal from '../../images/animal.svg';
// import jigsaw from '../../images/jigsaw.svg';
// import renewit from '../../images/renewit.svg';

// function Clients() {
//   return (
//     <>
//     <div className="flex flex-col gap-14 items-center justify-start relative">
//         <div className="text-[#191a15] text-center font-['Inter-Bold',_sans-serif] text-[40px] font-bold relative">Clients that have tested Fidar</div>
//         <div className="h-[55px] relative">
//             <div className="flex flex-row justify-between w-[953px] h-[55px] overflow-hidden">
//                 <div className="w-[20%] h-[100%]">
//                     <img className="w-[145px] h-9 overflow-visible" src={block} />
//                 </div>
//                 <div className="w-[20%] h-[100%]">
//                     <img className="w-[145px] h-9 overflow-visible" src={threelines} />
//                 </div>
//                 <div className="w-[20%] h-[100%]">
//                     <img className="w-[145px] h-9 overflow-visible" src={animal} />
//                 </div>
//                 <div className="w-[20%] h-[100%]">
//                     <img className="w-[145px] h-9 overflow-visible" src={jigsaw} />
//                 </div>
//                 <div className="w-[20%] h-[100%]">
//                     <img className="w-[145px] h-9 overflow-visible" src={renewit} />
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Clients

import React from 'react';
import block from '../../images/block.svg';
import threelines from '../../images/threelines.svg';
import animal from '../../images/animal.svg';
import jigsaw from '../../images/jigsaw.svg';
import renewit from '../../images/renewit.svg';

function Clients() {
  return (
    <div className="flex flex-col gap-6 md:gap-10 items-center justify-start px-4 md:px-8 lg:px-16 py-8">
      {/* Title */}
      <h2 className="text-[#191a15] text-center font-bold text-2xl md:text-4xl">
        Clients that have tested Fidar
      </h2>

      {/* Logos */}
      <div className="flex flex-row flex-wrap gap-6 md:gap-20 justify-center items-center m-auto">
        <div className="">
          <img className="" src={block} alt="Block Logo" />
        </div>
        <div className="">
          <img className="" src={threelines} alt="Three Lines Logo" />
        </div>
        <div className="">
          <img className="" src={animal} alt="Animal Logo" />
        </div>
        <div className="">
          <img className="" src={jigsaw} alt="Jigsaw Logo" />
        </div>
        <div className="">
          <img className="" src={renewit} alt="Renewit Logo" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
