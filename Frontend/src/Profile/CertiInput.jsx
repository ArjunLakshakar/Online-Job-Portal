import { Button, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import fields from '../Data/ProfileData'
import SelectInput from './SelectInput';
import { MonthPickerInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { successNotification } from '../Services/NotificationService';
import { changeProfile } from '../Slices/ProfileSlice';


const CertiInput = (props) => {
    const select = fields;
    const profile = useSelector((state)=>state.profile);
    const dispatch = useDispatch();

    const form = useForm({
      mode:'controlled',
      validateInputOnChange:true,
      initialValues: {
        name: "",
        issuer: "",
        issueDate: new Date(),
        certificateId:''
      },
      validate: {
        name: isNotEmpty("Name is required"),
        issuer: isNotEmpty("Issuer is required"),
        issueDate: isNotEmpty("IssueDate is required"),
        certificateId: isNotEmpty("CertificateId is required"),
      },
    });

    const handleSave =()=>{
      const validation = form.validate();
      if (validation.hasErrors) return;
      let certi=[...profile.certifications];
      certi.push(form.getValues());
      certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
      let updatedProfile = {...profile,certifications:certi};
      props.setEdit(false);
      dispatch(changeProfile(updatedProfile));
      successNotification("Success", `Certificate Added Successfully`);  
    }
  return (
    <div className='flex flex-col gap-2'>
        <div className='text-lg font-semibold'>Add Certificate</div>
        <div className='flex gap-10 my-3 [&>*]:w-1/2  xs-mx:[&>*]:w-full  xs-mx:flex-wrap  md-mx:gap-5'>
        <TextInput {...form.getInputProps("name")} label="Title" withAsterisk placeholder='Enter TItle' />
        <SelectInput form={form} name='issuer'  {...select[1]}/>
        </div>
        <div className='flex gap-10 [&>*]:w-1/2  xs-mx:[&>*]:w-full  xs-mx:flex-wrap  md-mx:gap-5'> 
            <MonthPickerInput withAsterisk {...form.getInputProps("issueDate")} maxDate={new Date()} label="Issue date" placeholder="Pick date"  />
            <TextInput {...form.getInputProps("certificateId")} label="Certificate Id" withAsterisk placeholder='Enter Id' />
        </div>

        <div className='flex gap-5'>
        <Button onClick={handleSave} color='brightSun.4' variant='outline'>Save</Button>
        <Button onClick={()=>props.setEdit(false)} color='red.8' variant='light'>Cancel</Button>
        </div>
    
    </div>
  )
}

export default CertiInput
