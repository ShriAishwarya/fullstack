package com.example.aquvavoyage.aishwarya.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Payment {
    @Id
    // @GeneratedValue(strategy = UUID)
    private String id;
    @Column(nullable = false)
    private String cardName;
    @Column(nullable = false)
    private Long cardNumber;





}
