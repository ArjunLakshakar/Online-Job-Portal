import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindTalent/SearchBar'
import Talents from '../FindTalent/Talents'

const FindTalentPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-800 font-['poppins']">
        <SearchBar/>
        <Divider color='mineShaft.5' size="sm" mx="md" />
        <Talents/>
    </div>
  )
}

export default FindTalentPage
