import React, { SyntheticEvent } from 'react';

export interface Props {
  name: string;
  level?: number;
}

interface State {
  currentLevel: number;
}

class Hello extends React.Component<Props, State> {
  state = { currentLevel: this.props.level || 1 };

  onIncrement = (event: SyntheticEvent) => {
    console.log(event);
    this.updateLevel(1);
  };
  onDecrement = (event: SyntheticEvent) => {
    console.log(event.target);
    this.updateLevel(-1);
  };

  render() {
    const { name } = this.props;

    if (this.state.currentLevel <= 0) {
      throw new Error('GIT GUD');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getMarks(this.state.currentLevel)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  updateLevel(change: number) {
    this.setState((currentState) => {
      return { currentLevel: currentState.currentLevel + change };
    });
  }
}

export default Hello;

function getMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
