import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
  	books: [],
  	bookShelf: [],
  	lastBookId: 0,
  	title: '',
  	author: '',
  	img: ''
  }

  componentDidMount() {

  	fetch('http://localhost:3005/books')
  	  .then(resp => resp.json())
  	  .then(books => {
  	  	this.setState({books})
  	  })
  }

  handleBookClick = (book) => {
  	if(!this.state.bookShelf.includes(book)) {
  	  this.setState({
  		  bookShelf: [...this.state.bookShelf, book]
  	  })
  	 }
  }

  handleBookShelfClick = (bookObj) => {
  	const stateCopy = [...this.state.bookShelf]
  	const newState = stateCopy.filter(book => book.id !== bookObj.id)

  	this.setState({
  		bookShelf: newState
  	})
  }

  handleFormSubmit = (e) => {
  	e.preventDefault()

  	this.setState({ lastBookId: this.state.books.length + 1 })

  	const newBook = {id: this.state.lastBookId, title: this.state.title, author: this.state.author, img: this.state.img}

	if(!this.state.books.includes(newBook)) {
  	  this.setState({
  		books: [newBook, ...this.state.books]
  	  })
  	}
  }

  handleAddForm = (e) => {
  	e.preventDefault()

  	this.setState({
  		[e.target.name]: e.target.value
  	}, () => console.log(this.state))
  }
 
  render() {
    return (
    	<main>
    	  <h1>Angeloz Bookz</h1>
	      <div className="book-container">
	        <BookList handleAddForm={this.handleAddForm} handleFormSubmit={this.handleFormSubmit} handleBookClick={this.handleBookClick} books={this.state.books} />
	        <Bookshelf handleBookShelfClick={this.handleBookShelfClick} books={this.state.bookShelf} />
	      </div>
	    </main>
    );
  }
}

export default App;
