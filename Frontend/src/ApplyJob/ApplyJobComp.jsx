import { faCheck, faCheckCircle, faL, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, CheckIcon, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from '@mantine/core'
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ApplicationForm from './ApplicationForm'
import { timeAgo } from '../Services/Utilities'


const ApplyJobComp = (props) => {
    const navigate = useNavigate();
    
  return ( <>
  
    <div className='w-2/3 mx-auto  bs-mx:w-4/5  sm-mx:w-full '>
       <div className='flex justify-between'>
              <div className='flex  gap-2 items-center'>
                  <div className='p-3 rounded-xl bg-mine-shaft-800  shrink-0'>
                      <img className='h-14  xs-mx:h-10  xs-mx:w-10' src={`/Icons/${props.company}.png`} alt=""/>
                  </div>
                  <div className='flex flex-col gap-1'>
                      <div className='font-semibold text-2xl  xs-mx:text-xl'>{props.jobTitle}</div>
                      <div className='text-lg text-mine-shaft-300 flex-wrap xs-mx:text-base'>
                        <span> { props.company || 'NaN'} </span> 
                        <span> &bull; {timeAgo(props.postTime)} </span>  
                        <span> &#x2022; {props.applicants?props.applicants.length:0} Applicants </span>
                      </div>
                  
                  </div>
              </div>
            </div>
            <Divider color="mineShaft.6 " size="sm" my="xl" />
            <ApplicationForm/>
    </div>
    {/* <Notification withBorder className={`!border-bright-sun-400 z-[1001] !fixed top-0 left-[35%] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20"}`} icon={<FontAwesomeIcon icon={faCheck} size=''/>} withCloseButton={false} color="teal" title="Application Submitted!" mt="md">
    Redirecting to Find Find Jobs in {sec} seconds...
    </Notification> */}
    </>
  )
}

export default ApplyJobComp
