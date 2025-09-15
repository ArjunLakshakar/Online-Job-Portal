import { ActionIcon } from '@mantine/core';
import { IconPencil, IconPlus, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CertiCard from './CertiCard';
import CertiInput from './CertiInput';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';

const Certification = () => {
    const profile = useSelector((state)=>state.profile);
    const [addCerti,setAddCerti] = useState(false);
    const [edit,setEdit] = useState(false);
    const matches = useMediaQuery('(max-width: 475px)');

    const handleClick = ()=>{
        // const newEdit =[...edit];
        // newEdit[index] =!newEdit[index];
        // setEdit(newEdit);
        // console.log(edit)
        setEdit(!edit);
    }
    
  return (
    <div>
        <div className='px-3'> 
            <div className='text-2xl font-semibold mb-5 flex justify-between'> Certifications
            <div className='flex gap-2'>
            <ActionIcon onClick={()=>setAddCerti(true)} variant="subtle" size={matches?"ms":"lg"} color='brightSun.4' >
                <IconPlus className='w-4/5 h-4/5' />              
            </ActionIcon> 
            <ActionIcon onClick={handleClick} variant="subtle" size={matches?"ms":"lg"} color={edit?'red.8':'brightSun.4'} >
            {
                edit?<IconX className='w-4/5 h-4/5'  />:<IconPencil className='w-4/5 h-4/5'  />
            }               
            </ActionIcon> 
            </div>   
             </div>
            <div className='flex flex-col gap-8'>
            {
                profile?.certifications?.map((certi,index)=> <CertiCard key={index} edit={edit} index={index} {...certi} />)
            }
            {
                addCerti&&<CertiInput setEdit={setAddCerti}/>
            }
            </div>
        </div>
    </div>
  )
}

export default Certification
