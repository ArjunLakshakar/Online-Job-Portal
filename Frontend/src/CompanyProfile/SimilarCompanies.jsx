import React from 'react'
import { similar } from '../Data/CompanyData'
import CompanyCard from './CompanyCard'

const SimilarCompanies = () => {
  return (
    <div className='w-1/4' >
        <div className='font-semibold text-xl mb-5 '>Similar Companies</div>
        <div className='flex flex-col flex-wrap gap-5'>
        {
        similar.map((company,index)=> <CompanyCard {...company} />)
        }
        </div>
      
    </div>
  )
}

export default SimilarCompanies
