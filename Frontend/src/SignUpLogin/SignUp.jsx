import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, TextInput } from '@mantine/core';
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../Services/UserService';
import { signupValidation } from '../Services/FormValidation';
import { notifications } from '@mantine/notifications';
import { errorNotification } from '../Services/NotificationService';


const form ={
  name:'',
  email:'',
  password:'',
  confirmPassword:'',
  accountType:'APPLICANT'
}

const SignUp = () => {
  const [data, setData] = useState(form);
  const [formError, setFormError] = useState({ ...form });
  const [value, setValue] = useState('react');
  const [loading ,  setLoading] =useState(false);
  const navigate= useNavigate();

  const handleSubmit = () => {
    let valid = true;
    const newFormError = {};
    for (let key in data) {
      if (key === 'accountType') continue;
      if (key !== 'confirmPassword') {
        newFormError[key] = signupValidation(key, data[key]);
      } else if (data[key] !== data['password']) {
        newFormError[key] = 'Passwords do not match.';
      }
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if (valid) {
      setLoading(true);
      registerUser(data)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: 'Registered Successfully',
            message: 'Redirecting to Login page..',
            withCloseButton: true,
            icon:<IconCheck style={{width:"90%",height:"90%"}}/>,
            color:"teal", withBorder:true,
            className:"!border-green-500"
          })
          setTimeout(()=>{
            setLoading(false)
            navigate("/login");
          },4000)
        })
        .catch((err) => {
          console.log("Error:", err);
          setLoading(false);
      
          // Ensure error response exists
          let errorMessage = "User already exists with the given email.";
          if (err.response && err.response.data && err.response.data.errorMessage) {
              errorMessage = err.response.data.errorMessage;
          } else if (typeof err === "string") {
              errorMessage = err;
          }
      
          errorNotification("Registration Failed", errorMessage);
      }); 
    }
  };
  
  const handleChange=(event:any)=>{
    if(typeof(event)=="string"){
      setData({...data, accountType:event});
      return;
    }
    let name = event.target.name
    let value = event.target.value
    setData({...data,[name]:value})
    setFormError({...formError,[name]:signupValidation(name,value)})
    if(name==="password" && data.confirmPassword !== ""){
      let err="";
      if(data.confirmPassword!== value) err= "Password do not match"
      setFormError({...formError,[name]:signupValidation(name,value),confirmPassword:err})
    }
    if (name === "confirmPassword" ) {
      if (value !== data.password) {
        setFormError({ ...formError, [name]: "Passwords do not match" });
      } else setFormError({...formError,confirmPassword: ""});
    }
  }

  return (
    <>
    <LoadingOverlay className='translate-x-1/2' visible={loading}  loaderProps={{ color: "brightSun.4" , children: 'Loading...' }} />
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3  bs-mx:px-10  sm-mx:px-5  sm-mx:w-full  sm-xs:py-20'>
      <div className='font-semibold text-2xl'>Create Account</div>
      <TextInput name="name" value={data.name} error={formError.name} onChange={handleChange} withAsterisk label="Full Name" placeholder="Your Name"/>
      <TextInput name="email" value={data.email} error={formError.email} onChange={handleChange} withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder="Your email"/>

      <PasswordInput name="password" error={formError.password} value={data.password} onChange={handleChange}  leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
      <PasswordInput name='confirmPassword' error={formError.confirmPassword} value={data.confirmPassword} onChange={handleChange} leftSection={<IconLock size={18} stroke={1.5} />} label="Confirm Password" placeholder="Confirm Password" />

      <Radio.Group value={data.accountType} onChange={handleChange} label="You are?" withAsterisk>
        <div className='flex gap-6  xs-mx:gap-3'>
          <Group mt="xs"> 
          <Radio className=' has-[:checked]:border-bright-sun-400 has-[:checked]:bg-bright-sun-400/5  py-4 px-6 border border-mine-shaft-600 rounded-lg  sm-mx:px-4  sm-mx:py-2' autoContrast value="APPLICANT" label="Applicant" />
          <Radio className=' has-[:checked]:border-bright-sun-400 has-[:checked]:bg-bright-sun-400/5  py-4 px-6 border border-mine-shaft-600 rounded-lg  sm-mx:px-4  sm-mx:py-2' autoContrast value="EMPLOYER" label="Employer" />
          </Group>
        </div>
    </Radio.Group>
      
      <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
      <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>
      <div className='text-center  sm-mx:text-sm  xs-mx:text-xs'>Have an account ? <span className='text-bright-sun-400 hover:underline cursor-pointer  sm-mx:text-sm  xs-mx:text-xs' onClick={()=>{navigate("/login");setFormError(form);setData(form)}}>Login </span></div>
      
    </div>
  </>
  )
}

export default SignUp
