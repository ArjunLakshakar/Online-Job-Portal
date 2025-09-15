import { Tabs } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import PostedJobCard from './PostedJobCard';

const PostedJob = ({ job, jobList = [] }) => {
    const [activeTab, setActiveTab] = useState('ACTIVE');

    useEffect(() => {
        if (job?.jobStatus) {
            setActiveTab(job.jobStatus);  // ✅ Update tab only when job changes
        }
    }, [job]);

    const activeJobs = jobList.filter(j => j.jobStatus === "ACTIVE");
    const draftJobs = jobList.filter(j => j.jobStatus === "DRAFT");
    const closeJobs = jobList.filter(j => j.jobStatus === "CLOSED");

    // ✅ Properly handle all three statuses
    const filteredJobs = 
        activeTab === "ACTIVE" ? activeJobs : 
        activeTab === "DRAFT" ? draftJobs : 
        closeJobs;

    return (
        <div className='mt-5 w-1/5'>
            <div className='text-2xl font-semibold mb-5'>Posted Jobs</div>
            <div>
                <Tabs autoContrast variant="pills" value={activeTab} onChange={setActiveTab}>
                    <Tabs.List className="[&_button[aria-selected='false']:bg-mine-shaft-900] font-medium">
                        <Tabs.Tab value="ACTIVE">Active [{activeJobs.length}]</Tabs.Tab>
                        <Tabs.Tab value="DRAFT">Draft [{draftJobs.length}]</Tabs.Tab>
                        <Tabs.Tab value="CLOSED">Closed [{closeJobs.length}]</Tabs.Tab>
                    </Tabs.List>
                </Tabs>

                <div className='flex flex-col gap-5 mt-5'>
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((item) => <PostedJobCard key={item.id} {...item} />)
                    ) : (
                        <p className="text-gray-500">No jobs available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostedJob;
