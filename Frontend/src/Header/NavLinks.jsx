import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
    const location = useLocation(); // Correctly initialize location using useLocation
    const user = useSelector((state)=>state.user);

    const links = [
        { name: "Find Jobs", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Company", url: "/company"}
        // { name: "SignUp", url: "signup"}
      ];
    
      if (!user) {
        // Show SignUp and Login when no user is logged in
        links.push({ name: "SignUp", url: "/signup" });
        // links.push({ name: "Login", url: "/login" });
    } else if (user?.accountType === "EMPLOYER") {
        // If user is an Employer
        links.push({ name: "Post Job", url: "/post-job/0" });
        links.push({ name: "Posted Jobs", url: "/posted-jobs" });
    } else if (user?.accountType === "APPLICANT") {
        // If user is an Applicant
        links.push({ name: "Job History", url: "/job-history" });
    }

    // links.push({ name: "SignUp", url: "/signup" });


      
    // const links = [
    //     { name: "Find Jobs", url: "find-jobs" },
    //     { name: "Find Talent", url: "find-talent" },
    //     { name: "Post Job", url: "post-job/0" },
    //     { name: "Posted Job", url: "posted-jobs" },
    //     { name: "Job History", url: "job-history"},
    //     { name: "SignUp", url: "signup"}
    // ];

    return (
        <div className='flex gap-5 h-full items-center text-mine-shaft-200 bs-mx:!hidden'>
            {
            links.map((link, index) => (
                <div
                    key={index}
                    className={`${
                        location.pathname === `/${link.url}` 
                            ? "border-bright-sun-400 text-bright-sun-400" 
                            : "border-transparent"
                    } m-3 flex border-t-[3px] border-1 h-full items-center`}
                >
                    <Link to={link.url}>{link.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default NavLinks;
