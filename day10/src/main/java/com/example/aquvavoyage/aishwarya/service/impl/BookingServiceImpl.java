// package com.example.aquvavoyage.aishwarya.service.impl;



// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
// import com.example.aquvavoyage.aishwarya.dto.response.BookingResponse;
// import com.example.aquvavoyage.aishwarya.model.Booking;
// import com.example.aquvavoyage.aishwarya.repository.BookingRepository;
// import com.example.aquvavoyage.aishwarya.service.BookingService;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class BookingServiceImpl implements BookingService {
// //          private final BookingRepository bookingRepository;
// //     @Override
// //     public BasicResponse<BookingResponse> getAllBooking() {
// //         // throw new UnsupportedOperationException("Unimplemented method 'getAllUser'");
// //         List<Booking>books=bookingRepository.findAll();
// //         List<BookingResponse>bookingResponses=books.stream().map( booking -> BasicResponse
// //         .builder()
// //         .id(booking.getId())
// //         .name(booking.getName())
// //         .email(booking.getEmail())
// //         .build())
// //         .collect(Collectors.toList());
// //         return BasicResponse.<BookingResponse>builder()
// //         .message("Booking data fetched Succesfuly")
// //         .data(bookingResponses)
// //         .build();
// //     }
// // }
