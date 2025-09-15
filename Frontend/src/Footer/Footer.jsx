import { faFacebook, faInstagram, faSlack, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { footerLinks } from '../Data/Data'
import { faPenRuler } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { IconAnchor, IconBrandFacebook } from '@tabler/icons-react'

const Footer = () => {
    const location= useLocation();
    return location.pathname!="/signup" && location.pathname!="/login" ?(
    <div className="pt-20 p-4 pb-5 flex gap-5 justify-around  bg-mine-shaft-900 font-['poppins'] flex-wrap ">
        <div className='w-1/4 flex flex-col gap-4  sm-mx:w-1/3  xs-mx:1/2  xsm-mx:w-full  '>
            <div className='items-center gap-2 flex' > 
                    {/* <FontAwesomeIcon className='h-8 w-7 text-white' icon={faSlack} /> */}
                    <IconAnchor className='h-8 w-7 text-white' />
                    <div className='font-semibold text-2xl text-bright-sun-400'>JobNexus</div>
            </div>
            <div className='text-sm text-mine-shaft-300'>Job portal with user profiles, skill updates, certifications, with experience and admin job postings.</div>
            <div className='text-white flex gap-3 [&>div]:bg-mine-shaft-600 [&>div]:p-1 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-400'>
                <div> <FontAwesomeIcon icon={faFacebook}/> </div>
                <div> <FontAwesomeIcon icon={faInstagram}/> </div>
                <div> <FontAwesomeIcon icon={faTwitter }/> </div>
                
            </div>
        </div>

        {
            footerLinks.map((item,index) =>
                <div key={index}> 
                   <div className='text-lg font-semibold mb-4 text-bright-sun-400'>{item.title}</div>
                   {
                      item.links.map((link,index)=>
                        <div key={index} className='text-mine-shaft-200 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out'>{link}</div>
                    )
                   }
                   <div></div>
                
                </div>
            )
        }
    </div>
        
  ):
  <></>
}

export default Footer
