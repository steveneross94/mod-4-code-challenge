import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

	state = {
		books: [],
		myBooks: []
	}

	componentDidMount(){
		this.fetchBooks()
	}

	fetchBooks = () => {
		fetch('http://localhost:3005/books')
		.then(r => r.json())
		.then(books => {
			this.setState({ books })
		})
	}

	addToShelf = (id) => {
		console.log('in the method to add', id);
		if (!this.state.myBooks.includes(bId => bId === id)){
			this.setState({
				myBooks: [...this.state.myBooks, id]
			})
		} 
	}

	removeFromShelf = (id) => {
		console.log('in the method to remove')
		let newBookShelf = this.state.myBooks.filter(bId => bId !== id)
		this.setState({ myBooks: newBookShelf })
	}

	handleSubmit = (e, book) => {
		e.preventDefault()
		let newBook = {
			title: book.title,
			author: book.author,
			img: book.img
		}

		this.setState({
			books: [...this.state.books, newBook]
		})
		
	}

	render() {
	let myBookShelf = this.state.myBooks.map(id => this.state.books.find(book => book.id === id))
	return (
		<main>
			<h1>Books</h1>
			<div className="book-container">
			<BookList books={this.state.books} addToShelf={this.addToShelf} handleSubmit={this.handleSubmit}/>
			<Bookshelf myBooks={myBookShelf} removeFromShelf={this.removeFromShelf}/>
			</div>
		</main>
	);
	}
}

export default App;

// need to fetch all books √
// render books on the booklist (hold in state) √
// books clicked from list add to bookshelf √
// books cicked on bookshelf should remove from shelf √
// form should add a book √