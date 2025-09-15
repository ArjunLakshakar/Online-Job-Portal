import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Divider } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import { useParams } from 'react-router-dom'
import { getProfile } from '../Services/ProfileService'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'


const Profile = (props) => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const matches = useMediaQuery('(max-width: 475px)');

    useEffect(() => {
        window.scrollTo(0, 0);
        getProfile(id)
            .then((res) => {
                setProfile(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    // Prevent rendering until profile is loaded
    if (!profile) {
        return <div className="text-center text-lg font-semibold">Loading...</div>;
    }

    return (
        <div className='w-2/3  lg-mx:w-full'>
            <div className='relative'>
            <img className='rounded-t-2xl w-full xl-mx:h-40 xs-mx:h-32     max-w-full max-h-52 h-auto' src="/banner.png" alt="" />

            {/* className='!w-32 !h-32 sm:w-48 sm:h-48 rounded-full -bottom-1/3 absolute left-3 border-8 border-mine-shaft-950 object-cover' */}
            {/* <img className='!w-48 !h-48  md-mx:!w-40 md-mx:!h-40  sm-mx:!w-36 sm-mx:!h-36  xs-mx:!h-32 xs-mx:!w-32   rounded-full -bottom-1/3 absolute left-3 border-8 border-mine-shaft-950 object-cover'
                src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : 'avatar-9.png'}    
                alt="Profile Picture"    
            /> */}

            <div className='absolute -bottom-1/3 left-8 flex items-center justify-center  md-mx:-bottom-10  sm-mx:-bottom-6.5 ' >
                <Avatar
                    className='!w-48 !h-48 border-mine-shaft-950 border-spacing-8 rounded-full  md-mx:!w-40  md-mx:!h-40   '  // sm-mx:!w-36  sm-mx:!h-36   xs-mx:!w-32  xs-mx:!h-32 
                    src={profile?.picture ? `data:image/jpeg;base64,${profile.picture}` : "/avatar-9.png"} 
                    onError={(e) => (e.target.src = "avatar-9.png")}
                    alt="Profile Picture"/>
                
            </div>
            </div>

            <div className='px-4 py-2 mt-16'>
                <div className='text-3xl font-semibold flex justify-between  xs-mx:text-2xl'>
                     {profile.name} 
                    <Button color='brightSun.4' variant='light' size={matches?'sm':'md'}> Message </Button>
                </div>
                <div className='flex text-xl gap-1 items-center  xs-mx:text-base'>
                    <FontAwesomeIcon className='h-5 w-5' icon={faBriefcase} /> {profile.jobTitle} &bull; {profile.company}
                </div>
                <div className='text-lg flex gap-1 items-center text-mine-shaft-300  xs-mx:text-base'>
                    <IconMapPin className='h-5 w-5' /> {profile.location}
                </div>
                <div className='text-lg flex gap-1 items-center text-mine-shaft-300  xs-mx:text-base'>
                    <IconBriefcase className='h-5 w-5' /> Experience: {profile?.totalExp}
                </div>
            </div>

            <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-3'> About </div>
                <div className='text-sm text-mine-shaft-300 text-justify'>{profile.about}</div>
            </div>

            <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-3'> Skills </div>
                <div className='flex flex-wrap gap-2'>
                    {profile.skills?.map((skill, index) => (
                        <div key={index} className='bg-bright-sun-400 bg-opacity-15 rounded-3xl text-bright-sun-400 px-2 py-1 text-sm font-medium'>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5'> Experience </div>
                <div className='flex flex-col gap-8'>
                    {profile.experiences?.map((exp, index) => <ExpCard key={index} {...exp} />)}
                </div>
            </div>

            <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5'> Certifications </div>
                <div className='flex flex-col gap-8'>
                    {profile.certifications?.map((certi, index) => <CertiCard key={index} {...certi} />)}
                </div>
            </div>
        </div>
    );
};

export default Profile;
