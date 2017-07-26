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
    let ind = 1 + this.firstDiffIndex(newText, this.state.text);

    for (let k = 0; k < charMappings.length; k++) {
      newText = this.replaceKeysWithValues(charMappings[k], newText);
    }
    this.setState({
      text: newText,
      index: ind
    });
  }

  replaceKeysWithValues(obj, string) {
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        string = string.replace(p, obj[p]); //assuming only one change at a time!!
        // string = string.replace(RegExp(p), obj[p]);
      }
    }
    return string;
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
