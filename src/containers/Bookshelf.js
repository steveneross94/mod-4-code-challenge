import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const { myBooks, removeFromShelf } = props
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{myBooks.map(book => 
      <>
        <Book key={book.id} {...book} removeFromShelf={removeFromShelf}/>
        <button onClick={() => removeFromShelf(book.id)}>Remove</button>
      </>
      )}
       
        </ul>
    </div>
  );
};

export default Bookshelf;


