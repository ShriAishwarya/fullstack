package com.example.aquvavoyage.aishwarya.utils;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import java.util.Arrays;
import java.util.List;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.HEAD;

public class MyConstant {
//Request mapping
public static final String AUTH = "/api/v1/auth";
public static final String USER = "/api/v1/user";
public static final String BOOK = "/api/v1/boook";
//end points
public static final String REGISTER = "/register";
public static final String LOGIN = "/login";
public static final String USERLIST="/list";
public static final String BOOKING="/booking";
public static final String BOOKLIST="/booklist";
//web security
public static final List<String> ORIGINS =Arrays.asList("https://localhost:4000");
public static final List<String> HEADERS =Arrays.asList(AUTHORIZATION,CONTENT_TYPE);
public static final List<String> METHODS =Arrays.asList(GET.name(),POST.name(),
PUT.name(),PATCH.name(),DELETE.name(),HEAD.name());

public static final String SWAGGER_LOCALHOST_URL="http://localhost:8181";
public static final String SWAGGER_SECURITY_SCHEME_NAME="baererAuth";
public static final String SWAGGER_SCHEME="bearer";
public static final String SWAGGER_BEARER_FORMAT="JWT";
public static final String SWAGGGER_DESCRIPTION="Produce a Jason Web Token";

}
