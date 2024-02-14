package com.example.aquvavoyage.aishwarya.service;

import com.example.aquvavoyage.aishwarya.dto.request.PaymentRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse>getAllUser();

    PaymentResponse createPay(PaymentRequest request);

}
