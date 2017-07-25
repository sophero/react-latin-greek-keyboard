import React, { Component } from 'react';
import Greek from './Greek';
import Latin from './Latin';

class App extends Component {

  constructor() {
    super();
    this.state = {
      useLatin: false,
      useGreek: true
    }
  }

  render() {
    let langComponent;
    if (this.state.useLatin) {
      langComponent = <Latin />
    } else if (this.state.useGreek) {
      langComponent = <Greek />
    }

    return (
      <div>
        {langComponent}
      </div>
    );
  }


}

export default App;
