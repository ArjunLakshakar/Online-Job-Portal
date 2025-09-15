import React, { useState } from 'react'
import fields from '../Data/ProfileData';
import { ActionIcon, NumberInput } from '@mantine/core';
import { IconBriefcase, IconCheck, IconDeviceFloppy, IconPencil, IconX } from '@tabler/icons-react';
import SelectInput from './SelectInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { hasLength, isEmail, useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';
import { useMediaQuery } from '@mantine/hooks';

const Info = () => {
    const select = fields;
    const profile = useSelector((state)=>state.profile);
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false); 
    const matches = useMediaQuery('(max-width: 475px)');

    const form = useForm({
        mode: 'controlled',
        validateInputOnChange:true,
        initialValues: { jobTitle: '', company: '',location:'',totalExp:1 },
        
      });
    const handleClick=()=>{
        if(!edit){
            setEdit(true);
            form.setValues({jobTitle:profile.jobTitle,company:profile.company,location:profile.location,'totalExp':profile.totalExp});
        }else{
            setEdit(false);
        }
    }
    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile, ...form.getValues()};
        // form.setValues({jobTitle:profile.jobTitle,company:profile.company,location:profile.location});
        dispatch(changeProfile(updatedProfile));
        successNotification('Success','Profile updated Successfully');
        console.log(updatedProfile); 
    }
  return (
    <div>
        <div className='text-3xl font-semibold flex justify-between  xs-mx:text-2xl  xs-mx:text-2xl' > {user.name} 
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
                <div className='flex gap-10 my-3 [&>*]:w-1/2  xs-mx:[&>*]:w-full  xs-mx:flex-wrap  md-mx:gap-5'>
                    <SelectInput form={form} name="jobTitle" {...select[0]}/>
                    <SelectInput form={form} name="company"  {...select[1]}/>
                    </div>   
                <div className='flex gap-10 [&>*]:w-1/2  xs-mx:[&>*]:w-full  xs-mx:flex-wrap  md-mx:gap-5'>
                    <SelectInput form={form} name="location" {...select[2]}/>
                    <NumberInput withAsterisk label="Experience" {...form.getInputProps('totalExp')} hideControls
                    min={0} max={50} />

                    </div> 
                    
                </>:<>
                <div className='flex text-xl gap-1 items-center  xs-mx:text-base' > 
                <FontAwesomeIcon className='h-5 w-5' icon={faBriefcase}/> {profile.jobTitle} &bull; {profile.company} </div>
                <div className='text-lg flex gap-1 items-center text-mine-shaft-300  xs-mx:text-base '> 
                <FontAwesomeIcon className='h-5 w-5' icon={faLocationDot} />{profile.location}</div>
                <div className='text-lg flex gap-1 items-center text-mine-shaft-300  xs-mx:text-base'> 
                <IconBriefcase className='h-5 w-5' stroke={1.5} />Experience: {profile.totalExp} Years</div>
                </>
            }
    </div>
  )
}

export default Info
