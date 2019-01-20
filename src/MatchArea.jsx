import React, { Component } from 'react';
import './App.css';
import Scoreboard from './Scoreboard.jsx';
import Buttons from './Buttons.jsx';



class MatchArea extends Component {
    constructor(props) {
        super(props);
    
        this.setPlayerDetails = this.setPlayerDetails.bind(this);
    }

    setPlayerDetails(player) {
        this.props.setPlayerDetails(this.props.players);
    }

    render() {
        return (
            <div>
                <div><Buttons /></div>
                <div><Scoreboard players={this.props.players} setPlayerDetails={this.setPlayerDetails}/></div>
            </div>
        )
    }
}

export default MatchArea;
