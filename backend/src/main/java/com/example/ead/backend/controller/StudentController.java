package com.example.ead.backend.controller;

import com.example.ead.backend.exception.NotFound;
import com.example.ead.backend.model.Student;
import com.example.ead.backend.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
    @Autowired
    private StudentRepo studentRepo ;

    @GetMapping
    public List<Student> getAllStudents(){
        return  studentRepo.findAll();
    }

    //Create Api
    @CrossOrigin("*")
    @PostMapping
    public Student createStudent(  @RequestBody  Student student ){
    return studentRepo.save(student);
    }

// Build Get Student By ID
    @GetMapping("{id}")
    public ResponseEntity<Student> getStudentById( @PathVariable int id ){
             Student student = studentRepo.findById(id).orElseThrow(()-> new NotFound("Student Not Exits " + id ));
             return  ResponseEntity.ok(student);
    }


 // Build Update Student
    @PutMapping("{id}")
    public  ResponseEntity<Student> updateStudent(  @PathVariable int id , @RequestBody Student updateStudentDetails ){
    Student updateStudent =  studentRepo.findById(id).orElseThrow(()-> new NotFound("Student not found " + id));
        updateStudent.setFirstName(updateStudentDetails.getFirstName());
        updateStudent.setLastName(updateStudentDetails.getLastName());
        updateStudent.setEmailId(updateStudentDetails.getEmailId());
        studentRepo.save(updateStudent);
        return  ResponseEntity.ok(updateStudent);
    }



    //Build Delete Rest Api

    @DeleteMapping("{id}")
    public  ResponseEntity<HttpStatus> deleteStudent ( @PathVariable  int id){
             Student student =  studentRepo.findById(id).orElseThrow(()-> new NotFound("Student not exits" + id));
             studentRepo.delete(student);
             return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
