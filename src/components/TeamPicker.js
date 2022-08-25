import React from "react";

class TeamPicker extends React.Component {

    team1Ref = React.createRef();
    team2Ref = React.createRef();

    startMatch = (event) => {
        // 1. Prevent the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const teamOne = this.team1Ref.current.value;
        const teamTwo = this.team2Ref.current.value;
        const kutyafuleName = `${teamOne}-vs-${teamTwo}`;
        // 3. Change the page to /team1-vs-team2-Date.now()
        this.props.history.push(`/${kutyafuleName}`);
        console.log(this.team1Ref);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h1>Enter team names</h1>
                </div>
                <div className="box-container container">
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                    <form className="team-selector row" onSubmit={this.startMatch}>
                        <div id="formbox1" className="form-box col-xs-4">
                            <input 
                                type="text" 
                                ref={this.team1Ref}
                                required
                                placeholder="Team1" 
                                defaultValue="Team1" />
                        </div>
                        <div id="formbox2" className="form-box col-xs-4">
                            <input 
                                type="text" 
                                ref={this.team2Ref}
                                required
                                placeholder="Team2" 
                                defaultValue="Team2" />
                        </div>
                        <button id="button1" type="submit">Let the match begin!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TeamPicker;

/*
class TeamPicker extends React.Component {

    team1Ref = React.createRef();
    team2Ref = React.createRef();

    getName = (event) => {
        // 1. Prevent the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const team1 = this.team1Ref.current.value;
        const team2 = this.team2Ref.current.value;
        // Starting match
        this.props.startMatch(team1, team2);
        // Creating new page name
        const kutyafuleName = `${team1}-vs-${team2}`;
        // 3. Change the page to /match-team1-vs-team2
//        this.props.history.push(`/${kutyafuleName}`);     // since TeamPicker is called via render={} props and not inserted as a component={} props, this syntax won't work
        window.location.href = `/${kutyafuleName}`;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h1>Enter team names</h1>
                </div>
                <div className="box-container container">
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                    <form className="team-selector row" onSubmit={this.getName}>
                        <div id="formbox1" className="form-box col-xs-4">
                            <input 
                                type="text" 
                                ref={this.team1Ref}
                                required
                                placeholder="Team1" 
                                defaultValue="Team1" />
                        </div>
                        <div id="formbox2" className="form-box col-xs-4">
                            <input 
                                type="text" 
                                ref={this.team2Ref}
                                required
                                placeholder="Team2" 
                                defaultValue="Team2" />
                        </div>
                        <button id="button1" type="submit">Let the match begin!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TeamPicker;
*/