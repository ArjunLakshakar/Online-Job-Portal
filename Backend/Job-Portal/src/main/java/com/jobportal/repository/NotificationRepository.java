package com.jobportal.repository;

import com.jobportal.dto.NotificationStatus;
import com.jobportal.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification,Long> {

    public List<Notification> findByUserIdAndStatus(Long userId, NotificationStatus status);
}
