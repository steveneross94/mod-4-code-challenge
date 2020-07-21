import React from "react";

const Book = ({ title, author, img, id, addToShelf, removeFromShelf}) => {


  return (
    <div className="book-card" onClick={() => addToShelf(id)}>
      <h2>{title}</h2>
      <p>{author}</p>
      <img alt={'Maybe something should go here'} src={img} /> 
    </div>
  );
};

export default Book;


// 