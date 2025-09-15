import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ApplyJobComp from '../ApplyJob/ApplyJobComp'
import { getJob } from '../Services/JobService'

const ApplyJobPage = () => {
  const navigate = useNavigate();
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
           
    <Button my="md" mb='xs' onClick={()=>navigate(-1)} leftSection={<FontAwesomeIcon size={20} icon={faArrowLeft}/>} variant="outline" color="brightSun.4"> Back </Button>
    
    <ApplyJobComp {...job}/>
            
    </div>
  )
}

export default ApplyJobPage
