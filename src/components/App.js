import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeamPicker from "./TeamPicker";
import Counterboard from "./Counterboard";
import NotFound from "./NotFound";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={TeamPicker} />
            <Route path="/:kutyafulekiflivel" component={Counterboard} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;