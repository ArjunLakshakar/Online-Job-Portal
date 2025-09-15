package com.jobportal.service;

import com.jobportal.dto.ProfileDTO;
import com.jobportal.entity.Profiles;
import com.jobportal.exception.JPException;

import java.util.List;

public interface ProfileService {

    public Long createProfile (String email,String name) throws JPException;

    public ProfileDTO getProfile (Long id) throws JPException;

    public ProfileDTO updateProfile (ProfileDTO profileDTO) throws JPException;


    public List<ProfileDTO> getAllProfile();
}
