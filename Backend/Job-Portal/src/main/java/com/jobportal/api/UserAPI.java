package com.jobportal.api;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.exception.JPException;
import com.jobportal.service.UserService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/users")
@CrossOrigin
@Validated

public class UserAPI {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws JPException {
        userDTO = userService.registerUser(userDTO)  ;
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody @Valid LoginDTO loginDTO) throws JPException {
        return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
    }

    @PostMapping("/sendOtp/{email}")
    public ResponseEntity<ResponseDTO> sendOpt( @PathVariable String email) throws JPException, MessagingException {
        userService.sendOpt(email);
        return new ResponseEntity<>(new ResponseDTO("OTP sent successfully"), HttpStatus.OK);
    }

    @PostMapping("/changePass")
    public ResponseEntity<ResponseDTO> changePassword(@RequestBody @Valid LoginDTO loginDTO) throws JPException {
        return new ResponseEntity<>(userService.changePassword(loginDTO), HttpStatus.OK);
    }

    @GetMapping("/verifyOtp/{email}/{otp}")
    public ResponseEntity<ResponseDTO> verifyOtp(
            @PathVariable @Email(message = "{user.email.invalid}") String email,
            @PathVariable @Pattern(regexp = "^[0-9]{6}$", message = "{otp.invalid}") String otp)
            throws JPException, MessagingException {

        userService.verifyOpt(email, otp); // Fixed method name to `verifyOtp`
        return ResponseEntity.ok(new ResponseDTO("OTP has been verified."));
    }


}
