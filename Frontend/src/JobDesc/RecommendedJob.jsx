import React, { useEffect, useState } from 'react'
import JobCard from '../FindJobs/JobCard'

import { useParams } from 'react-router-dom'
import { getAllJobs } from '../Services/JobService';

const RecommendedJob = () => {
  const {id} =useParams();
  const [jobList,setJobList] = useState(null);
  useEffect (()=>{
    getAllJobs().then((res)=>{
      setJobList(res)
    }).catch((err)=>{
      console.log(err);
    })
  })
  return (
    <div >
        <div className='font-semibold text-xl mb-5 '>Recommended Jobs</div>
        <div className='flex 2flex-wrap gap-5  bs:flex-col  bs-mx:justify-start'>
        {
        jobList?.map((job,index)=> index<4 && id!=job.id &&<JobCard key={index} {...job} />)
        }
        </div>
      
    </div>
  )
}

export default RecommendedJob
