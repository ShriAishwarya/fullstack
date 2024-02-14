package com.example.aquvavoyage.aishwarya.service;

import com.example.aquvavoyage.aishwarya.dto.request.LoginRequest;
import com.example.aquvavoyage.aishwarya.dto.request.RegisterRequest;
import com.example.aquvavoyage.aishwarya.dto.response.LoginResponse;
import com.example.aquvavoyage.aishwarya.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);
    LoginResponse login(LoginRequest request);
}
