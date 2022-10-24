package com.example.ead.backend.repository;


import com.example.ead.backend.model.ClassRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRoomRepo extends JpaRepository <ClassRoom , Integer>{
}
