const getNextCoords = (row, col, color, cellName='') => {
  if (cellName) {
    if (`lastcell-${color}` === cellName) {
      switch (color) {
        case 'green': return [row, ++col];
        case 'yellow': return [++row, col];
        case 'red': return [--row, col];
        default: return [row, --col];
      }
    }
  }
  if (8 === row) {
    if (1 === col) return [--row, col];
    if (15 === col) return [++row, col];
    return findNextOnVictoryHousePath(row, col);
  }
  if (8 === col) {
    if (15 === row) return [row, --col];
    if (1 === row) return [row, ++col];
    return findNextOnVictoryHousePath(col, row).reverse();
  }
  if (7 === row) {
    if (6 === col) return [--row, ++col];
    if (15 === col) return [++row, col];
    return [row, ++col];
  }
  if (9 === row) {
    if (1 === col) return [--row, col];
    if (10 === col) return [++row, --col];
    return [row, --col];
  }
  if (7 === col) {
    if (1 === row) return [row, ++col];
    if (10 === row) return [--row, --col];
    return [--row, col];
  }
  if (9 === col) {
    if (6 === row) return [++row, ++col];
    if (15 === row) return [row, --col];
    return [++row, col];
  }

  return 'Could not find a valid move';
}

const findNextOnVictoryHousePath = (i, j) => {
  if (j < 6) return [i, ++j];
  if (6 === j | 10 === j) return [0, 0];
  return [i, --j];
};
