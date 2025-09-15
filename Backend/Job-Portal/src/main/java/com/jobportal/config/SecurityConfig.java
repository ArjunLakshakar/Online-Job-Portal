//package com.jobportal.config;
//
//import com.jobportal.jwt.JwtAuthenticationEntryPoint;
//import com.jobportal.jwt.JwtAuthenticationFilter;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//
//import java.util.List;
//
//@Configuration
//public class SecurityConfig {
//
//    @Autowired
//    private JwtAuthenticationEntryPoint point;
//
//    @Autowired
//    private JwtAuthenticationFilter filter;
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf(csrf -> csrf.disable())
////                .cors(cors -> cors.configurationSource(corsConfigurationSource()))  // ✅ Enable CORS
//                .cors(cors -> cors.configurationSource(request -> new CorsConfig().corsConfiguration()))
//                .authorizeRequests()
//                .requestMatchers("/auth/login", "/users/register", "/users/verifyOtp/**", "/user/sendOtp/**").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .exceptionHandling(ex -> ex.authenticationEntryPoint(point))
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//
//        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//        return http.build();
//    }
//
//    // ✅ CORS Configuration
//    @Bean
//    public CorsFilter corsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//        config.setAllowedOrigins(List.of("http://localhost:3001"));  // ✅ Frontend URL
//        config.setAllowedHeaders(List.of("*"));
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//        source.registerCorsConfiguration("/**", config);
//        return new CorsFilter(source);
//    }
//}






package com.jobportal.config;

import com.jobportal.jwt.JwtAuthenticationEntryPoint;
import com.jobportal.jwt.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationEntryPoint point;

    @Autowired
    private JwtAuthenticationFilter filter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
//       http.authorizeHttpRequests((req)->req.requestMatchers("/**").permitAll().anyRequest().authenticated());
//       http.csrf(csrf->csrf.disable());
//       return http.build();
        http.csrf(csrf->csrf.disable())
                .cors(cors -> cors.configurationSource(request -> new CorsConfig().corsConfiguration()))
                .authorizeRequests()
                .requestMatchers("/auth/login","/users/register","/users/verifyOtp/**","/users/sendOtp/**","/users/changePass").permitAll()
                .anyRequest()
                .authenticated()
                .and().exceptionHandling(ex->ex.authenticationEntryPoint(point))
                .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

}
