package com.codewars.jspiders.service.impl;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewars.jspiders.entity.Course;
import com.codewars.jspiders.entity.StudentProfile;
import com.codewars.jspiders.entity.User;
import com.codewars.jspiders.repository.CourseRepository;
import com.codewars.jspiders.repository.StudentProfileRepository;
import com.codewars.jspiders.repository.UserRepository;
import com.codewars.jspiders.service.StudentProfileService;

@Service
public class StudentProfileServiceImpl implements StudentProfileService {

	@Autowired
	StudentProfileRepository profileRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	CourseRepository courseRepository;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public StudentProfile createProfile(StudentProfile profile) {
		User user = userRepository.findById(profile.getUser().getId())
				.orElseThrow(() -> new RuntimeException("User not found"));
		Course course = courseRepository.findById(profile.getEnrolledCourse().getId())
				.orElseThrow(() -> new RuntimeException("Course not found"));

		profile.setUser(user);
		profile.setEnrolledCourse(course);

		return profileRepository.save(profile);
	}

	@Override
	public StudentProfile updateProfile(Long userId, StudentProfile profile) {
		Optional<StudentProfile> existingProfile = profileRepository.findByUser_Id(userId);

		if (existingProfile.isPresent()) {
			StudentProfile updatedProfile = existingProfile.get();
			updatedProfile.setPhone(profile.getPhone());
			updatedProfile.setQualification(profile.getQualification());
			updatedProfile.setBranch(profile.getBranch());
			updatedProfile.setEnrolledCourse(profile.getEnrolledCourse());
			updatedProfile.setFeedbacks(profile.getFeedbacks());

			logger.info("Updated profile for userId: {}", userId);
			return profileRepository.save(updatedProfile);
		} else {
			throw new IllegalArgumentException("Profile not found for user ID: " + userId);
		}
	}

	@Override
	public Optional<StudentProfile> getByUserId(Long userId) {
		return profileRepository.findByUser_Id(userId);
	}
}
