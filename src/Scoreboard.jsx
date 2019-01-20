import React, { Component } from 'react';
import './App.css';
import PlayerRow from './PlayerRow.jsx';

class Scoreboard extends Component <IScoreboardProps> {
    constructor(props) {
        super(props);
    
        this.changePlayerDetails = this.changePlayerDetails.bind(this);
    }
    
    changePlayerDetails(player) {
        this.props.setPlayerDetails(this.props.players);
    }
    
    render() {
        return (
            <table>
                <tr>
                    <th>Serve</th>
                    <th>Rating</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Games</th>
                    <th>Sets</th>
                </tr>
                <PlayerRow player={this.props.players[0]} changePlayerDetails={this.changePlayerDetails} />
                <PlayerRow player={this.props.players[1]} changePlayerDetails={this.changePlayerDetails} />
            </table>
        )
    }
}


export default Scoreboard;