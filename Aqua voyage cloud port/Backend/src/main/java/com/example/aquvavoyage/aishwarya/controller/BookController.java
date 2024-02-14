package com.example.aquvavoyage.aishwarya.controller;

import static com.example.aquvavoyage.aishwarya.utils.MyConstant.Book;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.DeleteBook;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.PostBook;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.UpdateBook;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.UserBook;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aquvavoyage.aishwarya.dto.request.BookingRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.BookingResponse;
import com.example.aquvavoyage.aishwarya.service.BookingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Book)
@RequiredArgsConstructor
public class BookController {
    private final BookingService bookService;
    //   private final BookingRepository bookrepo;

    @GetMapping(UserBook)
    public ResponseEntity<BasicResponse<BookingResponse>> getUser(){
        BasicResponse<BookingResponse> response=new BasicResponse<>();
        try{
            response=bookService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @PostMapping(PostBook)
    public ResponseEntity<BookingResponse> createGift(@RequestBody BookingRequest request) {
        BookingResponse response = new BookingResponse();
        try {
            response = bookService.createBook(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED    );
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(UpdateBook + "/{bookid}")
public ResponseEntity<BasicResponse<BookingResponse>> updategift(@PathVariable String bookid, @RequestBody BookingRequest BookRequest) {
    BasicResponse<BookingResponse> response = new BasicResponse<>();
    try {
        BookingResponse updatedgiftResponse = bookService.updatebook(bookid, BookRequest);
        response.setMessage(updatedgiftResponse.getMessage());
        // response.setData(updatedgiftResponse.getData());
        return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
        response.setMessage("Failed to update Booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
}
}

    @DeleteMapping(DeleteBook+"/{bookid}")
    public ResponseEntity<BasicResponse<BookingResponse>> deleteBooking(@PathVariable String bookid) {
        BasicResponse<BookingResponse> response = new BasicResponse<>();
        try {
            BasicResponse<BookingResponse> deletedBookingResponse = bookService.deletebook(bookid);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
}
} 

}
