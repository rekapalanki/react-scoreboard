import React from "react";

class TeamPicker extends React.Component {

    myInput1 = React.createRef();
    myInput2 = React.createRef();

    startMatch = (event) => {
        // 1. Prevent the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        //const matchName = `${this.myInput1}-vs-${this.myInput2}-${Date.now()}`;
        const kutyafuleName = `match-${Date.now()}`;
        // 3. Change the page to /team1-vs-team2-Date.now()
        this.props.history.push(`/${kutyafuleName}`);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="jumbotron">
                    <div className="container">
                        <h1>Enter team names</h1>
                    </div>
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
                                ref={this.myInput1}
                                required
                                placeholder="Team1" 
                                defaultValue="Team1" />
                        </div>
                        <div id="formbox2" className="form-box col-xs-4">
                            <input 
                                type="text" 
                                ref={this.myInput2}
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