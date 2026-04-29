//User.java
package ai_ml_tutorial.Entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.*;

import ai_ml_tutorial.Role;

import java.io.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 @Column(nullable=false,unique=true)
	 private String email;
	 
	 @Column(nullable=false)
	 private String password;
	 
	 @Column(nullable=false)
	 private String firstName;
	 
	 @Column(nullable=false)
	 private String lastName;
	 
	 @Enumerated(EnumType.STRING)
	 @Column(nullable = false)
	 private Role role;
	 
	 @Column(nullable=false,updatable=false)
	 private LocalDateTime createdAt;
	 
	 @ManyToMany(fetch=FetchType.LAZY)
	 @JoinTable(
			 name="enrollments",
			 joinColumns = @JoinColumn(name = "user_id"),
			 inverseJoinColumns = @JoinColumn(name = "course_id")
			 )
	 private Set<Course> enrolledCourses = new HashSet<>();
	 
	 @PrePersist
	 protected void onCreate() {
		 createdAt = LocalDateTime.now();
	 }
	 
}
//Lesson.java
package ai_ml_tutorial.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "lessons")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lesson {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 @Column(nullable = false)
	 private String title;
	 
	 @Column(columnDefinition = "TEXT")
	 private String content;
	 
	 private String videoUrl;
	 
	 private Integer durationMinutes;
	 
	 private Integer orderIndex;
	 
	 @ManyToOne(fetch = FetchType.LAZY)
	 @JoinColumn(name="course_id", nullable=false)
	 private Course course;
}
//Course.java
