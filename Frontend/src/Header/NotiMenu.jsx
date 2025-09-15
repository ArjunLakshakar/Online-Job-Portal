import { Menu, Indicator, CheckIcon, Notification, Stack } from '@mantine/core';
import {IconBell,} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getNotifications, readNotifications } from '../Services/NotiService';


const NotiMenu=()=> {
    const [opened, setOpened] = useState(false);
    const profile = useSelector((state)=>state.profile);
    const [notification, setNotification] = useState([]);
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);

    useEffect(() => {
      if (!user || !user.profileId) {
          console.log("User not found, skipping API call.");
          return;
      }
      
      getNotifications(user.id)  // <-- API call triggered when user changes
          .then((res) => setNotification(res))
          .catch((err) => console.error(err));
    }, [user]);  // <-- DEPENDENCY ON `user`
    
  

    const unread=(index)=>{
        let notis = [...notification];
        notis = notis.filter((noti,i)=>i!=index);
        setNotification(notis);
        readNotifications(notification[index].id).then((res)=>console.log(res))
        .catch((err)=>console.log(err));
    }

  return (
    <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
      <Menu.Target>
      <div className='bg-mine-shaft-700 p-1.5 rounded-full gap-3 cursor-pointer'>
            <Indicator disabled={notification.length<=0} color="brightSun.8" offset={6} size={9} withBorder processing>
              <IconBell className='h-6' stroke={1.5} />
            </Indicator>
          </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>

      <div className='flex flex-col gap-1'>

        {
            notification.map((n,index)=> <Notification key={index} onClose={()=>unread(index)} 
            onClick={()=>{navigate(n.route); unread(index); setOpened(false)}} className='hover:bg-mine-shaft-900 cursor-pointer' icon={CheckIcon} onclick={()=>unread(index)}  color="teal" title={n.action} mt="md">
            {n.message}
          </Notification>)
        }

        {
            notification.length==0&& <div className='text-center text-mine-shaft-300'>No Notification</div>
        }

     </div>
        {/* <Menu.Divider /> */}
        
      </Menu.Dropdown>
    </Menu>
  );
}

export default NotiMenu

          


