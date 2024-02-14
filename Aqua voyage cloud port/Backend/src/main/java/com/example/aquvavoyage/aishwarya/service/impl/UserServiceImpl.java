package com.example.aquvavoyage.aishwarya.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.example.aquvavoyage.aishwarya.dto.request.BookingRequest;
import com.example.aquvavoyage.aishwarya.dto.request.UserRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.BookingResponse;
import com.example.aquvavoyage.aishwarya.dto.response.UserResponse;
import com.example.aquvavoyage.aishwarya.model.Booking;
import com.example.aquvavoyage.aishwarya.model.User;
import com.example.aquvavoyage.aishwarya.repository.UserRepository;
import com.example.aquvavoyage.aishwarya.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

     private final UserRepository userRepository;
    @Override
    public BasicResponse<UserResponse> getAllUser() {
        // throw new UnsupportedOperationException("Unimplemented method 'getAllUser'");
        List<User>users=userRepository.findAll();
        List<UserResponse>userResponses=users.stream().map(user ->UserResponse
        .builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .role(user.getRole())
        .image(user.getImage())
        .address(user.getAddress())
        .phoneNumber(user.getPhoneNumber())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
        .message("User data fetched Succesfuly")
        .data(userResponses)
        .build();
    }



        @SuppressWarnings("null")
    @Override
    public UserResponse createuser(UserRequest request) {
        var book = User.builder()
        // .id(request.getId())
        // .noOfPersons(request.getNoOfPersons())
        // .fromDate(request.getFromDate())
        // .toDate(request.getToDate())
        // .totalPrice(request.getTotalPrice())
        .id(request.getId())
        .name(request.getName())
        .email(request.getEmail())
        .role(request.getRole())
        .image(request.getImage())
        .address(request.getAddress())
        .phoneNumber(request.getPhoneNumber())
        .build();
        userRepository.save(book);
        return UserResponse.builder()  
        .message("Slot Booked sucessfully")  
                .build();
    }

    @SuppressWarnings("null")
    @Override
    public BasicResponse<UserResponse> deleteuser(String UserId) {
        if (userRepository.existsById(UserId)) {
            userRepository.deleteById(UserId);
            return BasicResponse.<UserResponse>builder()
                .message("Booking deleted successfully")
                .build();
        } else {
            return BasicResponse.<UserResponse>builder()
                .message("Booking not found with ID: " + UserId)
                .build();
        }
    }


    @SuppressWarnings("null")
    @Override
        public UserResponse updateuser(String UserId, UserRequest request) {
            if (userRepository.existsById(UserId)) {
                User existinguser = userRepository.findById(UserId).orElse(null);
                if (existinguser != null) {
                    existinguser.setId(request.getId());
                    existinguser.setName(request.getName());
                    existinguser.setEmail(request.getEmail());
                    existinguser.setImage(request.getImage());
                    existinguser.setRole(request.getRole());
                    existinguser.setAddress(request.getAddress());
                    existinguser.setAddress(request.getAddress());
                    existinguser.setPhoneNumber(request.getPhoneNumber());
                    // existingbook.setId(request.getId());
                    // existingbook.setNoOfPersons(request.getNoOfPersons());
                    // existingbook.setFromDate(request.getFromDate());
                    // existingbook.setToDate(request.getToDate());
                    // existingbook.setTotalPrice(request.getTotalPrice());

                    // existingGift.setGift_category(request.getGift_category());
                    userRepository.save(existinguser);
                    return UserResponse.builder()
                        .message("Booking updated successfully")
                        .build();
                } else {
                    return UserResponse.builder()
                        .message("Failed to update Booking. Booking not found with ID: " + UserId)
                        .build();
                }
            } else {
                return UserResponse.builder()
                    .message("Failed to update Booking. Booking not found with ID: " + UserId)
                    .build();
       }
}

}