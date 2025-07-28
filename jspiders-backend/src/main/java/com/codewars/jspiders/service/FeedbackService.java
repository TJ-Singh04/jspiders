package com.codewars.jspiders.service;

import java.util.List;

import com.codewars.jspiders.entity.Feedback;

public interface FeedbackService {

	List<Feedback> getFeedbacksByStudentId(Long studentId);

	Feedback addFeedback(Long studentId, Feedback feedback);

	List<Feedback> getAllFeedbacks();
}
