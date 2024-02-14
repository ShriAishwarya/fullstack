package com.example.aquvavoyage.aishwarya.repository;

// import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.aquvavoyage.aishwarya.model.Booking;

public interface BookingRepository  extends JpaRepository<Booking,String> {
    // Optional<Booking> findByEmail(String email);

}
