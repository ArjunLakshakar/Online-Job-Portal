package com.jobportal.service;

import com.jobportal.dto.*;
import com.jobportal.entity.Applicant;
import com.jobportal.entity.Job;
import com.jobportal.exception.JPException;
import com.jobportal.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class JobServiceImpl implements JobService{

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private NotificationService notificationService;

    @Override
    public JobDTO postJob(JobDTO jobDTO) throws JPException {
        if (jobDTO.getId() == null || jobDTO.getId() == 0) { // Handle null ID properly
            jobDTO.setPostTime(LocalDateTime.now());
            NotificationDTO notiDto = new NotificationDTO();
            notiDto.setAction("Job Posted");
            notiDto.setMessage("Job Posted Successfully : "+ jobDTO.getJobTitle() + " at " + jobDTO.getCompany());
            notiDto.setUserId(jobDTO.getPostedBy());
            notiDto.setRoute("/posted-jobs/"+ jobDTO.getId());
            notificationService.sendNotification(notiDto);
        } else {
            Job job = jobRepository.findById(jobDTO.getId())
                    .orElseThrow(() -> new JPException("JOB_NOT_FOUND"));

            if (job.getJobStatus().equals(JobStatus.DRAFT) || job.getJobStatus().equals(JobStatus.CLOSED)) {
                jobDTO.setPostTime(LocalDateTime.now());
            }
        }

        return jobRepository.save(jobDTO.toEntity()).toDTO();
    }



    @Override
    public List<JobDTO> getAllJobs() {
        return jobRepository.findAll().stream().map((x)->x.toDTO()).toList();
    }


    @Override
    public JobDTO getJob(Long id) throws JPException {
        Job job = jobRepository.findById(id).orElseThrow(()-> new JPException("JOB_NOT_FOUND"));
        return job.toDTO();
    }


    @Override
    public void applyJob(Long id, ApplicantDTO applicantDTO) throws JPException {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new JPException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants();

        if (applicants == null) applicants = new ArrayList<>();

        // Check if applicant already applied
        boolean alreadyApplied = applicants.stream()
                .anyMatch(applicant -> applicant.getApplicantId().equals(applicantDTO.getApplicantId()));
        if (alreadyApplied) {
            throw new JPException("JOB_APPLIED_ALREADY");
        }
        // Convert DTO to Entity and add to the list
        applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);
        applicants.add(applicantDTO.toEntity());

        // ✅ Manually update the `applicants` field to trigger Hibernate update
        job.setApplicants(applicants);

        // ✅ Explicitly save the job entity to update JSON column
        jobRepository.save(job);
    }

    @Override
    public List<JobDTO> getJobsPostedBy(Long id) {
        return jobRepository.findByPostedBy(id).stream().map((x)->x.toDTO()).toList();
    }

    @Override
    public void changeAppStatus(Application application) throws JPException {
        Job job = jobRepository.findById(application.getId())
                .orElseThrow(() -> new JPException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants().stream().map((x)->{
            if(application.getApplicantId()==x.getApplicantId()){
                x.setApplicationStatus(application.getApplicationStatus());
                if(application.getApplicationStatus().equals(ApplicationStatus.INTERVIEWING)) {
                    x.setInterviewTime(application.getInterviewTime());
                    NotificationDTO notiDto = new NotificationDTO();
                    notiDto.setAction("Interview Scheduled");
                    notiDto.setMessage("Interview scheduled for job id: "+ application.getId());
                    notiDto.setUserId(application.getApplicantId());
                    notiDto.setRoute("/job-history");
                    notificationService.sendNotification(notiDto);

                }
            }
            return x;
        }).toList();
        job.setApplicants(applicants);
        jobRepository.save(job);
    }


}
