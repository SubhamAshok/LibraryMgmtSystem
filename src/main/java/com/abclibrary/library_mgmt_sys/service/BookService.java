package com.abclibrary.library_mgmt_sys.service;


import java.util.List;

import com.abclibrary.library_mgmt_sys.dto.BookDTO;

public interface BookService {
    
    public abstract List<BookDTO> getAllBooks();
}
