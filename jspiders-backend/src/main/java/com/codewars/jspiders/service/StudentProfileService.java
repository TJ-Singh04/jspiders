package com.codewars.jspiders.service;

import java.util.Optional;

import com.codewars.jspiders.entity.StudentProfile;

public interface StudentProfileService {

	Optional<StudentProfile> getByUserId(Long userId);

	StudentProfile createProfile(StudentProfile profile);

	StudentProfile updateProfile(Long userId, StudentProfile profile);
}
