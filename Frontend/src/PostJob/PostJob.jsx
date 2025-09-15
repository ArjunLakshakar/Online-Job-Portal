import React, { useEffect, useState } from 'react';
import SelectInput from './SelectInput';
import { content, fields } from '../Data/PostData';
import { Button, NumberInput, TagsInput, Textarea } from '@mantine/core';
import TextEditor from './TextEditor';
import { isNotEmpty, useForm } from "@mantine/form";
import { successNotification, errorNotification } from '../Services/NotificationService';
import { getJob, postJob } from '../Services/JobService';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

const PostJob = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const matches = useMediaQuery('(min-width:350px)');

  const form = useForm({
    mode: 'controller',
    validateInputOnChange: true,
    initialValues: {
      jobTitle: '',
      company: '',
      experience: '',
      jobType: '',
      location: '',
      packageOffered: '',
      skillsRequired: [],
      about: '',
      description: content,
    },
    validate: {
      jobTitle: isNotEmpty("Job Title is required"),
      company: isNotEmpty("Company is required"),
      experience: isNotEmpty("Experience is required"),
      jobType: isNotEmpty("Job Type is required"),
      location: isNotEmpty("Location is required"),
      packageOffered: isNotEmpty("Salary is required"),
      skillsRequired: isNotEmpty("Skills are required"),
      about: isNotEmpty("About is required"),
      description: isNotEmpty("Description is required"),
    },
  });

  useEffect(() => {
    if (id !== "0") {
    setLoading(true);
    getJob(id)
      .then((res) => {
        console.log("Fetched Job Data:", res); // Debugging

        // Ensure response matches form structure
        form.setValues(res);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
        setLoading(false);
      });
    }else{
      form.reset();
      setLoading(false);
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;

  const handlePost = () => {
    form.validate();
    if (!form.isValid()) {
      console.error("Validation Failed:", form.errors);
      return;
    }

    const jobData = {
      ...form.getValues(),
      postedBy: user.id,
      jobStatus: "ACTIVE",
    };

    // Only include 'id' if editing an existing job
    if (id !== "0") {
      jobData.id = id;
    }

    postJob(jobData)
      .then((res) => {
        successNotification("Success", "Job Posted Successfully");
        navigate(`/posted-jobs/${res.id}`);
      })
      .catch((err) => {
        console.error("Post Job Error:", err.response?.data || err.message);
        errorNotification("Error", err.response?.data?.errorMessage || "Something went wrong");
      });
  };

const handleDraft = () => {
    const jobData = {
      ...form.getValues(),
      postedBy: user.id,
      jobStatus: "DRAFT",
    };

    if (id !== "0") {
      jobData.id = id;
    }

    postJob(jobData)
      .then((res) => {
        successNotification("Success", "Job Drafted Successfully");
        navigate(`/posted-jobs/${res.id}`);
      })
      .catch((err) => {
        console.error("Draft Job Error:", err.response?.data || err.message);
        errorNotification("Error", err.response?.data?.errorMessage || "Something went wrong");
      });
    };
    
  return (
    // w-4/5 mx-auto mt-4
    <div className="px-16 py-5  bs-mx:px-10  md-mx:px-5  sm-mx:[&>*]:!w-full  sm-mx:flex-wrap">
      <div className="text-2xl font-semibold mb-5">Post a Job</div>
      <div className="flex flex-col gap-8">
        
        <div className="flex gap-10 [&>*]:w-1/2  md-mx:gap-5  sm-mx:[&>*]:!w-full  sm-mx:flex-wrap">
          <SelectInput bg="mineShaft.10" form={form} name="jobTitle" {...fields[0]} />
          <SelectInput form={form} name="company" {...fields[1]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2  md-mx:gap-5  sm-mx:[&>*]:!w-full  sm-mx:flex-wrap">
          <SelectInput form={form} name="experience" {...fields[2]} />
          <SelectInput form={form} name="jobType" {...fields[3]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2  md-mx:gap-5  sm-mx:[&>*]:!w-full  sm-mx:flex-wrap">
          <SelectInput form={form} name="location" {...fields[4]} />
          <NumberInput 
            {...form.getInputProps('packageOffered')}
            withAsterisk
            label="Salary"
            placeholder="Enter Salary"
            min={1} max={300}
            clampBehavior="strict"
            hideControls
          />
        </div>

        <TagsInput 
          {...form.getInputProps('skillsRequired')}
          withAsterisk 
          label="Skills"
          placeholder="Enter Skills"
          splitChars={[',', ' ', '|']} 
          clearable 
          acceptValueOnBlur
        />

        <Textarea
          {...form.getInputProps("about")}
          withAsterisk
          label="About Job"
          autosize
          minRows={3}
          placeholder="Enter About Job.."
        />

        <div className='[&_button[data-active="true"]]:!text-bright-sun-400 [&_button[data-active="true"]]:!bg-bright-sun-400/20'>
          <div className="text-sm font-medium">
            Job Description <span className="text-red-500">*</span>
          </div>
          <TextEditor form={form} />
        </div>

        <div className="flex gap-4">
          <Button color="brightSun.4" variant="light" onClick={handlePost}>Publish Job</Button>
          <Button color="brightSun.4" variant="outline" onClick={handleDraft}>Save as Draft</Button>
        </div>

      </div>
    </div>
  );
};

export default PostJob;


 // const handlePost = () => {
  //   form.validate();
  //   if (!form.isValid()) {
  //     console.error("Validation Failed:", form.errors);
  //     return;
  //   }

  //   const jobData = {
  //     ...form.getValues(),
  //     id,
  //     postedBy: user.id,
  //     jobStatus: "ACTIVE",
  //   };

  //   postJob(jobData)
  //     .then((res) => {
  //       successNotification("Success", "Job Posted Successfully");
  //       navigate(`/posted-jobs/${res.id}`);
  //     })
  //     .catch((err) => {
  //       console.error("Post Job Error:", err.response?.data || err.message);
  //       errorNotification("Error", err.response?.data?.errorMessage || "Something went wrong");
  //     });
  // };

  // const handleDraft = () => {
  //   const jobData = {
  //     ...form.getValues(),
  //     postedBy: user.id,
  //     jobStatus: "DRAFT",
  //   };

  //   postJob(jobData)
  //     .then((res) => {
  //       successNotification("Success", "Job Drafted Successfully");
  //       navigate(`/posted-jobs/${res.id}`);
  //     })
  //     .catch((err) => {
  //       console.error("Draft Job Error:", err.response?.data || err.message);
  //       errorNotification("Error", err.response?.data?.errorMessage || "Something went wrong");
  //     });
  // };