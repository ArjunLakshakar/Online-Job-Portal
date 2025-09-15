import React, { useEffect, useState } from 'react'
import PostedJob from '../PostedJob/PostedJob'
import PostedJobDesc from '../PostedJob/PostedJobDesc'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getJobPostedBy } from '../Services/JobService'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Button, Drawer } from '@mantine/core'

const PostedJobPage = () => {
    const {id} = useParams();
    const user = useSelector((state)=>state.user);
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const matches = useMediaQuery('(max-width: 767px)');

    const [jobList,setJobList]=useState([]);
    const [job,setJob] = useState({});
    
    useEffect(() => {
        window.scrollTo(0, 0);
    
        if (user?.id) {
            getJobPostedBy(user.id)
                .then((res) => {
                    setJobList(res.data); // ✅ Use `res.data`
                    if(res && res.length>0 && Number(id)==0) navigate(`/posted-jobs/${res[0].id}`);
                    const foundJob = res.data.find((item) => item.id === Number(id));
                    setJob(foundJob || {});
                })
                .catch((err) => {
                    console.error("Error fetching job:", err);
                    setJobList([]); // ✅ Prevent `null` or `undefined`
                });
        }
    }, [id, user.id]);
    
    
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-5">
            { matches && <Button mt='8' variant="light" size='md' autoContrast color='brightSun.4' onClick={open}> All Jobs </Button> }
            <Drawer opened={opened} onClose={close} size={230} title="All Jobs">
            <PostedJob job={job} jobList={jobList} />
            </Drawer>
            <div className='flex gap-5 '>
                {
                    !matches && <PostedJob job={job} jobList={jobList} />
                }
            
            <PostedJobDesc {...job} /> {/* ✅ Pass job details safely */}
        
            </div>
            
        </div>
    )
}

export default PostedJobPage
