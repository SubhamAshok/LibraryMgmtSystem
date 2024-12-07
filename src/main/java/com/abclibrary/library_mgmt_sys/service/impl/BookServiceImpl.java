package com.abclibrary.library_mgmt_sys.service.impl;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.abclibrary.library_mgmt_sys.dto.BookDTO;
import com.abclibrary.library_mgmt_sys.entity.Book;
import com.abclibrary.library_mgmt_sys.repository.BookRepository;
import com.abclibrary.library_mgmt_sys.service.BookService;

@Service
public class BookServiceImpl implements BookService {
    
    private BookRepository bookRepository;
    
    BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository=bookRepository;
    }

    public List<BookDTO> getAllBooks(){
        List<Book> booksEntity=bookRepository.findAll();
        List<BookDTO> booksDTO=new ArrayList<>();

        for(Book book: booksEntity){
            BookDTO bookDTO=new BookDTO();
            BeanUtils.copyProperties(book, bookDTO);
            booksDTO.add(bookDTO);
        }
        return booksDTO;
    }
}
