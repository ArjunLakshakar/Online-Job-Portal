import { Button } from '@mantine/core'
import React, { useState } from 'react'
import ExpInput from './ExpInput';
import { formatDate } from '../Services/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';

const ExpCard = (props:any) => {
  const [edit,setEdit] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state:any)=>state.profile);

  const handleDelete=()=>{
    let exp=[...profile.experiences];
    exp.splice(props.index,1);
    let updatedProfile = {...profile, experiences:exp};
    // props.setEdit(false);
    dispatch(changeProfile(updatedProfile));
    successNotification("Success","Experience Deleted Successfully");
  }
  return !edit?(
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between flex-wrap gap-2'>

          <div className='flex  gap-2 items-center'> 
            <div className='p-2 rounded-md bg-mine-shaft-800'>
              <img className='h-7 ' src={`Icons/${props.company}.png`} alt="" />
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-semibold'>{props.title}</div>
              <div className='text-sm text-mine-shaft-300'>{props.company} &bull; {props.location} </div>
            </div>
          </div> 

          <div className='text-mine-shaft-300 text-sm'>
            {formatDate(props.startDate)} - {props.working?"Persent":formatDate(props.endDate)}
          </div>
        </div>
        <div className='text-sm text-mine-shaft-300 text-justify xs-mx:text-xs'>
          {props.description}
        </div>
        {
          props.edit&&<div className='flex gap-5 '>
          <Button color='brightSun.4' variant='outline' onClick={()=>setEdit(true)}> Edit </Button> 
          <Button color='red.4' onClick={handleDelete} variant='light'> Delete </Button> 
        </div>
        }
    </div>
  ):<ExpInput {...props} setEdit={setEdit}/>
}

export default ExpCard
