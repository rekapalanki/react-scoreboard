import React from "react";

class Counterboard extends React.Component {

  constructor (props) {
    super(props);
    this.count = React.createRef;
    this.count2 = React.createRef;
    this.count = 0; 
    this.count2 = 0;
  }
  
  componentDidMount() {
    console.log(this.props.teamNameRenderer());
  }

  countHandler = (event) => {
    let value = parseFloat(event.target.innerText);
    value++;
    event.target.innerText = value;
    console.log('Goooooooooooal!');
  }

  resetHandler = (event) => {
    event.preventDefault();
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
          <h2>Home {this.props.team_one} </h2>
          <div className="counter" id="team1" onClick={this.countHandler}>
          {this.count}
          </div>
        </div>
        <div id="box2" className="box">
          <h2>Visitor</h2>
          <div className="counter" id="team2" onClick={this.countHandler}>
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

export default Counterboard;
