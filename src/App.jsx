import React, { Component } from 'react';
import './App.css';
import Scoreboard from './Scoreboard.jsx';
import Settings from './Settings.jsx';
import Buttons from './Buttons.jsx';

// interface IAppStates 


class App extends Component <IAppStates> {
    constructor(props) {
        super(props);
        this.state = {
            match: {}
        }
    }
    
    render() {
        return (
            <div className="App">
                <div><Buttons /></div>
                <div><Scoreboard /></div>
                <div><Settings /></div>
            </div>
        );
    }
}

export default App;
