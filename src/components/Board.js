import React from 'react';

export function Board() {
  return (
    <table id="ludo-board">
      <tr id="row-1">
        <td id="cell-1-1" rowspan="6"></td>
        <td id="cell-1-2" colspan="4" class="player-name">Player 1</td>
        <td id="cell-1-6" rowspan="6"></td>
        <td id="cell-1-7"></td>
        <td id="cell-1-8">
          <i id="arrow-down" class="material-icons">arrow_downward</i>
        </td>
        <td id="cell-1-9"></td>
        <td id="cell-1-10" rowspan="6"></td>
        <td id="cell-1-11" colspan="4" class="player-name">Player 2</td>
        <td id="cell-1-15" rowspan="6"></td>
      </tr>
      <tr id="row-2">
        <td id="cell-2-2" colspan="2" rowspan="2">
          <div class="circle green">
              <img src="images/green.svg" alt="green" />
          </div>
        </td>
        <td id="cell-2-4" colspan="2" rowspan="2">
          <div class="circle green"><img src="images/green.svg" alt="green" /></div>
        </td>
        <td id="cell-2-7"></td>
        <td id="cell-2-8"></td>
        <td id="cell-2-9"></td>
        <td id="cell-2-11" colspan="2" rowspan="2">
          <div class="circle yellow"><img src="images/yellow.svg" alt="green" /></div>
        </td>
        <td id="cell-2-13" colspan="2" rowspan="2">
          <div class="circle yellow"><img src="images/yellow.svg" alt="green" /></div>
        </td>
      </tr>
      <tr id="row-3">
        <td id="cell-3-7">
          <i class="material-icons star-icon">star_border</i>
        </td>
        <td id="cell-3-8"></td>
        <td id="cell-3-9"></td>
      </tr>
      <tr id="row-4">
        <td id="cell-4-2" colspan="2" rowspan="2">
          <div class="circle green"><img src="images/green.svg" alt="green" /></div>
        </td>
        <td id="cell-4-4" colspan="2" rowspan="2">
          <div class="circle green"><img src="images/green.svg" alt="green" /></div>
        </td>
        <td id="cell-4-7"></td>
        <td id="cell-4-8"></td>
        <td id="cell-4-9"></td>
        <td id="cell-4-11" colspan="2" rowspan="2">
          <div class="circle yellow"><img src="images/yellow.svg" alt="green" /></div>
        </td>
        <td id="cell-4-13" colspan="2" rowspan="2">
          <div class="circle yellow"><img src="images/yellow.svg" alt="green" /></div>
        </td>
      </tr>
      <tr id="row-5">
        <td id="cell-5-7"></td>
        <td id="cell-5-8"></td>
        <td id="cell-5-9"></td>
      </tr>
      <tr id="row-6">
        <td id="cell-6-2" colspan="4"></td>
        <td id="cell-6-7"></td>
        <td id="cell-6-8"></td>
        <td id="cell-6-9"></td>
        <td id="cell-6-11" colspan="4"></td>
      </tr>
      <tr id="row-7">
        <td id="cell-7-1"></td>
        <td id="cell-7-2"></td>
        <td id="cell-7-3"></td>
        <td id="cell-7-4"></td>
        <td id="cell-7-5"></td>
        <td id="cell-7-6"></td>
        <td id="cell-7-7" colspan="3" rowspan="3">
          <div class="center-pattern"></div>
        </td>
        <td id="cell-7-10"></td>
        <td id="cell-7-11"></td>
        <td id="cell-7-12"></td>
        <td id="cell-7-13">
          <i class="material-icons star-icon">star_border</i>
        </td>
        <td id="cell-7-14"></td>
        <td id="cell-7-15"></td>
      </tr>
      <tr id="row-8">
        <td id="cell-8-1">
          <i id="arrow-forward" class="material-icons">arrow_forward</i>
        </td>
        <td id="cell-8-2"></td>
        <td id="cell-8-3"></td>
        <td id="cell-8-4"></td>
        <td id="cell-8-5"></td>
        <td id="cell-8-6"></td>
        <td id="cell-8-10"></td>
        <td id="cell-8-11"></td>
        <td id="cell-8-12"></td>
        <td id="cell-8-13"></td>
        <td id="cell-8-14"></td>
        <td id="cell-8-15">
          <i id="arrow-back" class="material-icons">arrow_back</i>
        </td>
      </tr>
      <tr id="row-9">
        <td id="cell-9-1"></td>
        <td id="cell-9-2"></td>
        <td id="cell-9-3">
          <i class="material-icons star-icon">star_border</i>
        </td>
        <td id="cell-9-4"></td>
        <td id="cell-9-5"></td>
        <td id="cell-9-6"></td>
        <td id="cell-9-10"></td>
        <td id="cell-9-11"></td>
        <td id="cell-9-12"></td>
        <td id="cell-9-13"></td>
        <td id="cell-9-14"></td>
        <td id="cell-9-15"></td>
      </tr>
      <tr id="row-10">
        <td id="cell-10-1" rowspan="6"></td>
        <td id="cell-10-2" colspan="4"></td>
        <td id="cell-10-6" rowspan="6"></td>
        <td id="cell-10-7"></td>
        <td id="cell-10-8"></td>
        <td id="cell-10-9"></td>
        <td id="cell-10-10" rowspan="6"></td>
        <td id="cell-10-11" colspan="4"></td>
        <td id="cell-10-15" rowspan="6"></td>
      </tr>
      <tr id="row-11">
        <td id="cell-11-2" colspan="2" rowspan="2">
          <div class="circle red"><img src="images/red.svg" alt="green" /></div>
        </td>
        <td id="cell-11-4" colspan="2" rowspan="2">
          <div class="circle red"><img src="images/red.svg" alt="green" /></div>
        </td>
        <td id="cell-11-7"></td>
        <td id="cell-11-8"></td>
        <td id="cell-11-9"></td>
        <td id="cell-11-10" colspan="2" rowspan="2">
          <div class="circle blue"><img src="images/blue.svg" alt="green" /></div>
        </td>
        <td id="cell-11-13" colspan="2" rowspan="2">
          <div class="circle blue"><img src="images/blue.svg" alt="green" /></div>
        </td>
      </tr>
      <tr id="row-12">
        <td id="cell-12-7"></td>
        <td id="cell-12-8"></td>
        <td id="cell-12-9"></td>
      </tr>
      <tr id="row-13">
        <td id="cell-13-2" colspan="2" rowspan="2">
          <div class="circle red"><img src="images/red.svg" alt="green" /></div>
        </td>
        <td id="cell-13-4" colspan="2" rowspan="2">
          <div class="circle red"><img src="images/red.svg" alt="green" /></div>
        </td>
        <td id="cell-13-7"></td>
        <td id="cell-13-8"></td>
        <td id="cell-13-9">
          <i class="material-icons star-icon">star_border</i>
        </td>
        <td id="cell-13-10" colspan="2" rowspan="2">
          <div class="circle blue"><img src="images/blue.svg" alt="green" /></div>
        </td>
        <td id="cell-13-13" colspan="2" rowspan="2">
          <div class="circle blue"><img src="images/blue.svg" alt="green" /></div>
        </td>
      </tr>
      <tr id="row-14">
        <td id="cell-14-7"></td>
        <td id="cell-14-8"></td>
        <td id="cell-14-9"></td>
      </tr>
      <tr id="row-15">
        <td id="cell-15-2" colspan="4" class="player-name">Player 3</td>
        <td id="cell-15-7"></td>
        <td id="cell-15-8">
          <i id="arrow-up" class="material-icons">arrow_upward</i>
        </td>
        <td id="cell-15-9"></td>
        <td id="cell-15-11" colspan="4" class="player-name">Player 4</td>
      </tr>
    </table>
  );
}
