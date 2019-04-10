import React from "react";

class Form extends React.Component {

  state = {
  	clicked: false
  }

  handleClick = () => {
  	this.setState({
  	  clicked: true
  	}, () => this.changeModalStyling())
  }

  changeModalStyling = () => {
	if (this.state.clicked) {
		this.refs.modalRef.style = "display: block"
	}
  }

  closeModal = () => {
  	this.refs.modalRef.style = "display: none"

  	this.setState({
  		clicked: false
  	})
  }

  generateModalHtml = () => {
  	if (this.state.clicked === true) {
	  	return (
	  	  <div ref="modalRef" id="myModal" className="modal">
			<div className="modal-content">
			  <button onClick={() => this.closeModal()} className="close">X</button>
		      <form onSubmit={this.props.handleFormSubmit}>
		      	<input type="text" name="title" placeholder="title" />
		      	<input type="text" name="author" placeholder="author" />
		      	<input type="text" name="img" placeholder="img" />
		      	<input type="submit" />
		      </form>
		    </div>
		  </div>
  		)
  	}
  }

  render() {
    return (
      <div>
    	<h3 onClick={this.handleClick}>Add a new book!</h3>
    	{this.state.clicked ? this.generateModalHtml() : null}
      </div>
    );
  }
}

export default Form;
