import { Button, TextInput } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'

const Subscribe = () => {
  const matches = useMediaQuery('(max-width:639px)')
  const matches1 = useMediaQuery('(max-width:475px)')
  return (
    <div className='mt-20 flex items-center justify-around bg-mine-shaft-600 mx-20 py-3 rounded-xl  flex-wrap  sm-mx:mx-5'>
        <div className='text-4xl w-2/5 text-center font-semibold text-mine-shaft-100 pb-5  md-mx:3xl  sm-mx:2xl  xs-mx:text-xl bs-mx:w-4/5'> Never Wants to Miss Any <span className='text-bright-sun-400'>Job News?</span></div>
       
        <div className='flex gap-4 bg-mine-shaft-400 rounded-xl px-3 py-2 items-center  '>  
            <TextInput
            className="[&_input]:text-mine-shaft-100 font-semibold  "
            variant="unstyled"
            placeholder="Your@email.com"
            size={matches1?"sm":matches?"md":"xl"}
            />
            <Button className='!rounded-lg' size={matches1?"sm":matches?"md":"xl"} color='brightSun.4' variant="filled">Subscribe</Button>
        </div>
    </div>
  )
}

export default Subscribe
