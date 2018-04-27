import React, { Component } from 'react';
import { Board, Dice } from '.';

const VICTORY_HOUSE = 'victory_house';

export class Main extends Component {
  safeHouses = ['2-3', '6-12', '8-2', '12-5'];
  initialPositions = {
    player1: ['1-0', '1-1', '3-0', '3-1'],
    player2: ['1-5', '1-6', '3-5', '3-6'],
    player3: ['10-0', '10-1', '12-0', '12-1'],
    player4: ['10-5', '10-6', '12-5', '12-6'],
  };
  state = {
    turn: 'player1',
    diceValue: '',
  };

  updateDiceValue = (diceValue) => {
    this.setState({ diceValue });
    // find new positions of pieces
  };

  render () {
    return (
      <div class="container">
        <Board />
        <Dice diceValue={this.state.diceValue} updateDiceValue={this.updateDiceValue} />
      </div>
    );
  }
}
