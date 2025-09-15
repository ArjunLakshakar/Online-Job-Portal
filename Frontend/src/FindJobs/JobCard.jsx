import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Divider, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { timeAgo } from '../Services/Utilities'
import { IconBookmark, IconBookmarkFilled } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile} from '../Slices/ProfileSlice'

const JobCard = (props:any) => {
  const profile = useSelector((state) =>state.profile);
  const dispatch = useDispatch();
  
  const handleSaveJob = () => {
    // Ensure savedJobs is always an array
    let savedJobs = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];
  
    if (savedJobs.includes(props.id)) {
      savedJobs = savedJobs.filter((id) => id !== props.id);
    } else {
      savedJobs = [...savedJobs, props.id];
    }
  
    let updatedProfile = { ...profile, savedJobs };
    dispatch(changeProfile(updatedProfile));
  };
  

  return (
    <div className='bg-mine-shaft-700 w-72 p-4 flex flex-col gap-3 rounded-xl hover:shadow-[0_0__5px_1px_yellow] !shadow-bright-sun-400  sm-mx:w-full' >
      <div className='flex justify-between'>
        <div className='flex  gap-2 items-center'>
            <div className='p-2 rounded-md items-center bg-mine-shaft-800'>
                <img className='h-8 ' src={`/Icons/${props.company}.png`} alt="" />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='font-semibold'>{props.jobTitle}</div>
                <div className='text-xs text-mine-shaft-300'>{props.company} &#x2022; {props.applicants?props.applicants.length:0} Applicants</div>
            </div>
        </div>
        {
          profile.savedJobs?.includes(props.id)
          ?<IconBookmarkFilled onClick={handleSaveJob} className='cursor-pointer text-bright-sun-500' />
          :<IconBookmark onClick={handleSaveJob} className='cursor-pointer text-mine-shaft-300 hover:text-bright-sun-400' />
        }
        
      </div>
      <div className=' flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800  [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs  flex-wrap '>
        <div >{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
        <Text className='!text-xs text-justify !text-mine-shaft-300' lineClamp={3} >{props.about}</Text>
      <Divider color='mineShaft.4' size="sm" mx="md" />
      <div className='flex justify-between '>
        <div className='font-semibold text-mine-shaft-200'> &#8377; {props.packageOffered} LPA</div>
        <div className='flex text-xs gap-1 items-center text-mine-shaft-300'>
            {timeAgo(props.postTime)}  <FontAwesomeIcon icon={faClock}/>
        </div>
      </div>
      <Link to={`/jobs/${props.id}`}>
      <Button fullWidth color='brightSun.4' variant='outline'>View Job</Button>
      </Link> 
    </div>
  )
}

export default JobCard
