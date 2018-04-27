import React from 'react';

export const Dice = ({ diceValue, isRolling, updateDiceValue }) => {
  const rollDice = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const onRoll = () => {
    var value = rollDice();
    updateDiceValue(value);
  };

  return (
    <div class="ludo-field">
      <div class={"dice d-" + diceValue}>
        <button id="diceRoll" class={isRolling && "active"} onClick={onRoll}></button>
        <div id="diceRollResult">{diceValue || "Roll Dice"}</div>
      </div>
    </div>
  );
}
