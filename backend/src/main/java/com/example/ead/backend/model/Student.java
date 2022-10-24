package com.example.ead.backend.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Student {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int id ;

    @Column(name = "first_name")
    private  String firstName ;

    @Column(name = "last_name")
    private  String lastName  ;

    @Column(name = "email_id")
    private  String emailId ;

}
