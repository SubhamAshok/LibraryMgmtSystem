package com.abclibrary.library_mgmt_sys.entity;

import java.time.LocalDate;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="books")
@Getter
@Setter
public class Book {
    
    @Id
    @GeneratedValue
    private Long bookId;
    private String bookName;
    private String author;
    private Integer copiesAvailable;
    private LocalDate publishDate;
    private String edition;
    private Integer pages;
}
