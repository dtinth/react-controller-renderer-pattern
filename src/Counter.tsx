import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import { useState } from "react";

// A controller class holds the state of the component
// in a framework-agnostic way using Nano Stores.
class CounterControler {
  $count = atom(0);
}

// A renderer class encapsulates the complex logic of rendering a component.
// It is similar to a React class component in that it has a `render` method,
// but it is completely stateless and does not inherit from `React.Component`.
// In each render, it is used once and then discarded.
class CounterRenderer {
  // It has 3 parts:
  // (1) The constructor that takes in the props,
  //     allowing it to be later accessed in the later parts.
  constructor(
    private props: {
      number: number;
      decrement: () => void;
      increment: () => void;
    }
  ) {}

  // (2) The top-level `render` method.
  //     This allows the lower-level methods to be declared below it.
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {this.renderDecrementButton()}
        {this.renderNumber()}
        {this.renderIncrementButton()}
      </div>
    );
  }

  // (3) The lower-level private methods that render each part of the component.
  private renderDecrementButton() {
    return <button onClick={this.props.decrement}>-</button>;
  }
  private renderNumber() {
    return <span style={{ flexBasis: "4rem" }}>{this.props.number}</span>;
  }
  private renderIncrementButton() {
    return <button onClick={this.props.increment}>+</button>;
  }
}

// The main component ties the controller and renderer together.
export const Counter = () => {
  const [controller] = useState(() => new CounterControler());
  const { $count } = controller;
  const count = useStore($count);
  return new CounterRenderer({
    number: count,
    decrement: () => $count.set(count - 1),
    increment: () => $count.set(count + 1),
  }).render();
};
