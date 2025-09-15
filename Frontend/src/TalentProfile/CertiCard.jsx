import React from 'react'
import { formatDate} from '../Services/Utilities'

const CertiCard = (props) => {
  return (
    <div className='flex justify-between  sm-mx:flex-wrap gap-2'>
    <div className='flex  gap-2 items-center'>
        <div className='p-2 rounded-md bg-mine-shaft-800 shrink-0'>
            <img className='h-7 ' src="google.avif" alt="" />
        </div>
        <div className='flex flex-col gap-1'>
            <div className='font-semibold'>{props.name}</div>
            <div className='text-sm text-mine-shaft-300  xs-mx:text-xs'> {props.issuer} </div>
        </div>
    </div>
    <div className='flex flex-col items-end  sm-mx:flex-row  sm-mx:gap-2' >
        <div className='text-mine-shaft-300 text-sm  xs-mx:text-xs' > Issued : {formatDate(props.issueDate)} </div>
        <div className='text-mine-shaft-300 text-sm  xs-mx:text-xs' > ID: {props.certificateId} </div>
    </div>
    </div>
  )
}

export default CertiCard
