package com.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobportal.entity.Sequence;
import org.springframework.stereotype.Repository;

@Repository
public interface SequenceRepository extends JpaRepository<Sequence, String> {
}
