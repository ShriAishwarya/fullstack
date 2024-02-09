package com.example.aquvavoyage.aishwarya.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.aquvavoyage.aishwarya.model.User;

public interface UserRepository extends JpaRepository<User,String>{

    Optional<User>findByEmail(String username);
    
    

}
