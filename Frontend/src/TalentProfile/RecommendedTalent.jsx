import React, { useEffect } from 'react'
import { talents } from '../Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'
import { useParams } from 'react-router-dom'

const RecommendedTalent = (props) => {
  const {id} = useParams();
  return (
    <div >
        <div className='font-semibold text-xl mb-5 '>Recommended Talent</div>
        <div className='flex flex-col flex-wrap gap-5'>
        {
        props?.talents.map((talent,index)=> index<4 && id!=talent.id && <TalentCard {...talent} />)
        }
        </div>
      
    </div>
  )
}

export default RecommendedTalent
