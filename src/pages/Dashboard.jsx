// import React from 'react';
// import { Helmet } from 'react-helmet';
// import DashHeader from '../assets/components/dashboard/DashHeader';
// import DashMenu from '../assets/components/dashboard/DashMenu';
// import Overview from '../assets/components/dashboard/Overview';
// import DashCard from '../assets/components/dashboard/DashCards';
// import RecentFiles from '../assets/components/dashboard/RecentFiles';

// function Dashboard() {
//   return (
//     <>
//     <Helmet>
//         <title>Dashboard - Fidar</title>
//     </Helmet>
//     <div className='w-[100%] flex flex-col md:flex-row items-start justify-start'>
//         {/* menu section */}
//         <div className='w-[fit-content] h-[1000px] border bordersolid border-red-700'>
//             <DashMenu />
//         </div>
//         {/* main dashoard */}
//         <div className='w-[60%] h-[1000px] border bordersolid border-red-700 relative pl-[10px] pr-[10px]'>
//             <DashHeader />
//             <DashCard />
//             <Overview />
//             <RecentFiles />
//         </div>
//         {/* Right side */}
//         <div className='w-[20%] h-[1000px] border bordersolid border-red-700'>
//             <p>vg</p>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Dashboard


import React from 'react';
import { Helmet } from 'react-helmet';
import DashHeader from '../assets/components/dashboard/DashHeader';
import DashMenu from '../assets/components/dashboard/DashMenu';
import Overview from '../assets/components/dashboard/Overview';
import DashCard from '../assets/components/dashboard/DashCards';
import RecentFiles from '../assets/components/dashboard/RecentFiles';

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard - Fidar</title>
      </Helmet>
      <div className='w-full flex flex-col md:flex-row items-start justify-start border border-solid border-blue-900'>
        {/* Menu Section */}
        <div className='w-full md:w-[fit-content] h-auto md:h-[1000px] border border-solid border-red-700'>
          <DashMenu />
        </div>
        
        {/* Main Dashboard */}
        <div className='w-full md:w-[100%] h-auto md:h-[1000px] border border-solid border-red-700 relative p-4 md:pl-[10px] md:pr-[10px]'>
          <DashHeader />
          <DashCard />
          <Overview />
          <RecentFiles />
        </div>
        
        {/* Right Side */}
        <div className='w-full md:w-[20%] h-auto md:h-[1000px] border border-solid border-red-700'>
          <p>vg</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
