import { Button, Modal, PasswordInput, PinInput, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react';
import React, { use, useState } from 'react'
import { changePass, sendOtp, verifyOtp } from '../Services/UserService';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { signupValidation } from '../Services/FormValidation';
import { useInterval } from '@mantine/hooks';

const ResetPassword = (props) => {
    const [email,setEmail]= useState("");
    const [otpSent,setOtpSent] = useState(false);
    const [otpSending,setOtpSending] = useState(false);
    const [verified, setVerified] = useState(false);
    const [password,setPassword]= useState("");
    const [passErr,setPassErr] = useState(""); 
    const [resendLoader, setResendLoader] = useState(false);
    const [seconds, setSeconds] = useState(60);

    const interval = useInterval(() => {
      if(seconds==0){
        setResendLoader(false);
        setSeconds(60);
        interval.stop();
      }else setSeconds((s) => s -1)
    }, 1000);

    const handleSendOtp =()=>{
      setOtpSending(true);
        sendOtp(email).then((res)=>{
        successNotification("OTP sent successfully ", "Enter OTP to reset.")
        console.log(res);
        setOtpSent(true);
        setOtpSending(false);
        setResendLoader(true);
        interval.start();
        }).catch((err)=>{
          errorNotification('OTP Sending Failed',err.response.data.errorMessage)
          setOtpSending(false)
          console.log(err);
        })
    }

    const resendOtp =()=>{
      if(resendLoader)return;
      handleSendOtp();
    }
    const changeEmail =()=>{
      setOtpSent(false);
      setResendLoader(false);
      setSeconds(60);
      setVerified(false);
      interval.stop();
    }
    const handleResetPassword=()=>{
      changePass(email,password).then((res)=>{
        successNotification("Password Changed", "Login with new password");
      }).catch((err)=>{
        console.log(err);
        successNotification("Password Reset Falied",err.response.data.errorMessage)
      })
    }
    const handleVerifyOtp =(otp:string)=>{
      verifyOtp(email,otp).then((res)=>{
        console.log(res);
        successNotification("OTP Verified","Enter new Password.")
        setVerified(true);
      }).catch((err)=>{
        errorNotification("OTP Verfification Failed",err.response.data.errorMessage);
        console.log(err);
      })
      console.log(otp);
    }
  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      <div className='flex flex-col gap-6 '>
      <TextInput name='email' value={email} size='md' onChange={(e)=>setEmail(e.target.value)} withAsterisk leftSection={<IconAt size={16} />} 
 rightSection={<Button loading={otpSending && !otpSent} onClick={handleSendOtp} size='xs' className='mr-1' disabled={email==="" || otpSent} autoContrast variant='filled'>SendOtp</Button>} rightSectionWidth="xl" label="Email" placeholder="Your email"/>
        { otpSent && <PinInput onComplete={handleVerifyOtp} className='mx-auto' size='md' gap="lg" length={6} type="number" />}
        {
          otpSent&& !verified &&
          <div className='flex gap-2'>
            <Button loading={otpSending} onClick={resendOtp} autoContrast variant='light' fullWidth  color='brightSun.4' >{resendLoader?seconds:"Resend"}</Button>
            <Button onClick={changeEmail} autoContrast variant='filled' fullWidth >Change Email</Button>
          </div>
        }
        {
          verified && 
          <PasswordInput name='password' value={password} error={passErr} onChange={(e) => {setPassword(e.target.value); setPassErr(signupValidation("password",e.target.value))}} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
          
        }
        {
          verified && 
          <Button onClick={handleResetPassword} autoContrast variant='filled' fullWidth >Change Password</Button>
        }
     
      </div>

    </Modal>
  )
}

export default ResetPassword
