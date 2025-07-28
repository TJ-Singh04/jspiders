package com.codewars.jspiders.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewars.jspiders.entity.Course;
import com.codewars.jspiders.repository.CourseRepository;
import com.codewars.jspiders.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	CourseRepository courseRepository;

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Override
	public List<Course> getAllCourses() {
		logger.info("Retrieving all courses");
		return courseRepository.findAll();
	}

	@Override
	public Course getCourseById(Long id) {
		Course course = courseRepository.findById(id).orElse(null);
		logger.info("Retrieved course: {}", course != null ? course.getName() : "not found");
		return course;
	}

	@Override
	public Course createCourse(Course course) {
		if (course.getId() != 0 && courseRepository.existsById(course.getId())) {
			throw new IllegalArgumentException("Course with given ID already exists.");
		}
		logger.info("Creating course: {}", course.getName());
		return courseRepository.save(course);
	}

}
