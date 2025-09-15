package com.jobportal.jwt;

import io.jsonwebtoken.security.Keys;
import java.util.Base64;
import javax.crypto.SecretKey;

public class SecretKeyGenerator {
    public static void main(String[] args) {
        // Generate a secure SecretKey for HS256
        SecretKey key = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256);

        // Convert to Base64 string
        String base64Key = Base64.getEncoder().encodeToString(key.getEncoded());

        // Print the generated key
        System.out.println("Generated Key: " + base64Key);
    }
}
