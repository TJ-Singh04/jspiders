package com.codewars.jspiders.controller;

import com.codewars.jspiders.entity.Feedback;
import com.codewars.jspiders.service.FeedbackService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jspiders/feedbacks")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @GetMapping
    public List<Feedback> getAllFeedbacks() {
        return feedbackService.getAllFeedbacks();
    }

    @GetMapping("/student/{studentId}")
    public List<Feedback> getFeedbacksByStudentId(@PathVariable Long studentId) {
        return feedbackService.getFeedbacksByStudentId(studentId);
    }

    @PostMapping("/student/{studentId}")
    public Feedback addFeedback(@PathVariable Long studentId, @RequestBody Feedback feedback) {
        return feedbackService.addFeedback(studentId, feedback);
    }
}
