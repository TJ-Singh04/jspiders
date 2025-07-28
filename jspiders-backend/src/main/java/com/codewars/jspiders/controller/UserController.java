package com.codewars.jspiders.controller;

import com.codewars.jspiders.entity.User;
import com.codewars.jspiders.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/jspiders/users")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/{id}")
	public Optional<User> getUserById(@PathVariable long id) {
		return userService.getUserById(id);
	}

	@PutMapping("/{id}")
	public Optional<User> updateUser(@PathVariable long id, @RequestBody User updatedUser) {
		return userService.updateUser(id, updatedUser);
	}

	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable long id) {
		userService.deleteUser(id);
		return "User with id " + id + " deleted successfully!";
	}

	@GetMapping("/exists")
	public boolean isUserExistsByEmail(@RequestParam String email) {
		return userService.isUserExistsByEmail(email);
	}

	@GetMapping("/email")
	public User getUserByEmail(@RequestParam String email) {
		return userService.findByEmail(email);
	}
}
