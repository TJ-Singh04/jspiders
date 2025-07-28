package com.codewars.jspiders.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class StudentProfile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank
	@Size(min = 8, max = 12)
	private String phone;

	@NotBlank
	private String qualification;

	@NotBlank
	private String branch; // Benguluru, Pune, Noida etc.

	@OneToOne
	private User user;

	@ManyToOne
	@JsonBackReference
	private Course enrolledCourse;

	@OneToMany(mappedBy = "studentProfile", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<Feedback> feedbacks;
}
