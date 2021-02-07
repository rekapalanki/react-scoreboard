import React from "react";
import useState from "react";


const Counterboard = () => {
  let [count, setCount] = React.useState(0);
  let [count2, setCount2] = React.useState(0);

  /*countHandler = () => {
    setCount(count + 1);
  }*/

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Scoreboard</h1>
      </div>
      <button id="button1" onClick={() => count = 0}>Reset</button>
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
      
      <div class="footer-wrapper">
        <footer>
          <p>Made with ♥ in Budapest ©2020 | (CC 3.0 BY)</p>
        </footer>
      </div>
    </div>


  );
};

export default Counterboard;
