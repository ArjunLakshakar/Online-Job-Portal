package com.jobportal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Experience implements Serializable {
    private String title;
    private String company;
    private String location;
    private String startDate;
    private String endDate;
    private String description;
}
