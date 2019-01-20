import React, { Component } from 'react';
import './App.css';
import MatchArea from './MatchArea.jsx';
import Settings from './Settings.jsx';

// interface IAppStates 


class App extends Component <IAppStates> {
    constructor(props) {
        super(props);
        this.state = {
            players: [{
                name: "Player 1",
                rating: 1000
            },
            {
                name: "Player 2",
                rating: 1000
            }]
        }
        
        this.setPlayerDetails = this.setPlayerDetails.bind(this);
    }
    
    setPlayerDetails(updatedPlayers) {
        this.setState({
            players: updatedPlayers
        })
    }
    
    render() {
        return (
            <div className="App">
                <div><MatchArea players={this.state.players} setPlayerDetails={this.setPlayerDetails}/></div>
                <div><Settings /></div>
            </div>
        );
    }
}

export default App;
