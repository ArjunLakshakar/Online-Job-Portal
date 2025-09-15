package com.jobportal.jwt;

import com.jobportal.dto.UserDTO;
import com.jobportal.exception.JPException;
import com.jobportal.service.UserService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDeatailService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @SneakyThrows
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try{
            UserDTO dto = userService.getUserByEmail(email);
            return new CustomUserDetails(dto.getId(), email, dto.getName(),  dto.getPassword(), dto.getProfileId(), dto.getAccountType(),new ArrayList<>());
        }catch (JPException e){
            e.printStackTrace();
        }
        return null;

    }
}
