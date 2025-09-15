package com.jobportal.entity;

import com.jobportal.dto.Certification;
import com.jobportal.dto.Experience;
import com.jobportal.dto.ProfileDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.Base64;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Profiles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    @Lob
    private byte[] picture;

    private Long totalExp;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private List<String> skills;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private List<Experience> experiences;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private List<Certification> certifications;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private List<Long> savedJobs;

    @OneToOne(mappedBy = "profile")
    private User user;

    public Profiles(Long id, String name, String email, String jobTitle, String company, String location, String about, byte[] picture,Long totalExp, List<String> skills, List<Experience> experiences, List<Certification> certifications,List<Long> savedJobs ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.about = about;
        this.picture = picture;
        this.totalExp =totalExp;
        this.skills = skills;
        this.experiences = experiences;
        this.certifications = certifications;
        this.savedJobs = savedJobs;
    }

    public ProfileDTO toDTO() {
        return new ProfileDTO(
                this.id,
                this.name,
                this.email,
                this.jobTitle,
                this.company,
                this.location,
                this.about,
                (this.picture != null) ? Base64.getEncoder().encodeToString(this.picture) : null,
                this.totalExp,
                this.skills,
                this.experiences,
                this.certifications,
                this.savedJobs
        );
    }


}
