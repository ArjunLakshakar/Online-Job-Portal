package com.jobportal.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtHelper {

    private static final String SECRET_KEY = "ehYnd9T9XsY/TBi1ZNv2A8rFddCnSm3kiLLcwnHp3H8=";
    private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 10; // 10 hours

    // Get the signing key from the SECRET_KEY
    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes); // Correctly using SecretKey
    }

    // Generate JWT Token
    public String generateToken(UserDetails userDetails) {
        Map<String,Object> claims = new HashMap<>();
        CustomUserDetails customUser = (CustomUserDetails)userDetails;
        claims.put("id",customUser.getId());
        claims.put("name",customUser.getName());
        claims.put("profileId",customUser.getProfileId());
        claims.put("accountType",customUser.getAccountType());
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Extract Username from Token
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Extract a specific Claim from Token
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Extract all Claims from Token (Fixed for HMAC)
    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey()) // Correctly passing SecretKey
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    // Check if the Token is expired
    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Extract Expiration Date from Token
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Validate Token
    public boolean validateToken(String token, String username) {
        return extractUsername(token).equals(username) && !isTokenExpired(token);
    }
}
