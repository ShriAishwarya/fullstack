package com.example.aquvavoyage.aishwarya.service.impl;

import static com.example.aquvavoyage.aishwarya.Enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

// import com.example.aquvavoyage.aishwarya.dto.request.BookingRequest;
import com.example.aquvavoyage.aishwarya.dto.request.LoginRequest;
import com.example.aquvavoyage.aishwarya.dto.request.RegisterRequest;
// import com.example.aquvavoyage.aishwarya.dto.response.BookingResponse;
import com.example.aquvavoyage.aishwarya.dto.response.LoginResponse;
import com.example.aquvavoyage.aishwarya.dto.response.RegisterResponse;
// import com.example.aquvavoyage.aishwarya.model.Booking;
import com.example.aquvavoyage.aishwarya.model.User;
// import com.example.aquvavoyage.aishwarya.repository.BookingRepository;
import com.example.aquvavoyage.aishwarya.repository.UserRepository;
import com.example.aquvavoyage.aishwarya.service.AuthenticationService;
import com.example.aquvavoyage.aishwarya.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AuthenticationServiceImpl implements AuthenticationService {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final AuthenticationManager authenticationManager;
        private final JwtUtil jwtUtil;
        // private final BookingRepository bookingRepository;
        @Override
        public RegisterResponse register(RegisterRequest request) {
         Optional<User>isUserExists = userRepository.findByEmail(request.getEmail());
         if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!").build();
         }var user=User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(USER)
                    .build();
            userRepository.save(user);
            return RegisterResponse.builder().message("User created successfully!").build();
        }
    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtUtil.generateToken(user);
        return LoginResponse.builder().message("User logged in successfully!").token(token).build();
    
    }
    // @Override
    // public BookingResponse book(BookingRequest request) {
    //     Optional<Booking>isBookingExists = bookingRepository.findByEmail(request.getEmail());
    //  if(isBookingExists.isPresent()){
    //     return BookingResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!").build();
    //  }var booking=Booking.builder()
    //             .id(request.getId())
    //             .noOfPersons(request.getNoOfPersons())
    //             .fromDate(request.getFromDate())
    //             .toDate(request.getToDate())
    //             .totalPrice(request.getTotalPrice())
    //             .build();
    //     bookingRepository.save(booking);
    //     return BookingResponse.builder().message("Booked successfully!").build();

    // }
   
}
