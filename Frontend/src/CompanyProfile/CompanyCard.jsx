import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionIcon } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ name, employees, index }) => {
  return (
    <div>
      <div className="flex justify-between items-center bg-mine-shaft-900 rounded-lg p-2">
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-md bg-mine-shaft-800">
            <img className="h-7" src={`/Icons/${name}.png`} alt={name} />
          </div>cle
          <div className="flex flex-col gap-1">
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-mine-shaft-300">{employees} Employees</div>
          </div>
        </div>
        <Link to={`/company/${name}`}>
          <ActionIcon color="brightSun.4" variant="subtle">
            <FontAwesomeIcon className="text-bright-sun-400 h-5 w-5" icon={faExternalLink} />
          </ActionIcon>
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;







// import { faBaby, faExternalLink, faSliders } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { ActionIcon } from '@mantine/core'
// import React from 'react'

// const CompanyCard = (props:any) => {
//   return (
//     <div>
//       <div className='flex justify-between items-center bg-mine-shaft-900 rounded-lg p-2'>
//               <div className='flex  gap-2 items-center'>
//                   <div className='p-2 rounded-md bg-mine-shaft-800'>
//                       <img className='h-7 ' src={`/Icons/${props.name}.png`} alt="" />
//                   </div>
//                   <div className='flex flex-col gap-1'>
//                       <div className='font-semibold'>{props.name}</div>
//                       <div className='text-xs text-mine-shaft-300'>{props.employees} Employees</div>
//                   </div>
//               </div>
//               <ActionIcon color='brightSun.4' variant='subtle' >
//               <FontAwesomeIcon className='text-bright-sun-400 h-5 w-5 ' icon={faExternalLink} />
//               </ActionIcon>
//             </div>
//     </div>
//   )
// }

// export default CompanyCard
