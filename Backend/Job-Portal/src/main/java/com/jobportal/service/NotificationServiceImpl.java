package com.jobportal.service;

import com.jobportal.dto.NotificationDTO;
import com.jobportal.dto.NotificationStatus;
import com.jobportal.entity.Notification;
import com.jobportal.exception.JPException;
import com.jobportal.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService{

    @Autowired
    NotificationRepository notificationRepository;

    @Override
    public void sendNotification(NotificationDTO notificationDTO) {
        notificationDTO.setStatus(NotificationStatus.UNREAD);
        notificationDTO.setTimestamp(LocalDateTime.now());
        notificationRepository.save(notificationDTO.toEntity());
    }

    @Override
    public List<Notification> getUnreadNotifications(Long userId) {
        return notificationRepository.findByUserIdAndStatus(userId,NotificationStatus.UNREAD);
    }

    @Override
    public void readNotifications(Long id) throws JPException {
        Notification noti = notificationRepository.findById(id)
                .orElseThrow(() -> new JPException("NO NOTIFICATION FOUND"));
        noti.setStatus(NotificationStatus.READ);
        notificationRepository.save(noti);
    }
}
