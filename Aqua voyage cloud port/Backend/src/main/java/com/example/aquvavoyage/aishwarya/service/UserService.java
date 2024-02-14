package com.example.aquvavoyage.aishwarya.service;

import com.example.aquvavoyage.aishwarya.dto.request.UserRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.UserResponse;

public interface UserService {
    BasicResponse<UserResponse>getAllUser();
    
     UserResponse createuser(UserRequest request);
     
        BasicResponse<UserResponse> deleteuser(String giftid);

    UserResponse updateuser(String giftid, UserRequest giftRequest);

}
