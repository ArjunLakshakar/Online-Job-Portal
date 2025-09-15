import React, { useState } from 'react'
import MultiInput from './MultiInput'
import { dropdownData } from '../Data/Data'
import { Button, Collapse, Divider, RangeSlider } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../Slices/FilterSlice'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

const SearchBar = () => {
  const [value, setValue] = useState([0, 300]);
  const dispatch =useDispatch();
  const [opened, { toggle }] = useDisclosure (false);
  const matches = useMediaQuery('(max-width: 475px)');

  const handleChange=(event)=>{
    dispatch(updateFilter({salary:event}));
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
    <div className='flex px-5 py-8 items-center !text-mine-shaft-100  lg-mx:!flex-wrap'>

        {
          dropdownData.map((item,index)=> {
          return <React.Fragment key={index}>  <div key={index} className='w-1/5  lg-mx:w-1/4  bs-mx:w-[30%]  sm-mx:w-[48%]  xs-mx:w-full  xs-mx:mb-1'>
          <MultiInput {...item}/>
        </div> 
        <Divider className='sm-mx:hidden' color='mineShaft.5' size="sm" mr='xs' orientation="vertical" />
        </React.Fragment>})
        }

        <div className='w-1/5 lg-mx:w-1/4  lg-mx:mt-7  bs-mx:w-[30%]  sm-mx:w-[48%]  xs-mx:w-full  xs-mx:mb-1  text-sm [&_.mantine-Slider-label]:!translate-y-10 ' >
          <div className='flex justify-between text-sm '>
            <div>Salary</div>
            <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA </div>
          </div>

           <RangeSlider size="xs" value={value} 
           onChangeEnd={(e)=>handleChange(e)} minRange={1}  max={50} min={1}
           labelTransitionProps={{
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
