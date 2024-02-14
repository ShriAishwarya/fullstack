package com.example.aquvavoyage.aishwarya.model;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Boat")
public class Boat {
     @Id
    @Column(nullable = false)
    private String id;
    
    @Column(nullable = false)
    private String boatname;
    
    @Column(nullable = false)
    private String boatimage;
    
    @Column(nullable = false)
    private String boatlocation;
    
    @Column(nullable = false)
    private Integer boatavailable ;

    @Column(nullable = false)
    private Double price ;

}
