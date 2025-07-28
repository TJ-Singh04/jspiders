package com.codewars.jspiders.controller;

import com.codewars.jspiders.entity.StudentProfile;
import com.codewars.jspiders.service.StudentProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/jspiders/profiles")
public class StudentProfileController {

	@Autowired
	private StudentProfileService studentProfileService;

	@GetMapping("/user/{userId}")
	public Optional<StudentProfile> getProfileByUserId(@PathVariable Long userId) {
		return studentProfileService.getByUserId(userId);
	}

	@PostMapping
	public StudentProfile createProfile(@RequestBody StudentProfile profile) {
		return studentProfileService.createProfile(profile);
	}

	@PutMapping("/user/{userId}")
	public StudentProfile updateProfile(@PathVariable Long userId, @RequestBody StudentProfile profile) {
		return studentProfileService.updateProfile(userId, profile);
	}
}
