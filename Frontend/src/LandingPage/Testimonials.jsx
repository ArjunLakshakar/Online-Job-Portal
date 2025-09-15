import { Avatar, Rating } from '@mantine/core'
import React from 'react'
import { testimonials } from '../Data/Data'

const Testimonials = () => {
  return (
    <div className='mt-20 pd-5 p-5'>
        <div className='text-4xl text-center font-semibold mb-3 text-mine-shaft-100 pb-5  md-mx:3xl  sm-mx:2xl  xs-mx:text-xl'> What <span className='text-bright-sun-400'>User</span> says about us?</div>
        
        <div className='flex gap-10 justify-evenly overflow-hidden  md-mx:flex-wrap  mt-10 '>
        {
            testimonials.map((data,index)=>
                <div key={index} className='flex flex-col gap-3  w-[23%] border-bright-sun-400 border p-3 rounded-xl  md-mx:w-[48%]  xsm-mx:w-full'>
            <div className='flex gap-2 items-center '>
                <Avatar className='!h-14 !w-14' src="avatar-9.png" alt="it's me"/>
                <div>
                    <div className='text-lg text-mine-shaft-100 font-semibold  xs-mx:text-base  xsm-mx:text-xs'>{data.name}</div>
                    <Rating value={data.rating} fractions={2} readOnly />
                </div>
            </div>
            <div className='text-sm text-mine-shaft-300'>{data.testimonial}</div>
        </div>
            )
        }
        </div>
        
    
    </div>
  )
}

export default Testimonials
