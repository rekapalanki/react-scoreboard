import React from "react";
import useState from "react";

const Counterboard = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  /*countHandler = () => {
    setCount(count + 1);
  }*/

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Scoreboard</h1>
      </div>
      <div className="box-container">
        <div id="box1" className="box">
          <h2>Home</h2>
          <div className="counter" onClick={() => setCount(count + 1)}>
          {count}
          </div>
        </div>
        <div id="box2" className="box">
          <h2>Visitor</h2>
          <div className="counter" onClick={() => setCount2(count2 + 1)}>
          {count2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counterboard;
