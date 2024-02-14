package com.example.aquvavoyage.aishwarya.service;

import com.example.aquvavoyage.aishwarya.dto.request.BoatRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.BoatResponse;

public interface BoatService {
    
    BasicResponse<BoatResponse> getAllUser();

    BoatResponse createBoat(BoatRequest request);

}
