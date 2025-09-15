import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, TextInput } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DreamJob = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center px-20  bs-mx:px-10 md-mx:px-5  md-mx:!flex-col-reverse min-h-[35vh] pt-6'> 

      <div className='flex flex-col w-[45%] gap-3  md-mx:w-full  ' >
        <div className='text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400  bs-mx:text-5xl  md-mx:text-4xl  sm-mx:text-3xl'>Find Your <span>Dream </span><span>job </span>with us </div>
        <div className='text-lg text-mine-shaft-200  md-mx:text-base  sm-mx:text-sm'>Good Life begins with a good company. Start explore thousands of jobs in one place.</div>
        <div className='flex gap-3 mt-5  items-center'> 
            <TextInput className="bg-mine-shaft-700 rounded-lg  p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100  placeholder-gray-100" variant="unstyled" label="Job Title" placeholder="Software Engineer"/>
            <TextInput className="bg-mine-shaft-700 rounded-lg  p-1 px-2 text-mine-shaft-100 " variant="unstyled" label="Job Type" placeholder="FullTime"/>
            <div onClick={()=>navigate("/find-jobs")} className='flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer'>
                <FontAwesomeIcon className='h-[85%] w-[85%]' icon={faMagnifyingGlass}/>
            </div>
        </div>
      </div>

      <div className='w-[55%] flex items-center justify-center  md-mx:w-full md-mx:px-20  xsm-mx:hidden'>
        <div className='w-[30rem] relative'> 
            <img src='/boy.png' alt='boy'/>

            <div className='absolute -right-14 top-[18%]  w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md  bs-mx:right-0  xs-mx:top-[10%]  xs-mx:-right-16 md-mx:-right-14 xsm-mx:hidden'>
                <div className='text-center mb-1 text-sm text-mine-shaft-100  '>10k+ got job </div>
                <Avatar.Group className=''>
                <Avatar src="avatar-9.png" />
                <Avatar src="avatar-8.png" />
                <div className='xs-mx:hidden'> <Avatar src="avatar-7.png" /></div>
                <Avatar>+10</Avatar>
                </Avatar.Group>
            </div>

            <div className='absolute top-[30%] -left-10 w-fit gap-3 flex flex-col border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md  bs-mx:top-[35%]  xs-mx:top-[45%]  xs-mx:!right-0  md-mx:-left-16  sm-mx:-left-20  sm-mx:top-[30%]  xs-mx:gap-0  xsm-mx:hidden' >
              <div className='flex gap-2 items-center '>
                <div className='w-12 h-10 p-1 bg-mine-shaft-600 rounded-lg  sm-mx:w-8 sm-mx:h-8 '>
                  <img  className='w-9 h-9 items-center  sm-mx:w-7 sm-mx:h-7 ' src="Icons/Google.png"></img>
                </div>
                <div className='text-sm text-mine-shaft-200  xs-mx:text-xs'>
                  <div>Software Engineer</div>
                  <div className='text-mine-shaft-200 text-xs'>New York</div> 
                </div>
              </div>

              <div className='flex justify-around gap-2 text-mine-shaft-200 text-xs '>
                <span>1 day ago</span>
                <span>120 Applicants</span>
              </div>
            </div>
        </div>
      </div> 
         
    </div>
  )
}

export default DreamJob
