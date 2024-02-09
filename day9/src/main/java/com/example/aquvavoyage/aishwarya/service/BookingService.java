package com.example.aquvavoyage.aishwarya.service;

import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.BookingResponse;

public interface BookingService {
    BasicResponse<BookingResponse>getAllBooking();

}
