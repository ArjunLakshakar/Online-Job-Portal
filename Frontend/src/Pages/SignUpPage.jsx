import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SignUp from '../SignUpLogin/SignUp'
import Login from '../SignUpLogin/Login'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core'
import { IconAnchor, IconArrowLeft } from '@tabler/icons-react'

const SignUpPage = () => {
  const location = useLocation()
  const navigate=useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-800 font-['poppins'] overflow-hidden relative  sm-mx:overflow-y-auto">
      <Button className='!absolute left-5 z-10' onClick={()=> navigate("/")} my="md" leftSection={<IconArrowLeft size={20}/>} variant="outline" color="brightSun.4"> Home </Button>
      <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2  sm-mx:-translate-x-full ':'translate-x-0'}`}>
        <Login/>
        <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 bg-mine-shaft-900  ${location.pathname=='/signup'?"rounded-r-[200px]":"rounded-l-[200px]" } flex flex-col items-center gap-5 justify-center  sm-mx:hidden  sm-mx:min-h-full`}>
          <div className='items-center gap-2 flex' > 
            <IconAnchor className='h-16 w-16' />
            <div className='font-semibold text-6xl text-bright-sun-400  bs-mx:text-xl  md-mx:text-4xl  sm-mx:text-3xl'>JobNexus</div>
          </div>
          <div className='text-2xl text-mine-shaft-200 font-semibold  bs-mx:text-xl  md-mx:text-lg'>Find the made for you</div>
        </div>
        <SignUp/> 
      </div>       
    </div>
  )
}

export default SignUpPage
