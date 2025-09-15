import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Divider } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profile from '../TalentProfile/Profile'
import { profile, talents } from '../Data/TalentData'
import RecommendedTalent from '../TalentProfile/RecommendedTalent'
import { getAllProfiles } from '../Services/ProfileService'


const TalentProfilePage = () => {
  const navigate = useNavigate();
  const [talent,setTalent] = useState([]);
  useEffect(()=>{
    getAllProfiles().then((res)=>{
      setTalent(res);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className="min-h-[90vh] bg-mine-shaft-900 font-['poppins'] p-4">
        
        
        <Button my="sm" onClick={()=>navigate(-1)} leftSection={<FontAwesomeIcon size={20} icon={faArrowLeft}/>} variant="outline" color="brightSun.4"> Back </Button>
     
        <div className='flex gap-5 lg-mx:flex-wrap'>
        {/* {
          profiles.map((profile,index)=> <Profile key={index} {...profile}/>)
        } */}
        <Profile {...profile}/>
        <RecommendedTalent talents={talent} />

        </div>
        
    </div>
  )
}

export default TalentProfilePage
