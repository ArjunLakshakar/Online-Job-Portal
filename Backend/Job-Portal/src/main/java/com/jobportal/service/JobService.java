package com.jobportal.service;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.Application;
import com.jobportal.dto.JobDTO;
import com.jobportal.exception.JPException;

import java.util.List;

public interface JobService {

    public JobDTO postJob(JobDTO jobDTO) throws JPException;

    public List<JobDTO> getAllJobs();

    public JobDTO getJob(Long id) throws JPException;

    public void applyJob(Long id, ApplicantDTO applicantDTO) throws JPException;

    public List<JobDTO> getJobsPostedBy(Long id);

    public void changeAppStatus(Application application) throws JPException;
}
