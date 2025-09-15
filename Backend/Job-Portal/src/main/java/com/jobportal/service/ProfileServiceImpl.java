package com.jobportal.service;

import com.jobportal.dto.ProfileDTO;
//import com.jobportal.entity.Profile;
import com.jobportal.entity.Profiles;
import com.jobportal.exception.JPException;
import com.jobportal.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private ProfileRepository profileRepository;


    public Long createProfile(String email , String name) {
        Profiles profile = new Profiles();
        profile.setName(name);
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExperiences(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());

        Profiles savedProfile = profileRepository.save(profile);  // Ensure it's saved
        return savedProfile.getId();
    }

    @Override
    public ProfileDTO getProfile(Long id) throws JPException {
        return profileRepository.findById(id)
                .orElseThrow(()-> new JPException("PROFILE_NOT_FOUND")).toDTO();
    }


//    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JPException {
        Profiles existingProfile = profileRepository.findById(profileDTO.getId())
                .orElseThrow(() -> new JPException("PROFILE_NOT_FOUND"));

        // Update other fields
        existingProfile.setJobTitle(profileDTO.getJobTitle());
        existingProfile.setCompany(profileDTO.getCompany());
        existingProfile.setLocation(profileDTO.getLocation());
        existingProfile.setAbout(profileDTO.getAbout());
        existingProfile.setSkills(profileDTO.getSkills());
        existingProfile.setExperiences(profileDTO.getExperiences());
        existingProfile.setCertifications(profileDTO.getCertifications());

        // Handle Base64 Decoding (Fixing "Illegal base64 character 3a" issue)
        String base64String = profileDTO.getPicture();
        if (base64String != null && base64String.contains(",")) {
            base64String = base64String.split(",")[1]; // Extract only Base64 data
        }
        existingProfile.setPicture(profileDTO.toEntity().getPicture());
        existingProfile.setSavedJobs(profileDTO.getSavedJobs());

        // Save and return updated profile
        Profiles updatedProfile = profileRepository.save(existingProfile);
        return updatedProfile.toDTO();
    }

    @Override
    public List<ProfileDTO> getAllProfile() {
        return profileRepository.findAll().stream().map((x)->x.toDTO()).toList();
    }


}
