package com.jobportal.api;

import com.jobportal.jwt.AuthenticationRequest;
import com.jobportal.jwt.AuthenticationResponse;
import com.jobportal.jwt.JwtHelper;
import com.jobportal.jwt.MyUserDeatailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthAPI {

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private MyUserDeatailService userDeatailService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        final UserDetails userDetails = userDeatailService.loadUserByUsername(request.getEmail());
        final String jwt = jwtHelper.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));

    }
}

//    @PostMapping("/login")
//    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest request) {
//        try {
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
//            );
//
//            final UserDetails userDetails = userDetailService.loadUserByUsername(request.getEmail());
//            final String jwt = jwtHelper.generateToken(userDetails.getUsername());
//
//            return ResponseEntity.ok(new AuthenticationResponse(jwt));
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//        }
//    }


