import React, { useEffect, useState } from 'react';
import TalentCard from '../FindTalent/TalentCard'; // Ensure correct import
import { getAllJobs } from '../Services/JobService';

const CompanyEmployees = ({ companyName }) => {
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        if (!Array.isArray(res)) {
          throw new Error("Invalid job data received");
        }

        // Extract applicants who have been "OFFERED" a job at the specific company
        const offeredTalents = res
          .filter((job) => job.company?.trim().toLowerCase() === companyName?.trim().toLowerCase()) // Filter jobs by company
          .flatMap((job) => 
            job.applicants?.filter((applicant) => applicant.applicationStatus === "OFFERED") || [] // Get applicants who were offered
          );

        setTalents(offeredTalents);
      })
      .catch((err) => {
        console.error("Error fetching talents:", err);
      });
  }, [companyName]); // ✅ Effect re-runs when companyName changes

  return (
    <div className='flex flex-wrap mt-10 gap-10'>
      {talents.length > 0 ? (
        talents.map((talent, index) => <TalentCard key={index} {...talent} />)
      ) : (
        <p className="text-white text-xl text-center">No employees offered a job at {companyName}.</p>
      )}
    </div>
  );
};

export default CompanyEmployees;
