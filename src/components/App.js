import React, { Component } from 'react';
import Textbox from './Textbox';
import romanToGreek from './romanToGreek';
import doubleLetters from './doubleLetters';

class App extends Component {

  constructor() {
    super();
    this.state = {
      useLatin: false,
      useGreek: true
    }
  }

  render() {
    let langFunc;
    if (this.state.useLatin) {
      langFunc = this.renderLatin;
    } else if (this.state.useGreek) {
      langFunc = this.renderGreek;
    }

    return (
      <Textbox />
    );
  }

  renderLatin() {

  }

  renderGreek() {

  }

}

export default App;
