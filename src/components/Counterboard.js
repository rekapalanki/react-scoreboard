import React from "react";
import useState from "react";

const Counterboard = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Home</h2>
      <div id="counter-box" onClick={() => setCount(count + 1)}></div>
      <h2>Visitor</h2>
      <div id="counter-box" onClick={() => setCount(count + 1)}></div>
    </div>
  )
}

export default Counterboard;
