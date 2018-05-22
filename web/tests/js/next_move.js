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
  next = getNextCoords(1, 8, 'yellow');
  expects(next, { row: 2, col: 8 });

  coords = getNextCoords(1, 8, 'green');
  expects(next, { row: 1, col: 9 });

  coords = getNextCoords(8, 1, 'green');
  expects(next, { row: 8, col: 2 });

  coords = getNextCoords(8, 1, 'red');
  expects(next, { row: 9, col: 1 });

  coords = getNextCoords(8, 15, 'blue');
  expects(next, { row: 8, col: 14 });

  coords = getNextCoords(8, 15, 'green');
  expects(next, { row: 9, col: 15 });

  coords = getNextCoords(15, 8, 'red');
  expects(next, { row: 14, col: 8 });

  coords = getNextCoords(15, 8, 'blue');
  expects(next, { row: 15, col: 7 });
})();
