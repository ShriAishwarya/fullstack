package com.example.aquvavoyage.aishwarya.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequest {

    private String id;
    private String cardName;
    private Long cardNumber;


}
