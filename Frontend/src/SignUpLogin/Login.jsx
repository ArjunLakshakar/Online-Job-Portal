import { Button, LoadingOverlay, PasswordInput, TextInput } from '@mantine/core'
import { IconAt, IconCheck, IconLock } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginValidation } from '../Services/FormValidation';
import { jwtDecode } from "jwt-decode";

import { useDisclosure } from '@mantine/hooks';
import ResetPassword from './ResetPassword';
import { useDispatch } from 'react-redux';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { setUser } from '../Slices/UserSlice';
import { setJwt } from '../Slices/JwtSlice';
import { loginUser } from '../Services/AuthService';

const Login = () => {
  const dispatch = useDispatch();
  const [loading , setLoading] = useState(false);
  const form={
    email:'',
    password:''
  }
  const[data,setData] = useState(form);
  const [formError, setFormError] = useState({ ...form });
  const navigate= useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const handleChange=(event)=>{
    setFormError({...formError,[event.target.name]:""})
    setData({...data, [event.target.name]:event.target.value});
  }

  const handleSubmit=()=>{
    let valid = true ,newFormError = {};
    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if(valid===true){
      setLoading(true);
      loginUser(data).then((res)=>{
        console.log(res);
        successNotification("Login Successful", "Redirecting to home page...");

        dispatch(setJwt(res.jwt));
        const decoded = jwtDecode(res.jwt);
        dispatch(setUser({...decoded, email:decoded.sub}));
        console.log(decoded);
        
        setTimeout(()=>{   
          setLoading(false);
          navigate("/");
        },4000)
      }).catch((err) => {
        setLoading(false);
        console.error("Login Error:", err);

        // Handling cases where the backend response might be undefined
        const errorMessage = err.response?.data?.errorMessage || "Invalid credentials. Please try again.";
        errorNotification("Login Failed", errorMessage);
      });
  }
};

  return (
    <>
    <LoadingOverlay visible={loading}  loaderProps={{ color: "brightSun.4" , children: 'Loading...' }} />
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3   bs-mx:px-10  sm-mx:px-5  sm-mx:w-full'>
      <div className='font-semibold text-2xl'>Login Account</div>
      
      <TextInput name='email' value={data.email} error={formError.email} onChange={handleChange} withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder="Your email"/>

      <PasswordInput name='password' value={data.password} error={formError.password} onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />

      <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>
      <div className='mx-auto  sm-mx:text-sm  xs-mx:text-xs'>Don't have an account ? <span className='text-bright-sun-400 hover:underline cursor-pointer' onClick={()=>{navigate("/signup");setFormError(form);setData(form)}}>Signup </span></div>
      
      <div onClick={open} className='text-bright-sun-400 hover:underline cursor-pointer text-center  sm-mx:text-sm  xs-mx:text-xs'>Forget Password ?</div>
    </div>
    <ResetPassword opened={opened} close={close}/> 
    </>
  )

}

export default Login
