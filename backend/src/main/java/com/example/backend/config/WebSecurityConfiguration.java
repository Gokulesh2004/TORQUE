package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())  // Disable CSRF for stateless applications
                .authorizeHttpRequests(requests -> requests
                        .requestMatchers("/authenticate", "/sign-up").permitAll()  // Public access to authentication and sign-up
                        .requestMatchers("/bookings").permitAll()  // Allow public access to bookings
                        .requestMatchers("/api/users").permitAll()  // Allow public access to users
                        .requestMatchers("/contact").permitAll()  // Allow public access to contact
                        .anyRequest().authenticated()  // Require authentication for other endpoints
                )
                .sessionManagement(management -> management
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // Use stateless session for JWT
                )
                .build();
    }

    // Bean for AuthenticationManager to handle authentication logic
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    // Password encoder bean for encoding passwords (e.g., BCrypt)
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
