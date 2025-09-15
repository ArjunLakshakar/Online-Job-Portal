import React from 'react'
import Marquee from 'react-fast-marquee';
import companies from '../Data/Data';


const Companies = () => {
  return (
    <div className='mt-20 '>
        <div className='text-4xl text-center font-semibold mb-10 text-mine-shaft-100 pb-5  md-mx:3xl  sm-mx:2xl  xs-mx:text-xl'> Trusted By <span className='text-bright-sun-400'>1000+ </span> Companies</div>
        {/* <Marquee pauseOnHover={true}>
            
        </Marquee> */}
        <Marquee pauseOnHover={true}>
        {
                companies.map((company,index) => <div key={index} className='mx-8 px-2 py-1 hover:bg-mine-shaft-600 rounded-xl cursor-pointer  sm-mx:mx-6  xs-mx:mx-4  xsm-mx:2'>
                    <img className="h-20 w-30 " src={`/companies/${company}.png`} alt="{company}" />
                </div> )
            }

        </Marquee>
    </div>
  )
}

export default Companies
