import React from "react";

class Counter extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <p>{this.props.counter.value}</p>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}
export default Counter;
