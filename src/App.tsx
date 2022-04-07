import './App.css';

import React, { SyntheticEvent } from 'react';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id: number, event: SyntheticEvent) {
    event.preventDefault();
    console.log('removing id: ' + id);
  }

  render() {
    const id = 12;
    return <button onClick={this.handleClick.bind(this, id)}>Click Me!</button>;
  }
}

export default App;
