import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form';
import React, { useState } from 'react'
import { getBase64 } from '../Services/Utilities';
import { applyJob } from '../Services/JobService';
import { useNavigate, useParams } from 'react-router-dom';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { useSelector } from 'react-redux';

const ApplicationForm = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [preview,setPreview ] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const user = useSelector((state:any)=> state.user);
    
        
        const handleSubmit = async() => {
           setSubmit(true);
           let resume = await getBase64(form.getValues().resume);
           let applicant={...form.getValues(),applicantId:user.id,resume:resume.split(',')[1]};
           

           console.log(applicant)
           applyJob(id, applicant)
            .then((res) => {
                console.log("API Response:", res); // Debugging
                setSubmit(false);
                successNotification("Success", res.data.message); // Ensure `res.data` exists
                navigate('/job-history')
            })
            .catch((err) => {
                setSubmit(false);
                // console.error("API Error:", err);
                errorNotification(
                "Error",
                err.response?.data?.errorMessage || "Job Applied already"
                );
            });

        }
        const handlePreview = () => {
            form.validate();
            window.scrollTo({top:0,behavior: 'smooth'})
            if(!form.isValid())return;
            setPreview(!preview)
           
        }
        const form = useForm({
            mode:'controlled',
            validateInputOnChange:true,
            initialValues: {
            name:'',
            email:'',
            phone:'',
            website:'',
            resume:null,
            coverLetter:''
            },
            validate: {
            name: isNotEmpty("Name is required"),
            email: isNotEmpty("Email is required"),
            phone: isNotEmpty("Phone No. is required"),
            website: isNotEmpty("WebSite is required"),
            // resume: isNotEmpty("Resume is required"),
            // coverLetter: isNotEmpty("CoverLetter is required"),
            },
        });
        const handleClick=()=>{

        }
  return (
    <div>
        <LoadingOverlay className='!fixed'
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
      <div className='text-xl mb-5 font-semibold'>Submit your Application</div>
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-10 [&>*]:w-1/2  sm-mx:[&>*]:!w-full  sm-mx:flex-wrap  md-mx:gap-5'>
                <TextInput {...form.getInputProps("name")} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} readOnly={preview} variant={preview?"unstyled":"default"} label="Full Name" withAsterisk placeholder="Enter Name" />
                <TextInput {...form.getInputProps("email")} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} readOnly={preview} variant={preview?"unstyled":"default"} label="Email" withAsterisk placeholder="Enter email" />
                </div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                <NumberInput {...form.getInputProps("phone")} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} readOnly={preview} variant={preview?"unstyled":"default"} label="PhoneNumber" withAsterisk hideControls min={0} max={9999999999} clampBehavior='strict' placeholder="Enter phone Number"/>
                <TextInput {...form.getInputProps("website")} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} readOnly={preview} variant={preview?"unstyled":"default"} label="Personal Website" withAsterisk placeholder="Enter url" />
                </div>
                <FileInput {...form.getInputProps("resume")} accept='application/pdf' className={`${preview?"text-mine-shaft-300 font-semibold":""}`} readOnly={preview} variant={preview?"unstyled":"default"} withAsterisk leftSection={<FontAwesomeIcon icon={faPaperclip}/>} label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents="none"/>
                <Textarea {...form.getInputProps("coverLetter")} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} readOnly={preview} variant={preview?"unstyled":"default"} withAsterisk placeholder="Type something about yourself..." label="Cover Letter" autosize minRows={4}/>
                {
                    !preview && <Button onClick={handlePreview} variant="light" color="brightSun.4"> Preview </Button>
                }
                {
                    preview && <div className='flex gap-10 [&>*]:w-1/2'>
                        <Button fullWidth onClick={handlePreview} variant="outline" color="brightSun.4"> Edit </Button>
                        <Button fullWidth onClick={handleSubmit} variant="light" color="brightSun.4"> Sumbit </Button>
                    </div>
                }
            </div>
    </div>
  )
}

export default ApplicationForm
