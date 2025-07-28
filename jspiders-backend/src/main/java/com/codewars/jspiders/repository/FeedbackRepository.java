package com.codewars.jspiders.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.codewars.jspiders.entity.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

	List<Feedback> findByStudentProfile_Id(Long studentId);

	@Query("SELECT AVG(f.rating) FROM Feedback f WHERE f.studentProfile.id = :studentId")
	Double findAverageRatingByStudent(@Param("studentId") Long studentId);

}
