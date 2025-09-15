package com.jobportal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Certification implements Serializable {
    private String name;
    private String issuer;
    private String issueDate;
    private String certificateId;
}
