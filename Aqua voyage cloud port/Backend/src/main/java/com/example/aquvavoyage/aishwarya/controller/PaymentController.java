package com.example.aquvavoyage.aishwarya.controller;

import static com.example.aquvavoyage.aishwarya.utils.MyConstant.PayBook;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.Postpay;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.USER;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aquvavoyage.aishwarya.dto.request.PaymentRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.PaymentResponse;
import com.example.aquvavoyage.aishwarya.service.PaymentService;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class PaymentController {
         private final PaymentService payService;
    //   private final PaymentRepository payrepo;

    @GetMapping(PayBook)
    public ResponseEntity<BasicResponse<PaymentResponse>> getUser(){
        BasicResponse<PaymentResponse> response=new BasicResponse<>();
        try{
            response=payService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @PostMapping(Postpay)
    public ResponseEntity<PaymentResponse> createPayment(@RequestBody PaymentRequest request) {
        PaymentResponse response = new PaymentResponse();
        try {
            response = payService.createPay(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
