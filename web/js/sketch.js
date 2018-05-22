(function() {
  var container = $('#ludo-container');

  window.drawBoard = function() {
    drawTable();

    drawPlayerHome(1, 1, 'green');
    drawPlayerHome(1, 10, 'yellow');
    drawPlayerHome(10, 1, 'red');
    drawPlayerHome(10, 10, 'blue');

    drawBoardCenter();
    drawStars();
    drawArrows();
  }

  function drawTable() {
    var i, j, html;
    html = '<table id="ludo-board">';
    for (i = 1; i <= 15; i++) {
      html += '<tr>';
      for (j = 1; j <= 15; j++) {
        html += `
          <td id="cell-${i}-${j}"></td>
        `;
      }
      html += '</tr>';
    }
    html += '</table>';

    container.html(html);
  }

  function drawPlayerHome(startRow, startCol, color) {
    var i, cells, pieceCoordinates, pieceRow, pieceCol;

    $(`
      #cell-${startRow}-${startCol},
      #cell-${startRow}-${startCol + 5}
    `)
      .prop('rowspan', 6);

    cells = [];
    for (i = 1; i < 6; i++) {
      cells.push(`#cell-${startRow + i}-${startCol}`);
      cells.push(`#cell-${startRow + i}-${startCol + 5}`);
    }
    $(cells.join(',')).remove();

    $(`
      #cell-${startRow}-${startCol + 1},
      #cell-${startRow + 5}-${startCol + 1}
    `).prop('colspan', 4);

    cells = [];
    for (i = 1; i < 4; i++) {
      cells.push(`#cell-${startRow}-${startCol + i + 1}`);
      cells.push(`#cell-${startRow + 5}-${startCol + i + 1}`);
    }
    $(cells.join(',')).remove();

    drawHomePieces(startRow, startCol, color);
  }

  function drawHomePieces(startRow, startCol, color) {
    pieceRow = startRow + 1;
    pieceCol = startCol + 1;
    pieceCoordinates = [
      { row: startRow + 1, col: startCol + 1 },
      { row: startRow + 1, col: startCol + 3 },
      { row: startRow + 3, col: startCol + 1 },
      { row: startRow + 3, col: startCol + 3 }
    ];

    for (i = 0; i < pieceCoordinates.length; i++) {
      pieceRow = pieceCoordinates[i]['row'];
      pieceCol = pieceCoordinates[i]['col'];

      $(`#cell-${pieceRow}-${pieceCol}`)
        .prop('rowspan', 2)
        .prop('colspan', 2)
        .html(`
          <div class="circle ${color}"><img src="images/${color}.svg" alt="${color}" /></div>
        `);

      $(`
        #cell-${pieceRow}-${pieceCol + 1},
        #cell-${pieceRow + 1}-${pieceCol},
        #cell-${pieceRow + 1}-${pieceCol + 1}
      `).remove();
    }
  }

  function drawBoardCenter() {
    var cells = [];

    $('#cell-7-7')
      .prop('rowspan', 3)
      .prop('colspan', 3)
      .html('<div class="center-pattern"></div>');

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (i == 0 && j == 0) {
          continue;
        }
        cells.push('#cell-' + (i + 7) + '-' + (j + 7));
      }
    }
    $(cells.join(',')).remove();
  }

  function drawStars() {
    $(`
      #cell-3-7,
      #cell-7-13,
      #cell-9-3,
      #cell-13-9
    `).html('<i class="material-icons star-icon">star_border</i>');
  }

  function drawArrows() {
    $('#cell-1-8').html('<i id="arrow-down" class="material-icons">arrow_downward</i>');
    $('#cell-8-1').html('<i id="arrow-forward" class="material-icons">arrow_forward</i>');
    $('#cell-8-15').html('<i id="arrow-back" class="material-icons">arrow_back</i>');
    $('#cell-15-8').html('<i id="arrow-up" class="material-icons">arrow_upward</i>');
  }
})();
