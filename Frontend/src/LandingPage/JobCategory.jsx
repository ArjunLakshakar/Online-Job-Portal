import React from 'react'
import { Carousel } from '@mantine/carousel';
import { jobCategory } from '../Data/Data'
import '@mantine/carousel/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';


// import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';


const JobCategory = () => {
  return (
    <div className='mt-20 pd-5'>
        <div className='text-4xl text-center font-semibold mb-3 text-mine-shaft-100 pb-5  md-mx:3xl  sm-mx:2xl  xs-mx:text-xl'> Browse <span className='text-bright-sun-400'>Job</span> Category</div>
        <div className='text-lg text-mine-shaft-200 text-center w-1/2 mx-auto  sm-mx:text-base  xs-mx:text-sm  sm-mx:w-11/12'>  Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
        
        <Carousel slideSize="22%" slipgap="md" loop
        nextControlIcon={<IconArrowRight className="h-8 w-8 "  />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
        >
            {
                jobCategory.map((category,index) => <Carousel.Slide>
                    <div key={index} className='flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300
                    sm-mx:w-56  xs-mx:w-48'>
                        
                        <div className='p-2 bg-bright-sun-400 rounded-full'>
                            {/* <img className='h-8 w-8' src={`/Category/${category.name}.png`} alt={category.name} /> */}
                            {/* <div className='text-white h-8 w-8 '>{category.icon}</div> */} 
                            <FontAwesomeIcon className="h-8 w-8 text-white  sm-mx:w-6 sm-mx:h-6  xs-mx:h-4  xs-mx:w-4  " icon={category.icon} />
                        </div>
                        <div className='text-mine-shaft-100 text-xl font-semibold  sm-mx:text-lg  xs-mx:text-base'>{category.name}</div>
                        <div className='text-sm text-center text-mine-shaft-300  xs-mx:text-xs'>{category.desc}</div>
                        <div className='text-bright-sun-300 text-lg sm-mx:text-base  xs-mx:text-sm '>{category.jobs}+ new job posted</div>
                    </div>
                     
                </Carousel.Slide>)
            }
        </Carousel>
        <div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default JobCategory  
