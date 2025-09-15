package com.jobportal.repository;

import com.jobportal.entity.OTP;
import com.jobportal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface OTPRepository extends JpaRepository<OTP,String> {
//    Optional<User> findByEmail(String email);
    List<OTP>findByCreationTimeBefore(LocalDateTime expiry);
}
