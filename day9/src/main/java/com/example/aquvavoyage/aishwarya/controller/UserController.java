package com.example.aquvavoyage.aishwarya.controller;

import static com.example.aquvavoyage.aishwarya.utils.MyConstant.USER;
import static com.example.aquvavoyage.aishwarya.utils.MyConstant.USERLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aquvavoyage.aishwarya.dto.response.BasicResponse;
import com.example.aquvavoyage.aishwarya.dto.response.UserResponse;
import com.example.aquvavoyage.aishwarya.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.http.HttpStatus.OK;

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
    @DeleteMapping(USERLIST)
    public ResponseEntity <BasicResponse<UserResponse>> delete()
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

}
