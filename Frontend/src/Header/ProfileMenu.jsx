import { Menu, Avatar, Switch } from '@mantine/core'; 
import {
  IconUserCircle,
  IconMessageCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../Slices/UserSlice';
import { navigateToLogin } from '../Services/AuthService';

const ProfileMenu = () => {
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mode , setMode] = useState("false")

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ Remove token
    localStorage.removeItem("user");  // ✅ Remove user data if stored separately
    sessionStorage.clear();  // ✅ Clears session storage
    dispatch(removeUser());  // ✅ Reset Redux state
    navigate("/login"); // ✅ Redirect to login page
    window.location.reload(); // ✅ Force a fresh reload to clear all cached states
  };
  

  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      {user ? (   // ✅ Ensures the menu does not render if no user is logged in
        <>
          <Menu.Target>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="xs-mx:hidden">{user.name}</div>
              <Avatar
                src={user.picture ? `data:image/jpeg;base64,${user.picture}` : 'avatar-9.png'}
                alt="User Avatar"
              />
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Link to="/profile">
              <Menu.Item leftSection={<IconUserCircle size={14} />}>Profile</Menu.Item>
            </Link>

            <Menu.Item leftSection={<IconMessageCircle size={14} />}>Messages</Menu.Item>
            <Menu.Item leftSection={<IconFileText size={14} />}>Resume</Menu.Item>

            {/* <Menu.Item
              leftSection={<IconMoon size={14} />}
              rightSection={
                <Switch
                  onClick={()=>setMode(!mode)}
                  checked={checked}
                  onChange={(event) => setChecked(event.currentTarget.checked)}
                  size="md"
                  color="dark.4"
                  onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
                  offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
                />
              }
            >
              {mode ? "Light Mode" : "Dark Mode"}
            </Menu.Item> */}

            <Menu.Divider />

            <Menu.Item onClick={handleLogout} color="red" leftSection={<IconLogout2 size={14} />}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </>
      ) : (
        <Link to="/login" className="text-white px-3 py-2 rounded-md text-sm font-medium">
          Login
        </Link>
      )}
    </Menu>
  );
};

export default ProfileMenu;
