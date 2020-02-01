import React from "react";
import Counter from "./Counter";
class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 10 },
      { id: 4, value: 0 }
    ]
  };

  // handleDelete

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  // handleReset

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    console.log(counter);
  };
  render() {
    return (
      <div>
        Counters Componet
        <button onClick={this.handleReset}>Reset</button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            <h4>Title{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
