package com.jobportal.entity;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.JobDTO;
import com.jobportal.dto.JobStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String jobTitle;
    private String company;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private List<Applicant> applicants;

    private String about ;
    private String experience ;
    private String jobType ;
    private String location;
    private Long packageOffered ;
    private LocalDateTime postTime;

    @Lob  // Ensures large text storage
    @Column(columnDefinition = "TEXT")
    private String description;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private List<String> skillsRequired ;

//    @Enumerated(EnumType.STRING)
    private JobStatus jobStatus ;

    private Long postedBy;

    public JobDTO toDTO(){
        return new JobDTO(this.id, this.jobTitle, this.company,
                this.applicants!=null?this.applicants.stream().map((x)->x.toDTO()).toList():null ,
                this.about, this.experience, this.jobType, this.location, this.packageOffered, this.postTime,this.description,this.skillsRequired,this.jobStatus,this.postedBy);
    }


}
