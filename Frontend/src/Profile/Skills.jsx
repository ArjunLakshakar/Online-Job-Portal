import { ActionIcon, TagsInput } from '@mantine/core';
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { successNotification } from '../Services/NotificationService';
import { changeProfile } from '../Slices/ProfileSlice';
import { useMediaQuery } from '@mantine/hooks';

const Skills = () => {
    const profile = useSelector((state)=>state.profile);
    const user = useSelector((state)=>state.user);
    const[skills,setSkills] = useState([]);
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
            setSkills(profile.skills);
        }else{
            setEdit(false);
        }
    }
    const handleSave=()=>{
            setEdit(false);
            let updatedProfile={...profile, skills:skills};
            dispatch(changeProfile(updatedProfile));
            successNotification('Success','Skills updated Successfully');
            console.log(updatedProfile); 
    }
  return (
    <div>
        <div className='px-3'>  
            <div className='text-2xl font-semibold mb-3 flex justify-between'> Skills 
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
            </div>
            {
                edit?<>
                <TagsInput value={skills} onChange={setSkills} placeholder="Add Skills" splitChars={[',', ' ', '|']} />
                <div className='flex flex-wrap gap-2 mt-2 '>
                {
                    profile?.skills?.map((skill,index ) => <div key={index} className='bg-bright-sun-400 bg-opacity-15 rounded-3xl text-bright-sun-400 px-2 py-1 text-sm font-medium'> {skill} </div> )
                }   
                </div> </>
                :<div className='flex flex-wrap gap-2 '>
                {
                    profile?.skills?.map((skill,index) => <div key={index} className='bg-bright-sun-400 bg-opacity-15 rounded-3xl text-bright-sun-400 px-2 py-1 text-sm font-medium'> {skill} </div> )
                }   
                </div>
            }   
        </div>
      
    </div>
  )
}

export default Skills
