import React, { Component } from 'react';
import romanToGreek from './romanToGreek';
import doubleLetters from './doubleLetters';

class Greek extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      index: 0
    }
    this.updateText = this.updateText.bind(this);
  }

  render() {
    return(
      <textarea
        onChange={this.updateText}
        value={this.state.text}
        placeholder="Type your text here."
        ref={(input) => { this.textArea = input; }}
      >
      </textarea>
    );
  }

  componentDidMount() {
    this.textArea.focus();
  }

  componentDidUpdate() {
    this.textArea.setSelectionRange(this.state.index, this.state.index);
  }

  updateText(event) {
    let newText = event.target.value;
    let ind = 1 + this.firstDiffIndex(newText, this.state.text);
    for (var p in romanToGreek) {
      if (romanToGreek.hasOwnProperty(p)) {
        newText = newText.replace(RegExp(p), romanToGreek[p]);
      }
    }
    this.setState({
      text: newText,
      index: ind
    });
  }

  firstDiffIndex(str1, str2) {
    if (str1 === str2) {
      return false;
    }
    for (var k = 0; k < str1.length; k++) {
      if (str1[k] !== str2[k]) {
        return k;
      }
    }
    return k;
  }


}

export default Greek;
