package com.jobportal.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {

    @NotBlank(message = "Email is null or blank")
    @Email(message = "Invalid email format")
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

    @Pattern(
            regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$",
            message = "Password must contain at least one uppercase letter, one lowercase letter, one special character, one digit, and be 8-15 characters long"
    )
    @NotBlank(message = "Password is null or blank")
    private String password;
}
