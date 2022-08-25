import React from "react";
import Counterboard from "./Counterboard";

class App extends React.Component {
    render () {
      return (
//        <Counterboard teamNameRenderer={this.props.teamNameRenderer} />
        <Counterboard teamNameRenderer={this.props.teamNameRenderer} />
      )
  }
}

export default App;
