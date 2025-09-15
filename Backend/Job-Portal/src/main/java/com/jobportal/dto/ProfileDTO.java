package com.jobportal.dto;

import com.jobportal.entity.Profiles;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Base64;
import java.util.List;

@Data
@NoArgsConstructor
public class ProfileDTO {
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String picture; // Base64 String
    private Long totalExp;
    private String about;
    private List<String> skills;
    private List<Experience> experiences;
    private List<Certification> certifications;
    private List<Long> savedJobs;

    public ProfileDTO(Long id,String name, String email, String jobTitle, String company, String location, String about, String picture,Long totalExp, List<String> skills, List<Experience> experiences, List<Certification> certifications,List<Long> savedJobs) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.about = about;
        this.picture = picture;
        this.totalExp = totalExp;
        this.skills = skills;
        this.experiences = experiences;
        this.certifications = certifications;
        this.savedJobs = savedJobs;
    }

    public Profiles toEntity() {
        return new Profiles(
                this.id,
                this.name,
                this.email,
                this.jobTitle,
                this.company,
                this.location,
                this.about,
                (this.picture != null) ? Base64.getDecoder().decode(this.picture) : null, // Corrected: Decode Base64 to byte[]
                this.totalExp,
                this.skills,
                this.experiences,
                this.certifications,
                this.savedJobs
        );
    }
}
