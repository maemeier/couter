import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  // handleIncrement
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
export default Counter;
