import React, { Component } from 'react';
import './App.css';

class Buttons extends Component {
    render() {
        return (
            <table>
                <input type="button" value="Roll" />
                <input type="button" value="Start" />
                <input type="button" value="Reset" />
                <input type="button" value="Edit" />
            </table>
        )
    }
}

export default Buttons;