package com.jobportal.api;

import com.jobportal.dto.ResponseDTO;
import com.jobportal.entity.Notification;
import com.jobportal.exception.JPException;
import com.jobportal.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/notification")
public class NotificationAPI {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/get/{userId}")
    public ResponseEntity<List<Notification>> getNotifications(@PathVariable Long userId){
        return new ResponseEntity<>(notificationService.getUnreadNotifications(userId), HttpStatus.OK);
    }

    @PutMapping("/read/{id}")
    public ResponseEntity<ResponseDTO> readNotification (@PathVariable Long id) throws JPException {
        notificationService. readNotifications(id);
        return new ResponseEntity<>(new ResponseDTO("Success Notification"),HttpStatus.OK);
    }
}
