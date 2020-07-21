import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  
  render() {
    const { books } = this.props 

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form books={this.props.books} handleSubmit={this.props.handleSubmit}/>
        <ul>{books.map(book => 
          <Book key={book.id} {...book} addToShelf={this.props.addToShelf}/>
          )}</ul>
      </div>
    );
  }
}

export default BookList;
