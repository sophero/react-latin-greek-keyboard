import React, { Component } from 'react';
import charMappings from './charMappings';
import '../css/textbox.css';

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
        className="textbox"
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
    let ind = this.cursorPlacer(newText, this.state.text);
    for (let k = 0; k < charMappings.length; k++) {
      for (var p in charMappings[k]) {
        if (charMappings[k].hasOwnProperty(p)) {
          if (newText.indexOf(p) > -1) {
            let lenDiff = p.length - charMappings[k][p].length;
            ind -= lenDiff;
          }
          newText = newText.replace(p, charMappings[k][p]);
        }
      }
    }
    this.setState({
      text: newText,
      index: ind
    });
  }

  cursorPlacer(newStr, oldStr) {
    if (oldStr === newStr) {
      return oldStr.length;
    }
    let lenDiff = newStr.length - oldStr.length;
    let maxLen = Math.max(newStr.length, oldStr.length);

    for (let k = 0; k < maxLen; k++) {
      if (oldStr[k] !== newStr[k]) {
        if (lenDiff > 1) {
          return k + lenDiff;
        } else if (lenDiff >= 0) {
          return k + 1;
        } else {
          return k;
        }
      }
    }
  }

}

export default Greek;
