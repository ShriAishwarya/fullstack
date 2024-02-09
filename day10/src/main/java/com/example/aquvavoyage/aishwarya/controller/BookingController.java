// package com.example.aquvavoyage.aishwarya.controller;

// import static com.example.aquvavoyage.aishwarya.utils.MyConstant.BOOK;
// import static com.example.aquvavoyage.aishwarya.utils.MyConstant.BOOKLIST;
// import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
// import static org.springframework.http.HttpStatus.OK;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
// import com.example.aquvavoyage.aishwarya.dto.response.BookingResponse;
// import com.example.aquvavoyage.aishwarya.service.BookingService;

// import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping(BOOK)
// @RequiredArgsConstructor
// public class BookingController {
//     private final BookingService bookingService;
//         @GetMapping(BOOKLIST)
//     public ResponseEntity <BasicResponse<BookingResponse>> create()
//     {
//         BasicResponse<BookingResponse> response=new BasicResponse<>();
//         try{
//             response=bookingService.getAllBooking();
//             return new ResponseEntity<>(response,OK);
//         }
//         catch (Exception e)
//         {
//             response.setMessage("Something went wrong");
//                 return new ResponseEntity<>(response,EXPECTATION_FAILED);
//         }
//     }
    
// }
