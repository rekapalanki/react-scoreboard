import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeamPicker from "./TeamPicker";
import NotFound from "./NotFound";
import App from "./App";

class Router extends React.Component {
    state = {
        team1: "none",
        team2: "none",
    };

    startMatch = (team1, team2) => {
        // 1. Take a copy of state
        const teams = {...this.state};
        // 2. Updating values
        teams.team1 = team1;
        teams.team2 = team2;
        // 3. Updating state
        this.setState({
            team1: teams.team1,
            team2: teams.team2,
        });
        console.log(this.state.team1);
        console.log(teams.team1);
    }

    teamNameRenderer = () => {
        let team1 = this.state.team1;
        console.log(team1);
    }

    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/react-scoreboard" render={() => <TeamPicker startMatch={this.startMatch} authed={true} />} />  
                    <Route path="/:kutyafulekiflivel" render={() => <App teamNameRenderer={this.teamNameRenderer} authed={true} />} />  
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;