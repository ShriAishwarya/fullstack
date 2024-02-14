package com.example.aquvavoyage.aishwarya.controller;

import static com.example.aquvavoyage.aishwarya.utils.MyConstant.DeleteUser;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.PostUser;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.USER;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.USERLIST;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.UpdateUser;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.aquvavoyage.aishwarya.dto.request.UserRequest;
import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.UserResponse;
import com.example.aquvavoyage.aishwarya.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping(USERLIST)
    public ResponseEntity <BasicResponse<UserResponse>> create()
    {
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try{
            response=userService.getAllUser();
            return new ResponseEntity<>(response,OK);
        }
        catch (Exception e)
        {
            response.setMessage("Something went wrong");
                return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }


     @PostMapping(PostUser)
    public ResponseEntity<UserResponse> createGift(@RequestBody UserRequest request) {
        UserResponse response = new UserResponse();
        try {
            response= userService.createuser(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED    );
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(UpdateUser + "/{userid}")
public ResponseEntity<BasicResponse<UserResponse>> updategift(@PathVariable String userid, @RequestBody UserRequest userRequest) {
    BasicResponse<UserResponse> response = new BasicResponse<>();
    try {
        UserResponse updatedgiftResponse = userService.updateuser(userid, userRequest);
        response.setMessage(updatedgiftResponse.getMessage());
        // response.setData(updatedgiftResponse.getData());
        return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
        response.setMessage("Failed to update Booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
}
}

    @DeleteMapping(DeleteUser+"/{userid}")
    public ResponseEntity<BasicResponse<UserResponse>> deleteuser(@PathVariable String userid) {
        BasicResponse<UserResponse> response = new BasicResponse<>();
        try {
            BasicResponse<UserResponse> deletedUserResponse = userService.deleteuser(userid);
            response.setMessage(deletedUserResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
}
} 

}
