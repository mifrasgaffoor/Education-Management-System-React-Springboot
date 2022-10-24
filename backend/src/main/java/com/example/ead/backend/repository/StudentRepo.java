package com.example.ead.backend.repository;

import com.example.ead.backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentRepo extends  JpaRepository<Student, Integer> {
//CRUD OF STUDENT TABLE

}
