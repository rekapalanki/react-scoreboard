import React from "react";
import useState from "react";

const Counterboard = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Scoreboard</h1>
      </div>
      <div className="container">
        <div id="box1">
          <h2>Home</h2>
          <div className="counter-box" onClick={() => setCount(count + 1)}>
          {count}
          </div>
        </div>
        <div id="box2">
          <h2>Visitor</h2>
          <div className="counter-box" onClick={() => setCount2(count2 + 1)}>
          {count2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counterboard;
