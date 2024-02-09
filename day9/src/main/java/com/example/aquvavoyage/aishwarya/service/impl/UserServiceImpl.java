package com.example.aquvavoyage.aishwarya.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.UserResponse;
import com.example.aquvavoyage.aishwarya.model.User;
import com.example.aquvavoyage.aishwarya.repository.UserRepository;
import com.example.aquvavoyage.aishwarya.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
     private final UserRepository userRepository;
    @Override
    public BasicResponse<UserResponse> getAllUser() {
        // throw new UnsupportedOperationException("Unimplemented method 'getAllUser'");
        List<User>users=userRepository.findAll();
        List<UserResponse>userResponses=users.stream().map(user ->UserResponse
        .builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .role(user.getRole())
        .image(user.getImage())
        .address(user.getAddress())
        .phoneNumber(user.getPhoneNumber())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
        .message("User data fetched Succesfuly")
        .data(userResponses)
        .build();
    }

}
