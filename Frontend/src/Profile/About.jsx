import { ActionIcon, Textarea } from '@mantine/core';
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { successNotification } from '../Services/NotificationService';
import { changeProfile } from '../Slices/ProfileSlice';
import { useMediaQuery } from '@mantine/hooks';

const About = () => {
    const profile = useSelector((state:any)=>state.profile);
    const user = useSelector((state:any)=>state.user);
    const [about,setAbout] = useState("");
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false); 
    const matches = useMediaQuery('(max-width: 475px)');

    // const form = useForm({
    //     mode: 'controlled',
    //     initialValues: { jobTitle: '', company: '',location:'' },
        
    //   });
    const handleClick=()=>{
        if(!edit){
            setEdit(true);
            setAbout(profile.about);
        }else{
            setEdit(false);
        }
    }
    const handleSave=()=>{
            setEdit(false);
            let updatedProfile={...profile, about:about};
            
            dispatch(changeProfile(updatedProfile));
            successNotification('Success','Profile updated Successfully');
            console.log(updatedProfile); 
    }
  return (
    <div>
      <div className='px-3'> 
            <div className='text-2xl font-semibold mb-3 flex justify-between'> About
            <div>
            {edit&& <ActionIcon onClick={handleSave} variant="subtle" size={matches?"ms":"lg"} color='green.8' >
                <IconCheck className='w-4/5 h-4/5'  />              
            </ActionIcon> }
            <ActionIcon onClick={handleClick} variant="subtle" size={matches?"ms":"lg"} color={edit?'red.8':'brightSun.4'} >
            {
                edit?<IconX className='w-4/5 h-4/5'  />:<IconPencil className='w-4/5 h-4/5'  />
            }               
            </ActionIcon>
            </div>  
            {/* <ActionIcon onClick={()=>handleEdit(1)} variant="subtle" size="lg" color='brightSun.4' >
            {
                edit?<IconDeviceFloppy className='w-4/5 h-4/5'  />:<IconPencil className='w-4/5 h-4/5'  />
            }               
            </ActionIcon> */}
            </div> 
            {
                edit?<Textarea value={about} autosize minRows={3} placeholder='Enter about yourself' onChange={(e) => setAbout(e.currentTarget.value)} />
                :<div className='text-sm text-mine-shaft-300 text-justify '> {profile?.about} </div>
            } 
        </div>
    </div>
  )
}

export default About;
