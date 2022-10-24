package com.example.ead.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;

    @Column(name="name_of_teacher")
    private  String name ;


    @Column(name = "subject")
    private  String subject;


    @Column(name = "home_down_of_teacher")
    private  String homeDown;


}
