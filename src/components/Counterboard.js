import React from "react";
import useState from "react";

class Counterboard extends React.Component {

  count = React.createRef;
  count2 = React.createRef;

  count = 0; 
  count2 = 0;

  countHandler1 = event => {
    let counter = parseFloat(this.count);
    counter++;
    this.count = counter;
    event.target.innerText = counter;
  }

  countHandler2 = event => {
    let counter2 = parseFloat(this.count2);
    counter2++;
    this.count2 = counter2;
    event.target.innerText = counter2;
  }

  /*countHandler = (event) => {
    let value = parseFloat(event.target.innerText);
    value++;
    console.dir(value);
    event.target.innerText = value;
    console.log('Goooooooooooal!');
  }*/

  resetHandler = (event) => {
    console.log(this.count);
    this.count = 0; 
    event.target.parentElement.children[2].children[0].children[1].innerText = 0;
    event.target.parentElement.children[2].children[1].children[1].innerText = 0;
    console.log('Reset value');
  }

  render() {
    return (
      <div className="wrapper">
      <div className="header">
        <h1>Scoreboard</h1>
      </div>
      <button id="button1" onClick={this.resetHandler}>Reset</button>
      <div className="box-container">
        <div id="box1" className="box">
          <h2>Home</h2>
          <div className="counter" onClick={this.countHandler1}>
          {this.count}
          </div>
        </div>
        <div id="box2" className="box">
          <h2>Visitor</h2>
          <div className="counter" onClick={this.countHandler2}>
          {this.count2}
          </div>
        </div>
      </div>
      
      <div className="footer-wrapper">
        <footer>
          <p>Made with ♥ in Budapest ©2020 | (CC 3.0 BY)</p>
        </footer>
      </div>
    </div>
    )
  }
}

/*
const Counterboard = (event) => {
  let [count, setCount] = React.useState(0);
  let [count2, setCount2] = React.useState(0);

  const resetButton = document.querySelector('#button1');
  const resetHandler = () => {
    console.log('it works!');
  }

  const countHandler = () => {
    setCount(count + 1);
  }

  const countHandler2 = () => {
    setCount2(count2 + 1);
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Scoreboard</h1>
      </div>
      <button id="button1" onClick={resetHandler}>Reset</button>
      <div className="box-container">
        <div id="box1" className="box">
          <h2>Home</h2>
          <div className="counter" onClick={countHandler}>
          {count}
          </div>
        </div>
        <div id="box2" className="box">
          <h2>Visitor</h2>
          <div className="counter" onClick={countHandler2}>
          {count2}
          </div>
        </div>
      </div>
      
      <div className="footer-wrapper">
        <footer>
          <p>Made with ♥ in Budapest ©2020 | (CC 3.0 BY)</p>
        </footer>
      </div>
    </div>


  );
};
*/

export default Counterboard;
