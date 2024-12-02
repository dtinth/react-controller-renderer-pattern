import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <span style={{ flexBasis: "4rem" }}>{count}</span>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
};
