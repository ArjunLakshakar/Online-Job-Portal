import React from 'react'
import { work } from '../Data/Data'
import { Avatar } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Working = () => {
  return (
    <div className='mt-20 pd-5'>
        <div className='text-4xl text-center font-semibold mb-3 text-mine-shaft-100 pb-5  md-mx:3xl  sm-mx:2xl  xs-mx:text-xl'> How it <span className='text-bright-sun-400'>Works</span> </div>
        <div className='text-lg text-mine-shaft-200 mb-10 text-center w-1/2 mx-auto  md-mx:text-3xl  sm-mx:text-2xl  xs-mx:text-xl  sm-mx:w-11/12 '> Effortlessly navigate through the process and land your dream job.</div>
      
      <div className='flex  px-16 justify-around items-center  bs-mx:px-10  md-mx:px-5 md-mx:flex-col  xs-mx:gap-10'>
        <div className='relative '>
          <img className="w-[30rem] " src="/girl.png" alt="work" />
          
          <div className='w-36 flex flex-col top-[15%] absolute left-3 items-center gap-1 border border-bright-sun-400 rounded-xl  py-2 px-1 backdrop-blur-md  xs-mx:w-28  lg-mx:top-[0%]  bs-mx:left-0  md-mx:top-[15%]  sm-mx:top-[30%]  xs-mx:left-22  xs-mx:top-[18%]  xsm-mx:top-[0%]  xsm-mx:left-0'>
            <Avatar className="!h-16 !w-16  xs-mx:!h-12 xs-mx:!w-12" src="avatar-9.png" alt="it's me" />
            <div className='text-sm font-semibold text-mine-shaft-200 text-center  sm-mx:text-xs'>Complete your Profile</div>
            <div className='text-xm font-semibold text-mine-shaft-300  sm-mx:text-xs'>70% Completed </div>
          </div>
        </div>

        <div className='flex flex-col gap-10'>
          {
            work.map((item,index)=>
              <div key={index} className='flex items-center gap-4 '>
            <div className='p-2.5 bg-bright-sun-400 rounded-full'>
              {/* <img className="h-12 w-12 " src={`/Working/${item.name}.png`} alt={item.name} /> */}
              <FontAwesomeIcon className="h-10 w-10 m-1 text-white  md-mx:w-9  md-mx:h-9  sm-mx:w-7  sm-mx:h-7" icon={item.icon} />
            </div>
            <div>
              <div className='text-mine-shaft-200 text-xl font-semibold  md-mx:text-lg  sm-mx:text-base  '>{item.name}</div>
              <div className='text-mine-shaft-300  md-mx:text-sm  sm-mx:text-xs '>{item.desc}</div>
            </div>
          </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Working
