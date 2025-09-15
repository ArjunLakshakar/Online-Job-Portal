import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDate} from '../Services/Utilities'
import React from 'react'

const ExpCard = (props) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between flex-wrap gap-2'>
            <div className='flex  gap-2 items-center'>
                <div className='p-2 rounded-md bg-mine-shaft-800'>
                    <img className='h-7 ' src="google.avif" alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>{props.title}</div>
                    <div className='text-sm text-mine-shaft-300'>{props.company} &bull; {props.location} </div>
                </div>
            </div>
            <div className='text-mine-shaft-300 text-sm'>
                {formatDate (props.startDate)} - {formatDate(props.endDate)}
            </div>
        </div>
        <div className='text-sm text-mine-shaft-300 text-justify  xs-mx:text-xs '>
            {props.description}
            </div>
    </div>
  )
}

export default ExpCard
