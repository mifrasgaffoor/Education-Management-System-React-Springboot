package com.example.ead.backend.controller;

import com.example.ead.backend.exception.NotFound;
import com.example.ead.backend.model.ClassRoom;
import com.example.ead.backend.repository.ClassRoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v3/classroom")
public class classRoomController {

    //CRUD for Classs Room

    @Autowired
    private   ClassRoomRepo classRoomRepo;


    //Create ClassRoom
    @PostMapping
    public  ClassRoom createClass (@RequestBody ClassRoom classRoom ){
        return  classRoomRepo.save(classRoom);
    }

    //Get ClassRooms
    @GetMapping
    public List<ClassRoom> getAllClassRooms (){
        return  classRoomRepo.findAll();
    }

    // Get ClssRoomByID

  @GetMapping("{id}")
    public ResponseEntity getClassRoomById (@PathVariable int id ){
        ClassRoom classRoom  = classRoomRepo.findById(id).orElseThrow(()->new NotFound("ClassRoom Not Exits"+ id));
        return  ResponseEntity.ok(classRoom);
  }

    // Update ClassRoomByID

    @PutMapping("{id}")
    public ResponseEntity<ClassRoom> updateClass (@PathVariable int id  ,  @RequestBody ClassRoom updateClassDetails){
        ClassRoom updateClass = classRoomRepo.findById(id).orElseThrow(()-> new NotFound("ClassRoom Not Exist" + id));
        updateClass.setClassName(updateClassDetails.getClassName());
        updateClass.setClassDesc(updateClassDetails.getClassDesc());
        classRoomRepo.save(updateClassDetails);
        return  ResponseEntity.ok(updateClassDetails);
    }

    //DELETE ClassRoomById

    @DeleteMapping("{id}")
    public  ResponseEntity <ClassRoom> deleteClassRoom( @PathVariable int id ){
        ClassRoom classRoom = classRoomRepo.findById(id).orElseThrow(()->new NotFound("ClassaRoom Not found" + id));
        classRoomRepo.delete(classRoom);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
