function expects(actualCoords, expectedCoords) {
  if (actualCoords.row == expectedCoords.row && actualCoords.col == expectedCoords.col) {
    return console.log('Test passed');
  }
  console.log('Test failed. Expected ', expectedCoords, ' Got ', actualCoords);
}

// Arrow coordinates
// 1, 8, yellow
// 8, 1, green
// 8, 15, blue
// 15, 8, red
(function testArrows() {
  next = getNextCoords(1, 8, 'yellow', 'lastcell-yellow');
  expects(next, { row: 2, col: 8 });

  next = getNextCoords(1, 8, 'green');
  expects(next, { row: 1, col: 9 });

  next = getNextCoords(8, 1, 'green', 'lastcell-green');
  expects(next, { row: 8, col: 2 });

  next = getNextCoords(8, 1, 'red');
  expects(next, { row: 7, col: 1 });

  next = getNextCoords(8, 15, 'blue', 'lastcell-blue');
  expects(next, { row: 8, col: 14 });

  next = getNextCoords(8, 15, 'green');
  expects(next, { row: 9, col: 15 });

  next = getNextCoords(15, 8, 'red', 'lastcell-red');
  expects(next, { row: 14, col: 8 });

  next = getNextCoords(15, 8, 'blue');
  expects(next, { row: 15, col: 7 });
})();



(function testCornerMoves() {
  next = getNextCoords(7, 6);
  expects(next, { row: 6, col: 7 });

  next = getNextCoords(6, 9);
  expects(next, { row: 7, col: 10 });

  next = getNextCoords(10, 7);
  expects(next, { row: 9, col: 6 });

  next = getNextCoords(9, 10);
  expects(next, { row: 10, col: 9 });
})();

(function testWinningMove() {
  next = getNextCoords(8, 6);
  expects(next, { row: 0, col: 0 });

  next = getNextCoords(8, 10);
  expects(next, { row: 0, col: 0 });

  next = getNextCoords(6, 8);
  expects(next, { row: 0, col: 0 });

  next = getNextCoords(10, 8);
  expects(next, { row: 0, col: 0 });
})();

(function testRightMoves() {
  next = getNextCoords(1, 7);
  expects(next, { row: 1, col: 8 });

  next = getNextCoords(7, 1);
  expects(next, { row: 7, col: 2 });

  next = getNextCoords(7, 5);
  expects(next, { row: 7, col: 6 });

  next = getNextCoords(7, 10);
  expects(next, { row: 7, col: 11 });

  next = getNextCoords(7, 14);
  expects(next, { row: 7, col: 15 });

  next = getNextCoords(8, 2);
  expects(next, { row: 8, col: 3 });
})();


(function testLeftMoves() {
  next = getNextCoords(9, 6);
  expects(next, { row: 9, col: 5 });

  next = getNextCoords(9, 2);
  expects(next, { row: 9, col: 1 });

  next = getNextCoords(9, 15);
  expects(next, { row: 9, col: 14 });

  next = getNextCoords(9, 11);
  expects(next, { row: 9, col: 10 });

  next = getNextCoords(15, 9);
  expects(next, { row: 15, col: 8 });

  next = getNextCoords(8, 14);
  expects(next, { row: 8, col: 13 });
})();

(function testUpMoves() {
  next = getNextCoords(15, 7);
  expects(next, { row: 14, col: 7 });

  next = getNextCoords(11, 7);
  expects(next, { row: 10, col: 7 });

  next = getNextCoords(9, 1);
  expects(next, { row: 8, col: 1 });

  next = getNextCoords(6, 7);
  expects(next, { row: 5, col: 7 });

  next = getNextCoords(2, 7);
  expects(next, { row: 1, col: 7 });

  next = getNextCoords(14, 8);
  expects(next, { row: 13, col: 8 });
})();

(function testDownMoves() {
  next = getNextCoords(1, 9);
  expects(next, { row: 2, col: 9 });

  next = getNextCoords(5, 9);
  expects(next, { row: 6, col: 9 });

  next = getNextCoords(7, 15);
  expects(next, { row: 8, col: 15 });

  next = getNextCoords(10, 9);
  expects(next, { row: 11, col: 9 });

  next = getNextCoords(14, 9);
  expects(next, { row: 15, col: 9 });

  next = getNextCoords(2, 8);
  expects(next, { row: 3, col: 8 });
})();
