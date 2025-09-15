package com.jobportal.dto;

//import com.jobportal.entity.Profile;
import com.jobportal.entity.Profiles;
import com.jobportal.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String password;
    private AccountType accountType;
    private Long profileId;

//    public User toEntity(Profile profile) {
//        return new User(id, name, email, password, accountType, profile);
//    }
public User toEntity() {
    User user = new User();
    user.setId(this.id);
    user.setName(this.name);
    user.setEmail(this.email);
    user.setPassword(this.password); // Password will be encoded in the service layer
    user.setAccountType(this.accountType);

    // If profileId is provided, create a Profile entity and associate it
    if (this.profileId != null) {
        Profiles profile = new Profiles();
        profile.setId(this.profileId);
        user.setProfile(profile);
    }

    return user;
}
}
