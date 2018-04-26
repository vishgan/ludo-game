import React from 'react';

export const Dice = ({ diceValue, updateDiceValue }) => {
  const rollDice = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const onRoll = () => {
    var value = rollDice();
    document.getElementById("diceRoll").setAttribute("class", "active");
    document.getElementsByClassName("dice")[0].setAttribute("class", `dice d-${value}`);
    updateDiceValue(value);
  };

  return (
    <div class="ludo-field">
      <div class="dice">
        <button id="diceRoll" onClick={onRoll}>Roll Dice</button>
        <div id="diceRollResult">{diceValue}</div>
      </div>
    </div>
  );
}
