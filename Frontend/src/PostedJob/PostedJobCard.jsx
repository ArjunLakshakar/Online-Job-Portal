import React from 'react'
import { timeAgo } from '../Services/Utilities'
import { Link, useParams } from 'react-router-dom';

const PostedJobCard = (props) => {
  const {id} = useParams();
  return (
    <Link to={`/posted-jobs/${props.id}`} className={`bg-mine-shaft-900 rounded-xl p-2  border-l-bright-sun-500 border-l-2
  ${props.id==id?"!bg-bright-sun-400 text-black":"!bg-mine-shaft-900 text-mine-shaft-300  lg-mx:w-48  bs-mx:w-44"}`}>
      <div className='text-sm  font-semibold'>{props.jobTitle}</div>
      <div className='text-sx font-medium'>{props.location}</div>
      <div className='text-sx '> {props.jobStatus=="DRAFT"?"Drafted":props.jobStatus=="CLOSED"?"Closed":"Posted"} {timeAgo(props.postTime)}</div>
    </Link>
  )
}

export default PostedJobCard
