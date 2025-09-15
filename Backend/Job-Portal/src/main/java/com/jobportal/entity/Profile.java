//package com.jobportal.entity;
//
//import com.jobportal.dto.ProfileDTO;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class Profile {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String email;
//    private String jobTitle;
//    private String company;
//    private String location;
//    private String about;
//
//    @ElementCollection
//    private List<String> skills;
//
//    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//    @JoinColumn(name = "profile_id")  // Ensures foreign key reference in Experience table
//    private List<Experience> experiences;
//
//    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//    @JoinColumn(name = "profile_id")  // Ensures foreign key reference in Certification table
//    private List<Certification> certifications;
//
//    @OneToOne(mappedBy = "profile")
//    private User user;
//
//    public Profile(Long id, String email, String jobTitle, String company, String location, String about, List<String> skills, List<Experience> experienceEntities, List<Certification> certificationEntities) {
//    }
//
//
//    public ProfileDTO toDTO() {
//        return new ProfileDTO(
//                id,
//                email,
//                jobTitle,
//                company,
//                location,
//                about,
//                skills,
//                experiences != null ? experiences.stream().map(Experience::toDTO).collect(Collectors.toList()) : null,
//                certifications != null ? certifications.stream().map(Certification::toDTO).collect(Collectors.toList()) : null
//        );
//    }
//}
