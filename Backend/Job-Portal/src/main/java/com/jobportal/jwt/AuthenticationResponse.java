package com.jobportal.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
//@AllArgsConstructor

public class AuthenticationResponse {
    public AuthenticationResponse(String jwt){
        this.jwt = jwt;
    }
    private final String jwt;
}
