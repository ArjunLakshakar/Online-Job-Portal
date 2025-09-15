// import React, { useEffect, useState } from 'react'
// import { jobList } from '../Data/Data'
// import JobCard from '../FindJobs/JobCard'
// import { getAllJobs } from '../Services/JobService';

// const CompanyJobs = ({ companyName }) => {

//   const [jobList, setJobList] = useState([{}]); 

//   useEffect(() => {
//       // dispatch(resetFilter())
//       // dispatch(resetSort())
//       getAllJobs()
//         .then((res) => {
//           setJobList(res.filter((job)=>job.company=={companyName})); 
//         })
//         .catch((err) => {
//           console.error("Error fetching jobs:", err);
//         });
//     }, []); 
//   return (


//     <div>
//       <div className='flex mt-10 flex-wrap gap-4 justify-center '>
//       {
//         jobList.map((job,index) => <JobCard key={index} {...job} /> )
//       }
//       </div>
//     </div>
//   )
// }

// export default CompanyJobs


import React, { useEffect, useState } from 'react';
import JobCard from '../FindJobs/JobCard';
import { getAllJobs } from '../Services/JobService';

const CompanyJobs = ({ companyName }) => {
  const [jobList, setJobList] = useState([]);  // ✅ Initialize as an empty array

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        setJobList(res.filter((job) => job.company === companyName && job.jobStatus === "ACTIVE" ));  // ✅ Correct filtering
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      });
  }, [companyName]);  // ✅ Add companyName to dependency array

  return (
    <div>
      <div className='flex mt-10 flex-wrap gap-4 justify-center'>
        {jobList.length > 0 ? (
          jobList.map((job, index) => <JobCard key={index} {...job} />)
        ) : (
          <p className="text-white text-xl text-center">No jobs found for {companyName}</p>
        )}
      </div>
    </div>
  );
};

export default CompanyJobs;

