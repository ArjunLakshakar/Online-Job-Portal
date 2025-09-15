package com.jobportal.utility;

import com.jobportal.entity.Sequence;
import com.jobportal.repository.SequenceRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;

@Component
public class Utilities {

    @Autowired
    private SequenceRepository sequenceRepository;

    public static String generateOTP(){
        StringBuilder otp = new StringBuilder();
        SecureRandom random = new SecureRandom();
        for(int i=0; i < 6; i++) otp.append(random.nextInt(10));
        return otp.toString();
    }


}
