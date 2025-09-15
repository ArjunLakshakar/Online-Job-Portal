import { ActionIcon } from '@mantine/core'
import { IconPencil, IconTrash } from '@tabler/icons-react'
import React from 'react'
import { formatDate } from '../Services/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { successNotification } from '../Services/NotificationService'
import { useMediaQuery } from '@mantine/hooks'

const CertiCard = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state)=>state.profile);
  const matches = useMediaQuery('(max-width: 475px)');

  const handleDelete = ()=>{
    let certi=[...profile.certifications];
    certi.splice(props.index,1);
    let updatedProfile = {...profile, certifications:certi};
    dispatch(changeProfile(updatedProfile));
    successNotification("Success","Certificate Deleted Successfully");
  }
  return (
    <div className='flex justify-between sm-mx:flex-wrap'>
    <div className='flex  gap-2 items-center'>
        <div className='p-2 rounded-md bg-mine-shaft-800 shrink-0'>
            <img className='h-7 ' src={`Icons/${props.issuer}.png`} alt="" />
        </div>
        <div className='flex flex-col gap-1'>
            <div className='font-semibold xs-mx:text-sm'>{props.name}</div>
            <div className='text-sm text-mine-shaft-300  xs-mx:text-xs'> {props.issuer} </div>
        </div>
    </div>
    <div className='flex items-center gap-2'>
      <div className='flex flex-col items-end  sm-mx:flex-row  sm-mx:gap-2' >
          <div className='text-mine-shaft-300 text-sm  xs-mx:text-xs' >Issued {formatDate(props.issueDate)} </div>
          <div className='text-mine-shaft-300 text-sm  xs-mx:text-xs' > ID :{props.certificateId} </div>
      </div>
      {
        props.edit&&<ActionIcon onClick={handleDelete} variant="subtle" size={matches?"ms":"lg"} color='red.4' >
        <IconTrash className='h-4/5 w-4/5' stroke={1.5}/>
        </ActionIcon>
      }
    
    </div>
    
    </div>
  )
}

export default CertiCard;
