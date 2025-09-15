import React, { useEffect, useState } from 'react';
import Sort from './Sort';
import JobCard from './JobCard';
import { getAllJobs } from '../Services/JobService';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../Slices/FilterSlice';
import { resetSort } from '../Slices/SortSlice';

const Jobs = () => {
  const [jobList, setJobList] = useState([{}]); 
  const filter = useSelector((state) => state.filter);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const sort = useSelector((state)=>state.sort);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter())
    dispatch(resetSort())
    getAllJobs()
      .then((res) => {
        setJobList(res.filter((job)=>job.jobStatus=="ACTIVE")); 
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      });
  }, []); 

  useEffect(()=>{
    if(sort == "Most Recent"){
      setJobList([...jobList].sort((a ,b)=>new Date(b.postTime).getTime()- new Date(a.postTime).getTime()));
    }
    else if(sort == "Salary (Low to High)"){
      setJobList([...jobList].sort((a ,b)=> a.packageOffered - b.packageOffered));
    }
    else if(sort == "Salary (High to Low)"){
      setJobList([...jobList].sort((a ,b)=> b.packageOffered - a.packageOffered));
    }
  },[sort])

  useEffect(() => {
      let filtered = jobList;
  
      if(filter["Job Title"] && filter["Job Title"].length>0){
        filtered = filtered.filter((job) =>
          filter["Job Title"]?.some((title)=>job.jobTitle.toLowerCase().includes(title.toLowerCase())));
      }
      if(filter["Location"] && filter["Location"].length>0){
        filtered = filtered.filter((job) =>
          filter["Location"]?.some((location)=>job.location.toLowerCase().includes(location.toLowerCase())));
      }
      if(filter.Experience && filter.Experience.length>0){
        filtered = filtered.filter((job) =>
          filter.Experience?.some((x)=>job.experience?.toLowerCase().includes(x.toLowerCase())));
      }
      if(filter["Job Type"] && filter["Job Type"].length>0){
        filtered = filtered.filter((job) =>
          filter["Job Type"]?.some((jobType)=>job.jobType.toLowerCase().includes(jobType.toLowerCase())));
      }
      if(filter.salary && filter.salary .length>0){
        filtered = filtered.filter((job)=>
          filter.salary[0]<=job.packageOffered && job.packageOffered<= filter.salary[1]);
      }
  
      setFilteredJobs(filtered);
    }, [filter, jobList]);

  return (
    <div className="p-5">
      <div className="flex justify-between mt-5 flex-wrap">
        <div className="text-2xl font-semibold  xs-mx:text-xl">Recommended Jobs</div>
        <Sort sort="job" />
      </div>
      <div className="flex mt-10 flex-wrap gap-5 justify-center">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => <JobCard key={index} {...job} />)
        ) : (
          <div className="text-gray-500 text-lg">No jobs available.</div> // ✅ Fix 4: Show message if no jobs
        )}
      </div>
    </div>
  );
};

export default Jobs;
