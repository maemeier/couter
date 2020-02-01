import React from "react";

class Counter extends React.Component {
  state = {
    value: this.props.counter.value
  };

  // handleIncrement
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <p>{this.state.value}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}
export default Counter;
