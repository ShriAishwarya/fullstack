package com.example.aquvavoyage.aishwarya.config;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.aquvavoyage.aishwarya.utils.JwtUtil;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

import java.io.IOException;
import io.micrometer.common.lang.NonNull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationConfig extends OncePerRequestFilter{
    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;
    @Override
    protected void doFilterInternal(
        @NonNull HttpServletRequest request, 
        @NonNull HttpServletResponse response, 
        @NonNull FilterChain filterChain)
            throws ServletException, IOException {
     
        // throw new UnsupportedOperationException("Unimplemented method 'doFilterInternal'");
                String authHeader=request.getHeader(AUTHORIZATION);
                String token;
                String username;
                if(authHeader==null||!authHeader.startsWith("Bearer ")){
                    filterChain.doFilter(request, response);
                    return;
                }
                token=authHeader.substring(7);
                username=jwtUtil.extractUserName(token);
                if(username!=null&&SecurityContextHolder.getContext().getAuthentication()==null){
                UserDetails userDetails=this.userDetailsService.loadUserByUsername(username);
                if(jwtUtil.isTokenValid(token,userDetails)){
                    UsernamePasswordAuthenticationToken authToken=new UsernamePasswordAuthenticationToken( userDetails,null,userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }                
            }
            filterChain.doFilter(request, response);   
        }
}

