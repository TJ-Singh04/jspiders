package com.codewars.jspiders.service;

import java.util.List;

import com.codewars.jspiders.entity.Course;

public interface CourseService {

	List<Course> getAllCourses();

	Course getCourseById(Long id);

	Course createCourse(Course course); // Only for Administrator
}
