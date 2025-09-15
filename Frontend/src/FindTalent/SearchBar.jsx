import React, { useState } from 'react'

import { Button, Collapse, Divider, Input, RangeSlider } from '@mantine/core'
import { searchFields } from '../Data/TalentData'
import MultiInput from '../FindJobs/MultiInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../Slices/FilterSlice';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

const SearchBar = () => {
    const [value, setValue] = useState([0, 50]);
    const [name, setName] = useState('');
    const dispatch =useDispatch('');
    const [opened, { toggle }] = useDisclosure (false);
    const matches = useMediaQuery('(max-width: 475px)');

    const handleChange=(name,event)=>{
      if(name==="exp"){
        dispatch(updateFilter({exp:event}))
      }else{
        setName(event.target.value);
        dispatch(updateFilter({name:event.target.value}));
      }
    }
  return (
    <div>
          <div className='flex justify-end'>
          {
            matches && <Button onClick={toggle} variant='outline' m='sm' radius='lg' className='align' color='brightSun.4'>
            {opened?"Close":'Filters'}</Button> 
          }
          </div>

        <Collapse in={(opened || !matches)}>
        
        <div className='flex px-5 py-8 !text-mine-shaft-100  lg-mx:!flex-wrap'>
        <div className="flex items-center w-1/5 lg-mx:w-1/4  bs-mx:w-[30%]  sm-mx:w-[48%]  xs-mx:w-full  xs-mx:mb-1">
            <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-lg p-1 mr-2"> <FontAwesomeIcon size={20}  icon={faUserCircle}/> </div>
            <Input defaultValue={name} onChange={(e)=>handleChange("name",e)} className='[&_input]:!placeholder-mine-shaft-300' placeholder="Talent Name" />
        </div>
        {
            searchFields.map((item,index)=><>  <div key={index} className='w-1/5  lg-mx:w-1/4  bs-mx:w-[30%]  sm-mx:w-[48%]  xs-mx:w-full  xs-mx:mb-1'>
            <MultiInput {...item}/>
        </div> 
        <Divider className='sm-mx:hidden' color='mineShaft.5' size="sm" mr='xs' orientation="vertical" />
        </>)
        }
        <div className='w-1/5  lg-mx:w-1/4  lg-mx:mt-7  bs-mx:w-[30%]  sm-mx:w-[48%]  xs-mx:w-full  [&_.mantine-Slider-label]:!translate-y-10  xs-mx:mb-1' >
        <div className='flex justify-between text-sm'>
            <div>Experience (Year)</div>
            <div>{value[0]} - {value[1]}  </div>
        </div>
           <RangeSlider onChangeEnd={(e)=>handleChange("exp",e)} size="xs" minRange={1} value={value} max={50} min={1} labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}  onChange={setValue} />
        </div>
        
    </div>
    </Collapse>
  </div>
  )
}

export default SearchBar    
