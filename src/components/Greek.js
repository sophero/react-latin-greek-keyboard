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
    // let ind = 1 + this.firstDiffIndex(newText, this.state.text);
    let ind = this.cursorPlacer(newText, this.state.text);
    console.log('ind',ind);

    for (let k = 0; k < charMappings.length; k++) {
      // newText = this.replaceKeysWithValues(charMappings[k], newText);
      for (var p in charMappings[k]) {
        if (charMappings[k].hasOwnProperty(p)) {
          if (newText.indexOf(p) > -1) {
            let lenDiff = p.length - charMappings[k][p].length;
            ind -= lenDiff;
          }
          newText = newText.replace(p, charMappings[k][p]);
          // can't have eg. 'a)' in RegExp
          // string = string.replace(RegExp(p), obj[p]);
        }
      }
    }
    this.setState({
      text: newText,
      index: ind
    });
  }

  // replaceKeysWithValues(obj, string) {
  //   for (var p in obj) {
  //     if (obj.hasOwnProperty(p)) {
  //       let lenDiff = obj[p].length - p.length;
  //       string = string.replace(p, obj[p]);
  //       // can't have eg. 'a)' in RegExp
  //       // string = string.replace(RegExp(p), obj[p]);
  //     }
  //   }
  //   return string;
  // }

  cursorPlacer(newStr, oldStr) {
    if (oldStr === newStr) {
      return oldStr.length;
    }
    let len0 = oldStr.length;
    let len1 = newStr.length;
    let maxLen = Math.max(len0, len1);
    let lenDiff = len1 - len0;
    console.log('lenDiff',lenDiff);
    for (let k = 0; k < maxLen; k++) {
      if (oldStr[k] !== newStr[k]) {
        console.log('k', k);
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

  firstDiffIndex(str1, str2) {
    if (str1 === str2) {
      return false;
    }
    let len1 = str1.length;
    let len2 = str2.length;
    let maxLen = Math.max(len1, len2)
    let lenDiff = Math.abs(len1 - len2);
    console.log(lenDiff);
    // if (lenDiff > 1) {
    //   // str1 = str1.split("").reverse().join("");
    //   // str2 = str2.split("").reverse().join("");
    //   for (let k = maxLen; k > -1; k--) {
    //     if (str1[k] !== str2[k]) {
    //       return k;
    //     }
    //   }
    // }
    for (let k = 0; k < maxLen; k++) {
      if (str1[k] !== str2[k]) {
        if (lenDiff > 1) {
          return k;
        }
        //   return len1 - k + lenDiff - 2;
        return k;
      }
    }
  }

}

export default Greek;
