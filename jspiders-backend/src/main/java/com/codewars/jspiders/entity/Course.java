package com.codewars.jspiders.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank
	@Size(max = 100)
	private String name;

	@NotBlank
	private String duration;

	@Size(min = 1)
	private List<@NotBlank String> technology;

	@NotNull
	@Min(0)
	private double fees;

	@NotBlank
	private String mode;

	@NotBlank
	private String schedule; // Weekdays or Weekends

	@OneToMany(mappedBy = "enrolledCourse")
	@JsonManagedReference
	private List<StudentProfile> students;
}
