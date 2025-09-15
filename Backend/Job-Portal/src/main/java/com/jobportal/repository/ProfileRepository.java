package com.jobportal.repository;

//import com.jobportal.entity.Profile;
import com.jobportal.entity.Profiles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Profiles, Long> {
}
