import React from "react";

class Form extends React.Component {

	state = {
		title: "",
		author: "",
		img: ""
	}

	handleTitleChange = (e) => {
		this.setState({
			title: e.target.value
		})
	}

	handleAuthorChange = (e) => {
		this.setState({
			author: e.target.value
		})
	}

	handleImgChange = (e) => {
		this.setState({
			img: e.target.value
		})
	}


  render() {
    return (
      <div>
    	<h3>Add a new book!</h3>
    	<form onSubmit={(e) => this.props.handleSubmit(e,this.state)}>
		  	<input type="text" name="title" placeholder="title" value={this.state.value} onChange={this.handleTitleChange}/>
		  	<input type="text" name="author" placeholder="author" value={this.state.value} onChange={this.handleAuthorChange}/>
		  	<input type="text" name="img" placeholder="img" value={this.state.value} onChange={this.handleImgChange}/>
	  	<input type="submit" />
	  </form>
      </div>
    );
  }
}

export default Form;
