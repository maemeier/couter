import React from "react";
import Counter from "./Counter";
class Counters extends React.Component {
  render() {
    return (
      <div>
        Counters Componet
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}
export default Counters;
