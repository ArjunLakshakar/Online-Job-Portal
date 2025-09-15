package com.jobportal.entity;

import com.jobportal.dto.AccountType;
import com.jobportal.dto.UserDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is null or blank")
    private String name;

    @NotBlank(message = "Email is null or blank")
    @Email(message = "Invalid email format")
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

    @NotBlank(message = "Password is null or blank")
    private String password;

    @NotNull(message = "AccountType is null")
    @Enumerated(EnumType.STRING)
    private AccountType accountType;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id", referencedColumnName = "id", unique = true)
    private Profiles profile;

    public UserDTO toDTO() {
        return new UserDTO(this.id, this.name, this.email, this.password, this.accountType,
                this.profile != null ? this.profile.getId() : null);
    }

}
