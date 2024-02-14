package com.example.aquvavoyage.aishwarya.service;

import com.example.aquvavoyage.aishwarya.dto.request.BookingRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.BookingResponse;

public interface BookingService {
     BasicResponse<BookingResponse>getAllUser();

    BookingResponse createBook(BookingRequest request);

    BasicResponse<BookingResponse> deletebook(String giftid);

    BookingResponse updatebook(String giftid, BookingRequest giftRequest);
  

}
