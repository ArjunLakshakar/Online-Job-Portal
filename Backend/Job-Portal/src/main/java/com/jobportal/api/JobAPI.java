package com.jobportal.api;

import com.jobportal.dto.*;
import com.jobportal.exception.JPException;
import com.jobportal.service.JobService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@CrossOrigin
@Validated
public class JobAPI {

    @Autowired
    private JobService jobService;

    @PostMapping("/post")
    public ResponseEntity<JobDTO> registerUser(@RequestBody JobDTO jobDTO) throws JPException {
        return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<JobDTO>> getAllJobs() throws JPException, MessagingException {
        return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<JobDTO> getJob(@PathVariable Long id) throws JPException, MessagingException {
        return new ResponseEntity<>(jobService.getJob(id), HttpStatus.OK);
    }

    @PostMapping("/apply/{id}")
    public ResponseEntity<ResponseDTO> applyJob(@PathVariable Long id, @RequestBody ApplicantDTO applicantDTO) throws JPException, MessagingException {
        System.out.println("Received Application: " + applicantDTO);
        jobService.applyJob(id, applicantDTO);
        return new ResponseEntity<>(new ResponseDTO("Applied Successfully"), HttpStatus.OK);
    }

    @GetMapping("/postedBy/{id}")
    public ResponseEntity<List<JobDTO>> getJobsPostedBy(@PathVariable Long id) throws JPException, MessagingException {
        return new ResponseEntity<>(jobService.getJobsPostedBy(id), HttpStatus.OK);
    }

    @PostMapping("/changeAppStatus")
    public ResponseEntity<ResponseDTO> changeAppStatus( @RequestBody Application application) throws JPException, MessagingException {
        jobService.changeAppStatus( application);
        return new ResponseEntity<>(new ResponseDTO("Application Status Change Successfully"), HttpStatus.OK);
    }


}
