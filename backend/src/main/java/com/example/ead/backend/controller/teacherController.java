package com.example.ead.backend.controller;

import com.example.ead.backend.exception.NotFound;
import com.example.ead.backend.model.Teacher;
import com.example.ead.backend.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2/teachers")
public class teacherController {

    @Autowired
    private TeacherRepo teacherRepo ;

    // ALL CRUD API

    @GetMapping
    public List<Teacher> getAllTeachers (){
        return  teacherRepo.findAll();
    }

    //CREATE TEACHER API
     @PostMapping
     public  Teacher createTeacher (@RequestBody Teacher teacher) {
        return  teacherRepo.save(teacher);
     }


     // GETBYID
    @GetMapping("{id}")
    public ResponseEntity<Teacher> getTeacherById (@PathVariable int id ){
        Teacher teacher = teacherRepo.findById(id).orElseThrow(()-> new NotFound("Teachers Not Exits" + id));
        return  ResponseEntity.ok(teacher);
    }

    @PutMapping("{id}")
    public  ResponseEntity<Teacher> updateTeacher ( @PathVariable int id , @RequestBody Teacher updateTeacherDetails) {
        Teacher updateTeacher = teacherRepo.findById(id).orElseThrow(()->new NotFound("Teacher Not Exists" + id));
        updateTeacher.setName(updateTeacherDetails.getName());
        updateTeacher.setSubject(updateTeacherDetails.getSubject());
        updateTeacher.setHomeDown(updateTeacherDetails.getHomeDown());
        teacherRepo.save(updateTeacher);
        return  ResponseEntity.ok(updateTeacher);
    }

  @DeleteMapping ("{id}")
    public  ResponseEntity<Teacher> deleteTeacher (@PathVariable int id ) {
     Teacher deleteTeacher = teacherRepo.findById(id).orElseThrow(()->new NotFound("Teacher not Exits" + id));
     teacherRepo.delete(deleteTeacher);
      return  new ResponseEntity<>(HttpStatus.NO_CONTENT);

  }

}
