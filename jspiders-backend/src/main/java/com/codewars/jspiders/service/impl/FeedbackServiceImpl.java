package com.codewars.jspiders.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewars.jspiders.entity.Feedback;
import com.codewars.jspiders.entity.StudentProfile;
import com.codewars.jspiders.repository.FeedbackRepository;
import com.codewars.jspiders.repository.StudentProfileRepository;
import com.codewars.jspiders.service.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	FeedbackRepository feedbackRepository;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	StudentProfileRepository profileRepository;

	@Override
	public List<Feedback> getFeedbacksByStudentId(Long studentId) {
		List<Feedback> feedbacks = feedbackRepository.findByStudentProfile_Id(studentId);
		logger.info("Fetched feedbacks for student ID: {}", studentId);
		return feedbacks;
	}

	@Override
	public Feedback addFeedback(Long studentId, Feedback feedback) {
		StudentProfile profile = profileRepository.findByUser_Id(studentId)
				.orElseThrow(() -> new RuntimeException("Student profile not found for user ID: " + studentId));
		feedback.setStudentProfile(profile);
		feedback.setCreatedAt(java.time.LocalDateTime.now());
		Feedback savedFeedback = feedbackRepository.save(feedback);

		logger.info("Added feedback for student ID: {}", studentId);
		return savedFeedback;
	}

	@Override
	public List<Feedback> getAllFeedbacks() {
		logger.info("Fetching all feedbacks");
		return feedbackRepository.findAll();
	}

}
