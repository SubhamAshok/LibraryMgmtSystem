package com.abclibrary.library_mgmt_sys.controller;

import com.abclibrary.library_mgmt_sys.dto.BookDTO;
import com.abclibrary.library_mgmt_sys.service.BookService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.Endpoint;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class BooksEndpoint {
    
    private BookService bookService;

    BooksEndpoint(BookService bookService){
        this.bookService=bookService;
    }

    public List<BookDTO> getAllBooks() {
        return bookService.getAllBooks();
    }
    
}
