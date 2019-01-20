import React, { Component } from 'react';
import './App.css';

class PlayerRow extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    handleChange(event) {
        var player = {};
        if (event.target.name === "playerName") {
            player = {
                name: event.target.value,
                rating: this.props.player.rating
            }
        } else {
            player = {
                name: this.props.player.name,
                rating: event.target.value
            }
        }
        this.props.changePlayerDetails(player);
    }
    
    render() {
        return (
            <tr>
                <td>*</td>
                <td><input type="number" name="playerRating" value={this.props.player.rating} onChange={this.handleChange}/></td>
                <td><input type="text" name="playerName" value={this.props.player.name} onChange={this.handleChange}/></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        )
    }
}


export default PlayerRow;