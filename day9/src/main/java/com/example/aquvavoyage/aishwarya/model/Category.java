package com.example.aquvavoyage.aishwarya.model;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
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
public class Category {
@Id
    private String id;
  @Column(nullable = false)
    private String categoryName;
    @Column(nullable = false)    
    private String categoryAddress;

}
