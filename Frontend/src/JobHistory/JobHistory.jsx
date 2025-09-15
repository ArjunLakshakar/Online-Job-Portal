import React, { useEffect, useState } from 'react'
import { Tabs } from '@mantine/core'
import { getAllJobs } from '../Services/JobService'
import { useSelector } from 'react-redux'
import Card from './Card'

const JobHistory = () => {
    const [activeTab, setActiveTab] = useState('APPLIED');
    const profile = useSelector((state) => state.profile);
    const user = useSelector((state) => state.user);
    const [jobList, setJobList] = useState([]);
    const [showList, setShowList] = useState([]);

    useEffect(() => {
        getAllJobs().then((res) => {
            setJobList(res);
            setShowList(res.filter((job) => job.applicants?.some((applicant) => 
                applicant.applicantId === user.id && applicant.applicationStatus === "APPLIED"
            )));
        }).catch((err) => {
            console.log(err);
        });
    }, []); // <-- Add empty dependency array
    

    const handleTabChange = (value: string | null) => {
        setActiveTab(value || 'APPLIED');
    
        if (value === "SAVED") {
            setShowList(jobList.filter((job) => profile.savedJobs?.includes(job.id)));
        } else {
            setShowList(jobList.filter((job) => 
                job.applicants?.some((applicant) => 
                    applicant.applicantId === user.id && applicant.applicationStatus === value
                )
            ));
        }
    };
    

    return (
        <div>
            <div className='font-semibold text-2xl mb-5'> Job History</div>
            <div>
                <Tabs 
                    variant="outline" 
                    color="mineShaft.3" 
                    value={activeTab} 
                    onChange={handleTabChange} 
                    radius="lg"
                >
                    <Tabs.List className='font-semibold mb-5 [&_button]:!text-lg [&_button[data-active="true"]]:!text-bright-sun-400  sm-mx:[&_button]:!text-lg   xs-mx:[&_button]:!text-base  xs-mx:[&_button]:!px-1.5  xs-mx:font-medium  xs-mx:[&_button]:!py-1.5  xsm-mx:[&_button]:!text-s'>
                        <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">In Progress</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value={activeTab} className='[&>div]:w-full'>
                        <div className='flex mt-10 flex-wrap gap-5 justify-center'>
                            {showList.map((job, index) => (
                                <Card key={index} {...job} {...{[activeTab.toLowerCase()]:true}} />
                            ))}
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
};

export default JobHistory;
