package com.example.ead.backend.repository;

import com.example.ead.backend.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;


@Repository
@RequestMapping("/api/v2/teachers")
public interface TeacherRepo  extends JpaRepository<Teacher,Integer> {
    //CRUD OF TEACHER TABLE
}


