import React, { Component } from 'react';
import { Board, Dice } from '.';

const VICTORY_HOUSE = 'victory_house';

export class Main extends Component {
  players = ['p1', 'p2', 'p3', 'p4'];
  safeHouses = ['2-3', '6-12', '8-2', '12-5'];
  initialPositions = {
    [this.players[0]+'-1']: '1-0',
    [this.players[0]+'-2']: '1-1',
    [this.players[0]+'-3']: '3-0',
    [this.players[0]+'-4']: '3-1',
    [this.players[1]+'-1']: '1-5',
    [this.players[1]+'-2']: '1-6',
    [this.players[1]+'-3']: '3-5',
    [this.players[1]+'-4']: '3-6',
    [this.players[2]+'-1']: '10-0',
    [this.players[2]+'-2']: '10-1',
    [this.players[2]+'-3']: '12-0',
    [this.players[2]+'-4']: '12-1',
    [this.players[3]+'-1']: '10-5',
    [this.players[3]+'-2']: '10-6',
    [this.players[3]+'-3']: '12-5',
    [this.players[3]+'-4']: '12-6',
  };
  state = {
    turn: this.players[0],
    diceValue: '',
    isRolling: false,
    pawnPositions: this.initialPositions,
  };

  updateDiceValue = (diceValue) => {
    this.setState({ diceValue });
    // find new positions of pieces
  };

  render () {
    const { isRolling, diceValue } = this.state;

    return (
      <div class="container">
        <Board />
        <Dice diceValue={diceValue} isRolling={isRolling} updateDiceValue={this.updateDiceValue} />
      </div>
    );
  }
}
