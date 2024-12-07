package com.abclibrary.library_mgmt_sys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abclibrary.library_mgmt_sys.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
    
}
