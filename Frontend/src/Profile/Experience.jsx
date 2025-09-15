import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';
import { IconCheck, IconDeviceFloppy, IconPencil, IconPlus, IconX } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import ExpInput from './ExpInput';
import ExpCard from './ExpCard';
import { useMediaQuery } from '@mantine/hooks';

const Experience = () => {
    const profile = useSelector((state)=>state.profile);
    // const user = useSelector((state:any)=>state.user);
    const[addExp,setAddExp] = useState(false);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false); 
    const matches = useMediaQuery('(max-width: 475px)');

    const handleClick=()=>{
        setEdit(!edit);
    }

  return (
    <div>
        <div className='px-3 '> 

            <div className='text-2xl font-semibold mb-5 flex justify-between'> Experience
            <div className='flex gap-2'>
            <ActionIcon onClick={()=>setAddExp(!addExp)} variant="subtle" size={matches?"ms":"lg"} color='brightSun.4' >
                <IconPlus className='w-4/5 h-4/5' />              
            </ActionIcon> 
            <ActionIcon onClick={handleClick} variant="subtle" size={matches?"ms":"lg"} color='brightSun.4' >
            {
                edit?<IconX
                 className='w-4/5 h-4/5'  />:<IconPencil className='w-4/5 h-4/5'  />
            }               
            </ActionIcon> 
            </div>   
             </div>
            <div className='flex flex-col gap-8'>
            {
                profile?.experiences?.map((exp,index)=> <ExpCard {...exp} index={index} edit={edit} />)
            }
            {
                addExp&&<ExpInput add setEdit={setAddExp}/>
            }
            {/* <ExpInput setEdit={setAddExp}/> */}
            </div>    
        </div>
    </div>
  )
}

export default Experience
