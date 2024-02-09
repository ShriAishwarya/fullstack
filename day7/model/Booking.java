package com.example.aquvavoyage.aishwarya.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.UUID;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="books")

public class Booking {
    @Id
    @GeneratedValue(strategy = UUID)
    private String id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String email;
    // @Column(nullable = false)
    // private String type;
    // @Column(nullable = false)
    // private String checkIn;
    // @Column(nullable = false)
    // private String chechOut;
    // @Column(nullable = false)
    // private String noOfGuests;
    // @Column(nullable = false)
    // private String noOfRooms;


}
