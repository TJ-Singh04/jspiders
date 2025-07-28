package com.codewars.jspiders.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import com.codewars.jspiders.entity.User;
import com.codewars.jspiders.security.JwtUtil;
import com.codewars.jspiders.service.UserService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/jspiders/auth")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AuthController {

	@Autowired
	private UserService userService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtUtil;

	@PostMapping("/register")
	public Map<String, Object> register(@RequestBody User user) {
		Map<String, Object> response = new HashMap<>();

		if (userService.isUserExistsByEmail(user.getEmail())) {
			response.put("message", "Email already exists");
			return response;
		}

		userService.saveUser(user); // Delegated to service (handles encoding)
		response.put("message", "User registered successfully");
		return response;
	}

	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody User user) {
		Map<String, Object> response = new HashMap<>();
		try {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
		} catch (AuthenticationException e) {
			response.put("error", "Invalid credentials");
			return response;
		}

		String token = jwtUtil.generateToken(user.getEmail());
		response.put("token", token);
		return response;
	}
}
