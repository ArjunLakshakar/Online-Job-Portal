import React from 'react'
import SearchBar from '../FindJobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from '../FindJobs/Jobs'

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-800 font-['poppins']">
  
        <SearchBar/>
        <Divider color='mineShaft.5' size="sm" mx="md" />
        <Jobs />
        
    </div>
  )
}

export default FindJobs
