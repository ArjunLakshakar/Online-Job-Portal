package com.jobportal.api;

import com.jobportal.dto.ProfileDTO;
import com.jobportal.dto.ResponseDTO;
//import com.jobportal.entity.Profile;
import com.jobportal.entity.Profiles;
import com.jobportal.exception.JPException;
import com.jobportal.service.ProfileService;
import jakarta.mail.MessagingException;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profiles")
@CrossOrigin
@Validated
public class PofileAPI {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/get/{id}")
    public ResponseEntity<ProfileDTO> getProfile(@PathVariable Long id) throws JPException, MessagingException {
        return new ResponseEntity<>(profileService.getProfile(id), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<ProfileDTO> updateProfile(@RequestBody ProfileDTO profileDTO ) throws JPException, MessagingException {
        return new ResponseEntity<>(profileService.updateProfile(profileDTO), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<ProfileDTO>> getAllProfile() throws JPException, MessagingException {
        return new ResponseEntity<>(profileService.getAllProfile(), HttpStatus.OK);
    }

}