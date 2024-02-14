package com.example.aquvavoyage.aishwarya.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.aquvavoyage.aishwarya.dto.request.PaymentRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.PaymentResponse;
import com.example.aquvavoyage.aishwarya.model.Payment;
import com.example.aquvavoyage.aishwarya.repository.PaymentRepository;
import com.example.aquvavoyage.aishwarya.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
     private final PaymentRepository paymentRepository;

     @Override
     public BasicResponse<PaymentResponse> getAllUser() {
         List<Payment> payments = paymentRepository.findAll();
         List<PaymentResponse> payResponses = payments.stream().map(payment -> PaymentResponse.builder()
                 .paymentId(payment.getPaymentId())
                 .bookingId(payment.getBookingId())
                 .amount(payment.getAmount())
                 .paymentDate(payment.getPaymentDate())
                 .paymentMethod(payment.getPaymentMethod())
                 .build())
                 .collect(Collectors.toList());
 
         return BasicResponse.<PaymentResponse>builder()
                 .message("Payment Data fetched").data(payResponses).build();
     }

     @SuppressWarnings("null")
    @Override
    public PaymentResponse createPay(PaymentRequest request) {
        var pay = Payment.builder()
        .paymentId(request.getPaymentId())
        .bookingId(request.getBookingId())
        .amount(request.getAmount())
        .paymentDate(request.getPaymentDate())
        .paymentMethod(request.getPaymentMethod())
        .build();
        paymentRepository.save(pay);
        return PaymentResponse.builder()  
        .message("Slot Booked sucessfully")  
                .build();
    }

}
