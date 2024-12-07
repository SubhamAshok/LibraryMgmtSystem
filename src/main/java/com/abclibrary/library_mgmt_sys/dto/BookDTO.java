package com.abclibrary.library_mgmt_sys.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BookDTO {

    private Long bookId;
    private String bookName;
    private String author;
    private Integer copiesAvailable;
    private LocalDate publishDate;
    private String edition;
    private Integer pages;

}
