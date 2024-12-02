import { useState } from "react";

export const Counter = () => {
  // As a React component grows in scope, it might have 3 main parts.
  // (1) State management and preparing all the data needed for rendering.
  const [number, setNumber] = useState(0);
  const increment = () => setNumber((count) => count + 1);
  const decrement = () => setNumber((count) => count - 1);

  // (2) The top-level rendering function.
  //     It is declared here so that lower-level functions can be defined below it.
  const render = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {renderDecrementButton()}
        {renderNumber()}
        {renderIncrementButton()}
      </div>
    );
  };

  // (3) The lower-level functions that render each part of the component.
  const renderDecrementButton = () => {
    return <button onClick={decrement}>-</button>;
  };
  const renderNumber = () => {
    return <span style={{ flexBasis: "4rem" }}>{number}</span>;
  };
  const renderIncrementButton = () => {
    return <button onClick={increment}>+</button>;
  };

  // Finally, the top-level rendering function is called to render the component.
  return render();
};
