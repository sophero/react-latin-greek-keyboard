import React, { Component } from 'react';
// import Textbox from './Textbox';
import romanToGreek from './romanToGreek';
import doubleLetters from './doubleLetters';
import Greek from './Greek';
import Latin from './Latin';

class App extends Component {

  constructor() {
    super();
    this.state = {
      useLatin: true,
      useGreek: false
    }
  }

  render() {
    let langComponent;
    if (this.state.useLatin) {
      langComponent = <Latin />
    } else if (this.state.useGreek) {
      langComponent = <Greek />
    }
    // this.state.useLatin ? textarea = <Latin /> : this.state.useGreek? textarea = <Greek />

    return (
      <div>
        {langComponent}
      </div>
    );
  }


}

export default App;
