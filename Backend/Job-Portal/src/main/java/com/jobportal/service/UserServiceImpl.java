package com.jobportal.service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.NotificationDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.entity.OTP;
//import com.jobportal.entity.Profile;
import com.jobportal.entity.Profiles;
import com.jobportal.entity.User;
import com.jobportal.exception.JPException;
import com.jobportal.repository.NotificationRepository;
import com.jobportal.repository.OTPRepository;
import com.jobportal.repository.ProfileRepository;
import com.jobportal.repository.UserRepository;
import com.jobportal.utility.Data;
import com.jobportal.utility.Utilities;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private ProfileService profileService;

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    NotificationService notificationService ;

    @Override
    @Transactional
    public UserDTO registerUser(UserDTO userDTO) throws JPException {
        Optional<User> opt = userRepository.findByEmail(userDTO.getEmail());
        if (opt.isPresent()) {
            throw new JPException("USER_ALREADY_EXISTS");
        }
        // Save profile first
        Long profileId = profileService.createProfile(userDTO.getEmail(),userDTO.getName());
        Profiles profile = profileRepository.findById(profileId).orElseThrow(() -> new JPException("Profile not found"));

        // Convert DTO to Entity and save user
        User user = userDTO.toEntity();
        user.setProfile(profile); // Ensure Profile is attached

        userRepository.save(user);  // Save User
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        return user.toDTO();
    }

    @Override
    public UserDTO getUserByEmail(String email) throws JPException {
        return userRepository.findByEmail(email)
                .orElseThrow(()->new JPException("USER_NOT_FOUND")).toDTO();
    }


    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws JPException {
        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new JPException("USER_NOT_FOUND"));

        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new JPException("INVALID CREDENTIALS");
        }

//        if (!loginDTO.getPassword().equals(user.getPassword())) {
//            throw new JPException("INVALID_CREDENTIALS");
//        }

        return user.toDTO();
    }

    @Override
    public boolean sendOpt(String email) throws JPException, MessagingException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new JPException("USER_NOT_FOUND"));
        MimeMessage mm = javaMailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mm,true);
        message.setTo(email);
        message.setSubject("Your OTP Code");
        String genOtp = Utilities.generateOTP();
        OTP otp = new OTP(email,genOtp, LocalDateTime.now());
        otpRepository.save(otp);
        message.setText(Data.getMessageBody(genOtp,user.getName()),true);
        javaMailSender.send(mm);
        return true;

    }

    @Override
    public boolean verifyOpt(String email, String otp) throws JPException {
        OTP otpEntity = otpRepository.findById(email)
                .orElseThrow(() -> new JPException("OTP_NOT_FOUND"));

        // Additional logic to verify the OTP
        if(!otpEntity.getOtpcode().equals(otp)) throw new JPException("OTP_INCORRECT");
        return true;
    }

    @Override
    public ResponseDTO changePassword(LoginDTO loginDTO) throws JPException {
        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(()->new JPException("USER_NOT_FOUND"));
        user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
//        user.setPassword(loginDTO.getPassword());
        userRepository.save(user);

        NotificationDTO noti = new NotificationDTO();
        noti.setUserId(user.getId());
        noti.setMessage("Password Reset Successful");
        noti.setAction("Password Reset");
        notificationService.sendNotification(noti);
        return new ResponseDTO("Password Changed Successfully");
    }

    @Scheduled(fixedRate = 6000000) // Runs every 60
    // seconds
    public void removeExpiredOTPs() {
        LocalDateTime expiry = LocalDateTime.now().minusMinutes(5); // Define expiry threshold
        List<OTP> expiredOTPs = otpRepository.findByCreationTimeBefore(expiry); // Find expired OTPs

        if (!expiredOTPs.isEmpty()) { // Check if there are any expired OTPs
            otpRepository.deleteAll(expiredOTPs); // Delete all expired OTPs
            System.out.println("Removed " + expiredOTPs.size() + " expired OTPs."); // Log the result
        }
    }



}
