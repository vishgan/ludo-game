const getNextCoords = (row, col, color, cellName='') => {
  if (cellName) {
    if (`lastcell-${color}` === cellName) {
      switch (color) {
        case 'green': return { row, col: ++col };
        case 'yellow': return { row: ++row, col };
        case 'red': return { row: --row, col };
        default: return { row, col: --col };
      }
    }
  }
  if (8 === row) {
    if (1 === col) return { row: --row, col };
    if (15 === col) return { row: ++row, col };
    return findNextOnVictoryHousePath(row, col);
  }
  if (8 === col) {
    if (15 === row) return { row, col: --col };
    if (1 === row) return { row, col: ++col };
    return findNextOnVictoryHousePath(col, row).reverse();
  }
  if (7 === row) {
    if (6 === col) return { row: --row, col: ++col };
    if (15 === col) return { row: ++row, col };
    return { row, col: ++col };
  }
  if (9 === row) {
    if (1 === col) return { row: --row, col };
    if (10 === col) return { row: ++row, col: --col };
    return { row, col: --col };
  }
  if (7 === col) {
    if (1 === row) return { row, col: ++col };
    if (10 === row) return { row: --row, col: --col };
    return { row: --row, col };
  }
  if (9 === col) {
    if (6 === row) return { row: ++row, col: ++col };
    if (15 === row) return { row, col: --col };
    return { row: ++row, col };
  }

  return 'Could not find a valid move';
}

const findNextOnVictoryHousePath = (i, j) => {
  if (j < 6) return { row: i, col: ++j };
  if (6 === j | 10 === j) return { row: 0, col: 0 };
  return { row: i, col: --j };
};
