import React from 'react'

import { profile } from '../Data/TalentData'
import Profile from '../Profile/Profile'


const ProfilePage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-900 font-['poppins'] p-4">
            <Profile {...profile}/>
        </div>
      )
}


export default ProfilePage
