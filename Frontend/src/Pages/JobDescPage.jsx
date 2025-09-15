import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import JobDesc from '../JobDesc/JobDesc'
import RecommendedJob from '../JobDesc/RecommendedJob'
import { getJob } from '../Services/JobService'

const JobDescPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    useEffect(()=>{
        window.scroll(0,0);
        getJob(id).then((res)=>{
            setJob(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
    return (
        <div className="min-h-[90vh] bg-mine-shaft-900 font-['poppins'] p-4">
            
            <Link className="my-4 inline-block" to="/find-jobs"> 
               <Button leftSection={<FontAwesomeIcon size={20} icon={faArrowLeft}/>} variant="outline" color="brightSun.4"> Back </Button>
            </Link>
            
            <div className='flex gap-5 justify-around bs-mx:flex-wrap'>
                <JobDesc {...job}/>
                <RecommendedJob/>
            </div>
            
        </div>
      )
}

export default JobDescPage
