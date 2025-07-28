package com.codewars.jspiders.service.impl;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.codewars.jspiders.entity.User;
import com.codewars.jspiders.repository.UserRepository;
import com.codewars.jspiders.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public User saveUser(User user) {
		logger.info("Saving user with provider: {}", user.getProvider());

		// Encrypt password if not already encrypted
		if (!user.getPassword().startsWith("$2a$")) {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
		}

		return userRepository.save(user);
	}

	@Override
	public Optional<User> updateUser(long userId, User user) {
		User tempUser = userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

		tempUser.setName(user.getName());
		tempUser.setEmail(user.getEmail());
		tempUser.setProvider(user.getProvider());
		tempUser.setRole(user.getRole());
		tempUser.setStudentProfile(user.getStudentProfile());

		// Encrypt password only if modified
		if (user.getPassword() != null && !user.getPassword().startsWith("$2a$")) {
			tempUser.setPassword(passwordEncoder.encode(user.getPassword()));
		}		
		User savedUser = userRepository.save(tempUser);
		return Optional.ofNullable(savedUser);
	}

	@Override
	public void deleteUser(long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + id));
		userRepository.delete(user);
	}

	@Override
	public boolean isUserExistsByEmail(String email) {
		return userRepository.findByEmail(email).isPresent();
	}

	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("User not found with email: " + email));
	}

	@Override
	public Optional<User> getUserById(long id) {
		return userRepository.findById(id);
	}
}
