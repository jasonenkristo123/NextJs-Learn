import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </section>
  );
}

export default Count;
