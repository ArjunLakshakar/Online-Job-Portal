import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, AvatarGroup, Divider, Tabs } from '@mantine/core';
import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import AboutComp from './AboutComp';
import CompanyJobs from './CompanyJobs';
import CompanyEmployees from './CompanyEmployees';
import { companyData } from '../Data/CompanyData'; // Ensure correct import path

const Company = () => {
  let { name } = useParams();

  window.scroll({ top: 0, behavior: "smooth" });

  // If `name` is undefined or empty, default to "Google"
  if (!name || !companyData[name]) {
    return <Navigate to="/company/Google" />;
  }

  const company = companyData[name];

  if (!company) {
    return <div className="text-white text-center text-xl">Company not found!</div>;
  }

  return (
    <div className="w-3/4  md-mx:w-full">
      <div className="relative">
        <img className="rounded-t-2xl h-52 w-[125%]" src="/CompBg1.jpg" alt="Company Background" />
        <img
          className="w-auto h-36 rounded-3xl -bottom-1/4 absolute left-5 p-2 bg-mine-shaft-600 border-x-mine-shaft-950 border-9  xs-mx:!h-25  xs-mx:w-25"
          src={`/Icons/${name}.png`} // Ensure correct logo path
          alt={name}
        />
      </div>

      <div className="px-4 py-2 mt-12">
        <div className="text-3xl font-semibold flex justify-between ">
          {name}
          <div className='xs-mx:hidden'>
          <AvatarGroup>
            <Avatar src="/avatar-9.png" />
            <Avatar src="/avatar-8.png" />
            <Avatar src="/avatar-7.png" />
            <Avatar> 10+ </Avatar>
          </AvatarGroup>
          </div>
        </div>

        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <FontAwesomeIcon className="h-5 w-5" icon={faLocationDot} /> {company.Location}
        </div>

        <Divider color="mineShaft.5" mx="xs" my="xl" size="sm" />

        <div>
          <Tabs variant="outline" color="mineShaft.3" defaultValue="about" radius="lg">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-bright-sun-400">
              <Tabs.Tab value="about">About</Tabs.Tab>
              <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
              <Tabs.Tab value="employees">Employees</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about">
              <AboutComp companyName={name} />
            </Tabs.Panel>
            <Tabs.Panel value="jobs">
              <CompanyJobs companyName={name} />
            </Tabs.Panel>
            <Tabs.Panel value="employees">
              <CompanyEmployees companyName={name} />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Company;










// import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Avatar, AvatarGroup, Button, Divider, Tabs } from '@mantine/core'
// import React from 'react'
// import AboutComp from './AboutComp'
// import CompanyJobs from './CompanyJobs'
// import CompanyEmployees from './CompanyEmployees'
// import { useLocation } from 'react-router-dom'

// const Company = () => {
//   const location = useLocation();
//   const jobData = location.state?.jobData || {};


//   return (
//     <div className='w-3/4'>
//       <div className='relative'>
//               <img className='rounded-t-2xl h-52 w-[125%]' src="/CompBg1.jpg" alt="" />
//               <img className='w-36 h-36 rounded-3xl -bottom-1/4 absolute left-5 p-2  bg-mine-shaft-600  border-x-mine-shaft-950 border-9' src={`/Icons/${jobData.company}.png`} alt="" />  
//             </div>
            
//             <div className='px-4 py-2 mt-12'>
//               <div className='text-3xl font-semibold flex justify-between' > {jobData.company} 
//                 <AvatarGroup>
//                   <Avatar src="/avatar-9.png"/>
//                   <Avatar src="/avatar-9.png"/>
//                   <Avatar src="/avatar-9.png"/>
//                   <Avatar> 10+ </Avatar>                
//                 </AvatarGroup>   
//               </div>
//               <div className='text-lg flex gap-1 items-center text-mine-shaft-300 '> 
//                 <FontAwesomeIcon className='h-5 w-5' icon={faLocationDot} /> {jobData.location} </div>
              
//               <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
//               <div>
//                 <Tabs variant="outline" color="mineShaft.3" defaultValue="about" radius="lg">
//                   <Tabs.List className='[&_button]:!text-lg font-semibold mb-5 [&_button[data-active="true"]]:!text-bright-sun-400'>
//                     <Tabs.Tab value="about">About </Tabs.Tab>
//                     <Tabs.Tab value="jobs">Jobs </Tabs.Tab>
//                     <Tabs.Tab value="employees">Employees </Tabs.Tab>
//                   </Tabs.List>

//                   <Tabs.Panel value="about"><AboutComp companyName={jobData.company} /></Tabs.Panel>
//                   <Tabs.Panel value="jobs"><CompanyJobs/> </Tabs.Panel>
//                   <Tabs.Panel value="employees"><CompanyEmployees/> </Tabs.Panel>
//                 </Tabs>
//               </div>
//             </div>
            
//     </div>
//   )
// }

// export default Company
