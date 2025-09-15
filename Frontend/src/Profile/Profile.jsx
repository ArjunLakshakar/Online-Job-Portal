import React, { useEffect, useState } from 'react'
import { Avatar, Overlay, FileInput, Divider } from '@mantine/core'
import { IconEdit } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, updateProfile } from '../Services/ProfileService'
import { changeProfile, setProfile } from '../Slices/ProfileSlice'
import { useHover } from '@mantine/hooks'
import { successNotification } from '../Services/NotificationService'
import Info from './Info'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Certification from './Certification'

const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const { hovered, ref } = useHover();
    // const matches = useMediaQuery('(max-width: 475px)');


    // ✅ Function to convert image to Base64
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // ✅ Handle file selection & update profile picture
    const handleFileChange = async (image) => {
        if (!image) return;
    
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            const base64String = reader.result.split(',')[1]; // Remove prefix
            let updatedProfile = { ...profile, picture: base64String };
            console.log(updateProfile);
            
            dispatch(changeProfile(updatedProfile));
            updateProfile(updatedProfile)
                .then(response => successNotification("Success", "Profile picture updated successfully"))
                .catch(error => console.log("Error updating profile picture:", error));
        };
    };
    

    return (
        <div className='w-4/5 mx-auto  lg-mx:w-full'>
            <div className=''>
            <div className='relative px-5 '>
                <img className='rounded-t-2xl h-48 w-[125%]  xs-mx:!h-26' src="banner.png" alt="Banner" />
                <div className='absolute -bottom-1/3 left-8 flex items-center justify-center  md-mx:-bottom-10  sm-mx:-bottom-6.5'  ref={ref}>
                    <Avatar
                        className='!w-48 !h-48 border-mine-shaft-950 border-spacing-8 rounded-full  md-mx:!w-40  md-mx:!h-40   '  // sm-mx:!w-36  sm-mx:!h-36   xs-mx:!w-32  xs-mx:!h-32
                        src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : 'avatar-9.png'}
                    />

                    {hovered && <Overlay className='!rounded-full ' color='#000' backgroundOpacity={0.75} />}
                    {hovered && <IconEdit className='absolute z-[300] !w-16 !h-16' />}
                    {hovered && (
                        <FileInput
                            onChange={handleFileChange}
                            className='absolute w-full !h-full z-[301] [&_*]:!h-full [&_*]:!rounded-full '
                            variant='transparent'
                            accept='image/png,image/jpeg'
                        />
                    )}
                </div>
            </div>
            

            <div className='px-4 py-2 mt-16'>
                <Info />
            </div>

            <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
            <About />
            <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
            <Skills />
            <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
            <Experience />
            <Divider color='mineShaft.5' mx="xs" my="xl" size="sm" />
            <Certification />
        </div>
        </div>
    );
};

export default Profile;
