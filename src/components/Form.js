import React from "react";

class Form extends React.Component {

  state = {
  	title: '',
  	author: '',
  	img: ''
  }

  handleAddForm = (e) => {
  	e.preventDefault()

  	this.setState({
  		[e.target.name]: e.target.value
  	}, () => console.log(this.state))
  }

  render() {
    return (
      <div>
    	<h3>Add a new book!</h3>
    	<form onSubmit={(e) => this.props.handleFormSubmit(e, this.state)}>
		  	<input onChange={this.handleAddForm} type="text" name="title" placeholder="title" />
		  	<input onChange={this.handleAddForm} type="text" name="author" placeholder="author" />
		  	<input onChange={this.handleAddForm} type="text" name="img" placeholder="img" />
	  	<input type="submit" />
	  </form>
      </div>
    );
  }
}

export default Form;
