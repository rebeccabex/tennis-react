import React, { Component } from 'react';
import './App.css';

class Settings extends Component {
    render() {
        return (
            <table style={{border: '1px solid black'}}>
                <tr>
                    <td>Sets</td>
                    <td>Final Set</td>
                    <td>Server</td>
                    <td>Random Factor</td>
                    <td>Bonus Factor</td>
                </tr>
            </table>
        )
    }
}


export default Settings;