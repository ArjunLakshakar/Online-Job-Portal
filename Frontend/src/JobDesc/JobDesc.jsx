import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ActionIcon, Button, Divider } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { card } from '../Data/JobDescData'
import DOMPurify from 'dompurify'
import { timeAgo } from '../Services/Utilities'
import { changeProfile } from '../Slices/ProfileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { IconBookmark, IconBookmarkFilled, IconBookmarksFilled } from '@tabler/icons-react'
import { postJob } from '../Services/JobService'
import { errorNotification, successNotification } from '../Services/NotificationService'

const JobDesc = (props) => {
    const data = DOMPurify.sanitize(props.description);
    const profile = useSelector((state) =>state.profile);
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [applied,setApplied] = useState(false);

    useEffect(()=>{
        if(props.applicants?.filter((applicant)=>applicant.applicantId==user.id).length>0){
            setApplied(true);
        }else{
            setApplied(false);
        }
    },[props])
    
 

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

    const handleClose =() => {
        postJob({...props, jobStatus:"CLOSED"}).then((res)=>{
            successNotification("Success","Job Closed Successfully")
        }).catch((err)=>{
            errorNotification("Error",err.response.data.errorMessage);
        })
    }
  return (
    <div className='w-2/3  bs-mx:w-full'>
      <div className='flex justify-between items-center flex-wrap'>
              <div className='flex  gap-2 items-center'>
                  <div className='p-3 rounded-xl bg-mine-shaft-800 shrink-0'>
                    {/* src={`/Icon/${props.company}.png`} */}
                      <img className='h-14  xs-mx:h-10  xs-mx:w-10 ' src={`/Icons/${props.company}.png`} alt=""/>
                  </div>
                  <div className='flex flex-col gap-1'>
                      <div className='font-semibold text-2xl  xs-mx:text-xl'>{props.jobTitle}</div>
                      <div className='text-lg text-mine-shaft-300 flex  xs-mx:flex-wrap  xs-mx:text-base'>
                        <span> { props.company || 'NaN'} </span> 
                        <span> &bull; {timeAgo(props.postTime)} </span>  
                        <span> &#x2022; {props.applicants?props.applicants.length:0} Applicants </span></div>
                  </div>
              </div>

              <div className='flex sm:flex-col items-center gap-2  sm-mx:my-5  sm-mx:[&>button]:w-1/2  sm-mx:w-full '>
                {(props.edit || !applied ) &&
                    <Link to={props.edit?`/post-job/${props.id}`:`/apply-job/${props.id}`} >
                    <Button color='brightSun.4' size="sm" variant='light'> {props.closed?"Reopen":props.edit?"Edit":"Apply"} </Button>
                </Link>
                }
                {
                   !props.edit && applied && <Button color='green.8' size='sm' variant='light'> Applied </Button>
                } 
                {
                    props.edit && !props.closed?<Button color='red.5' size="sm" variant='outline' onClick={handleClose}> Close </Button>
                    :
                    profile.savedJobs?.includes(props.id)
                    ?<IconBookmarksFilled onClick={handleSaveJob} className='cursor-pointer text-bright-sun-400' />
                    :<IconBookmark onClick={handleSaveJob} className='cursor-pointer text-mine-shaft-300 hover:text-bright-sun-400' />
                }
                
              </div>
            </div> 
            <Divider my="xl" color='mineShaft.5'/>
            
            <div className='flex justify-between gap-4  sm-mx:flex-wrap '>
                {
                    card.map((item,index) => <div key={index} className='flex flex-col gap-1 items-center'>
                    <ActionIcon className="!w-12 !h-12  xs-mx:!h-8  xs-mx:w-8" variant="light" color="brightSun.4" size="lg" radius="xl" aria-label="Settings">
                    <FontAwesomeIcon className="w-4/5 h-4/5" icon={item.icon}/>
                    </ActionIcon>
                    <div className='text-mine-shaft-300  xs-mx:!text-sm'>{item.name} </div>
                    <div className='text-base font-semibold  xs-mx:!test-sm'> {props?props[item.id]:"NA"} {item.id=="packageOffered" && <>LPA</>} </div>
                    </div> )
                }
            </div>
            <Divider my="xl" color='mineShaft.5'/>

            <div>
                <div className='text-xl font-semibold mb-5'> Required Skills</div>
                <div className='flex flex-wrap gap-2'>
                    {
                        props?.skillsRequired?.map((item,index)=>
                            <ActionIcon key="index" className="!w-fit !h-fit font-medium !text-sm  xs-mx:!text-xs" variant="light" p='xs'  color="brightSun.4" size="lg" radius="xl" aria-label="Settings">
                             {item }
                            </ActionIcon>
                        )
                    }
                </div>
            </div>
            <Divider my="xl" color='mineShaft.5'/>

            <div className='text-xl font-semibold mb-5'> About the Job </div>
            <div className='[&_h4]:text-xl [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [_p]:text-justify  [&_p]:text-xs  [&_li]:text-sm  ' dangerouslySetInnerHTML={{__html:data}}>
            </div>

            <Divider my="xl" color='mineShaft.5'/>
            <div>
                <div className='text-xl font-semibold mb-5'> About the Company </div>
                <div className='flex justify-between mb-3  xs-mx:flex-wrap  xs-mx:gap-2'>
                    
                    <div className='flex  gap-2 items-center'>
                        <div className='p-3 rounded-xl bg-mine-shaft-800'>
                            <img className='h-8 ' src={`/Icons/${props.company}.png`} alt=""/>
                        </div>
                        <div className='flex flex-col'>
                            <div className='font-medium text-lg'>{props.company}</div>
                            <div className=' text-mine-shaft-300'>10k+ Employees</div>
                        </div>
                    </div>
                    
                        <Link to={`/company/${props.company}`} companyName={props.company} state={{ jobData: props }}>
                            <Button color='brightSun.4' variant='light'> Company </Button>
                        </Link>
                </div>
                <div className='text-mine-shaft-300 text-justify  xs-mx:text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, adipisci. Facere eius veniam at enim dolores unde maiores, laboriosam quam. Harum, veritatis nam. Modi exercitationem dicta maxime repudiandae soluta harum, totam ab natus non provident, culpa quasi placeat praesentium quas.</div>
            </div>
    </div>
  )
}

export default JobDesc
