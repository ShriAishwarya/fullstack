package com.example.aquvavoyage.aishwarya.dto.response;


import com.example.aquvavoyage.aishwarya.Enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class UserResponse {
    private String message;
    private String id;
    private String name;
    private String email;
    private Role role;
    private String image;
    private Long phoneNumber;
    private String address;

}
