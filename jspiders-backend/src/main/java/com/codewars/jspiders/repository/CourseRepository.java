package com.codewars.jspiders.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codewars.jspiders.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

	Optional<Course> findByName(String name);

	boolean existsByName(String name);

	List<Course> findByMode(String mode);

	List<Course> findBySchedule(String schedule);

}
