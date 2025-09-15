package com.jobportal.service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.exception.JPException;
import jakarta.mail.MessagingException;

public interface UserService {

    public UserDTO registerUser(UserDTO userDTO) throws JPException;

    public UserDTO getUserByEmail(String email) throws JPException;

    public UserDTO loginUser(LoginDTO loginDTO) throws JPException;

    boolean sendOpt(String email) throws JPException, MessagingException;

    public boolean verifyOpt(String email, String otp) throws JPException;

    public ResponseDTO changePassword(LoginDTO loginDTO) throws JPException;
}
