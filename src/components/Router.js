import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeamPicker from "./TeamPicker";
import NotFound from "./NotFound";
import Counterboard from "./Counterboard";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/react-scoreboard" component={TeamPicker} />
            <Route path="/:kutyafulekiflivel" component={Counterboard} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;