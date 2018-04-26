import React, { Component } from 'react';
import { Board, Dice } from '.';

const PLAYER_1 = 'player1';
const PLAYER_2 = 'player2';
const PLAYER_3 = 'player3';
const PLAYER_4 = 'player4';
const VICTORY_HOUSE = 'victory_house';

export class Main extends Component {
  safeHouses = ['2-3', '6-12', '8-2', '12-5'];
  initialPositions = {
    [PLAYER_1]: ['1-0', '1-1', '3-0', '3-1'],
    [PLAYER_2]: ['1-5', '1-6', '3-5', '3-6'],
    [PLAYER_3]: ['10-0', '10-1', '12-0', '12-1'],
    [PLAYER_4]: ['10-5', '10-6', '12-5', '12-6'],
  };
  state = {
    turn: PLAYER_1,
    diceValue: '',
    piecePositions: {
      [PLAYER_1]: {
        piece1: this.initialPositions[PLAYER_1][0],
        piece2: this.initialPositions[PLAYER_1][1],
        piece3: this.initialPositions[PLAYER_1][2],
        piece4: this.initialPositions[PLAYER_1][3],
      },
      [PLAYER_2]: {
        piece1: this.initialPositions[PLAYER_2][0],
        piece2: this.initialPositions[PLAYER_2][1],
        piece3: this.initialPositions[PLAYER_2][2],
        piece4: this.initialPositions[PLAYER_2][3],
      },
      [PLAYER_3]: {
        piece1: this.initialPositions[PLAYER_3][0],
        piece2: this.initialPositions[PLAYER_3][1],
        piece3: this.initialPositions[PLAYER_3][2],
        piece4: this.initialPositions[PLAYER_3][3],
      },
      [PLAYER_4]: {
        piece1: this.initialPositions[PLAYER_4][0],
        piece2: this.initialPositions[PLAYER_4][1],
        piece3: this.initialPositions[PLAYER_4][2],
        piece4: this.initialPositions[PLAYER_4][3],
      },
    },
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
