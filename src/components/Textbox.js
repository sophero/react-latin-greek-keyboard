import React, { Component } from 'react';

class Textbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.updateText = this.updateText.bind(this);
  }

  render() {
    return(
      <textarea
        onChange={this.updateText}
        value={this.state.text}
        placeholder="Type your text here."
      >
      </textarea>
    );
  }

  updateText(event) {
    let newText = event.target.value;
    console.log(newText);
    this.setState({ text: newText });
  }
}

export default Textbox;
