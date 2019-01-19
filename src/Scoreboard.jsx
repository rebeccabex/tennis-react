import React, { Component } from 'react';
import './App.css';

class Scoreboard extends Component {
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
                <tr>
                    <td>*</td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
        )
    }
}


export default Scoreboard;