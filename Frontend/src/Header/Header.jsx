import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { faAnchor, faAnchorCircleCheck, faAnchorCircleExclamation, faAnchorCircleXmark, faAnchorLock, faGear } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Burger, Button, Drawer } from '@mantine/core';
import React, { useEffect } from 'react';
import NavLinks from './NavLinks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../Services/ProfileService';
import { setProfile } from '../Slices/ProfileSlice';
import NotiMenu from './NotiMenu';
import { setUser } from '../Slices/UserSlice';
import { setupResponseInterceptor } from '../Interceptor/AxiosInterceptor';
import { useDisclosure } from '@mantine/hooks';
import { IconAnchor, IconAnchorOff, IconAngle, IconX } from '@tabler/icons-react';

const Header = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state)=>state.jwt);
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  // const location = useLocation();
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Job", url: "post-job/0" },
    { name: "Posted Job", url: "posted-jobs" },
    { name: "Job History", url: "job-history"},
    { name: "SignUp", url: "signup"}
];

  useEffect(() => {
    setupResponseInterceptor(navigate,dispatch);
  }, [navigate,dispatch]);
  

  useEffect(() => {
    if (token!="") {
      if(localStorage.getItem("token")!=""){
        try {
          const decoded = jwtDecode(token);
          dispatch(setUser({ ...decoded, email: decoded.sub }));
        } catch (error) {
          console.error("Invalid or expired token:", error);
          localStorage.removeItem("token"); // Remove invalid token
        }
      }
    }

    if (user && user?.id) { 
      getProfile(user?.profileId)
        .then((data) => {
          dispatch(setProfile(data));
          console.log("Profile fetched from API:", data);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
        });
    }
  }, [token, navigate]);

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  return (
    <div className="w-full bg-mine-shaft-900 text-white h-20 flex justify-between px-6 items-center font-['poppins']">
      <div onClick={()=>navigate("/")} className='items-center gap-2 flex cursor-pointer '> 
        {/* <FontAwesomeIcon className='h-8' icon={faAnchorCircleExclamation} /> */}
        <IconAnchor  className='h-8 w-8 text-white '/>
        <div className='xs-mx:hidden font-semibold text-2xl text-bright-sun-400'>JobNexus</div>
      </div>

      <NavLinks />

      <div className='flex gap-4 items-center'> 
        {user ? <ProfileMenu  /> : 
          <Link to="/login"> 
            <Button variant='subtle' color='brightSun.4'>Login</Button>
          </Link>
        }
        
        {user ? <NotiMenu /> : null}
       
      <Burger opened={opened} onClick={open} className='bs:hidden' aria-label="Toggle navigation" />
      <Drawer opened={opened} onClose={close} position='right' size='xs'
        overlayProps={{backgroundOpacity:0.5, blur:4}}
        closeButtonProps={{
        icon: <IconX size={30}  />,}}
        title="">
        <div className='flex flex-col gap-6 items-center' >
        {
        links.map((link, index) => (
          <div
            key={index}
            className={` flex h-full items-center`}>
              <Link className='hover:text-bright-sun-400 text-xl ' to={link.url}>{link.name}</Link>
            </div>))
        }
        </div>
      
      </Drawer>
      </div>
    </div>
  );
};

export default Header;


// import { faSlack } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from '@mantine/core';
// import React, { useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { jwtDecode } from "jwt-decode";
// import NavLinks from './NavLinks';
// import ProfileMenu from './ProfileMenu';
// import NotiMenu from './NotiMenu';
// import { getProfile } from '../Services/ProfileService';
// import { setProfile } from '../Slices/ProfileSlice';
// import { setUser } from '../Slices/UserSlice';

// const Header = () => {
//   const user = useSelector((state) => state.user);
//   const token = useSelector((state) => state.jwt);
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         dispatch(setUser({ ...decoded, email: decoded.sub }));
//       } catch (error) {
//         console.error("Invalid or expired token:", error);
//         localStorage.removeItem("token"); // Remove invalid token
//       }
//     }

//     if (user?.id) {
//       getProfile(user.id)
//         .then((data) => dispatch(setProfile(data)))
//         .catch((error) => console.error("Error fetching profile:", error));
//     }
//   }, [token, user?.id, dispatch]);

//   // Hide header on login/signup pages
//   if (["/signup", "/login"].includes(location.pathname)) {
//     return null;
//   }

//   return (
//     <div className="w-full bg-mine-shaft-900 text-white h-20 flex justify-between px-6 items-center font-['poppins']">
//       <div className="items-center gap-2 flex">
//         <FontAwesomeIcon className="h-8" icon={faSlack} />
//         <div className="font-semibold text-2xl text-bright-sun-400">MyJob</div>
//       </div>

//       <NavLinks />

//       <div className="flex gap-4 items-center">
//         {user ? (
//           <>
//             <ProfileMenu />
//             <NotiMenu />
//           </>
//         ) : (
//           <Link to="/login">
//             <Button variant="subtle" color="brightSun.4">Login</Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
