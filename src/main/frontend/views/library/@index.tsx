import { Button, Grid, GridElement, GridSelectionColumn, GridSortColumn, TextField, TextFieldChangeEvent, TextFieldElement, TextFieldValueChangedEvent } from "@vaadin/react-components";
import BookDTO from "Frontend/generated/com/abclibrary/library_mgmt_sys/dto/BookDTO";
import { BooksEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useRef, useState } from "react";

export default function ViewBooks() {
    let author = useRef<TextFieldElement>(null);
    let bookName = useRef<TextFieldElement>(null);
    let [booksSelected, setBooksSelected] = useState<BookDTO[]>([]);
    let [books, setBooks] = useState<BookDTO[]>([]);
    let [filteredBooks, setFilteredBooks] = useState<BookDTO[]>([]);
    
    let search = () => {
        setFilteredBooks(books.filter((book)=>{
          return book.author?.toLowerCase().includes(author?.current?.value??''.toLowerCase()) && 
          book.bookName?.toLowerCase().includes(bookName?.current?.value??''.toLowerCase())
        }));
    }

    useEffect(()=>{
      BooksEndpoint.getAllBooks().then((books)=>{setBooks(books); setFilteredBooks(books);});
    },[])
    return (
      <div className="gap-s p-xs px-m">
        <div className="flex flex-row gap-xl items-center justify-center p-s">
          <TextField label="Book Name" className="self-center" ref={bookName}></TextField>
          <TextField label="Author" className="self-center" ref={author}></TextField>
          <Button className="self-end" onClick={search}>Search</Button>
        </div>
        <Grid
          items={filteredBooks}
          onSelectedItemsChanged={(e)=>{setBooksSelected(e.detail.value)}}
        >
          <GridSelectionColumn />
          <GridSortColumn path="bookName" />
          <GridSortColumn path="author" />
          <GridSortColumn path="copiesAvailable" />
          <GridSortColumn path="publishDate" />
          <GridSortColumn path="edition" />
          <GridSortColumn path="pages" />
        </Grid>
        
        <Button className="self-end" theme={booksSelected.length>0?'primary':'secondary'} >Issue</Button>
      </div>
    );
  }