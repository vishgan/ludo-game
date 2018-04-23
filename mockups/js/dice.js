


function dice(values) {
	
	var totalProbabilitySum = 0; 

	for(var i = 0; i < values.length; i++) {
		totalProbabilitySum += values[i][1];
	}

	// Ratio used to map the listed probabilites
	// in the values array to the Math.random() number space.
	var probabilityRatio = 1 / totalProbabilitySum;

	var probabilityMap = [];

	var probabilityIterator = 0.0;

	for(i = 0; i < values.length; i++) {
		values[i][1] *= probabilityRatio;

		var valueRange = [probabilityIterator, probabilityIterator + values[i][1]];
		probabilityIterator = valueRange[1];

		probabilityMap.push({ key: values[i][0], valueRange: valueRange });
	}

	var that = {};
	that.probabilityMap = probabilityMap;
	that.rollDice = function() {
		var random = Math.random();

		for(var i in this.probabilityMap) {
			if(random > this.probabilityMap[i].valueRange[0] && random < this.probabilityMap[i].valueRange[1]) {
				var ret = this.probabilityMap[i].key;

				if(typeof ret == 'object') {
					return Object.assign({}, ret);
				} else {
				  return ret;
				}
			}
		}
	}

	return that;
}

// Demo code
$(document).ready(function() {
  // [value, probability of value]
  var diceValues = [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1]
  ];
  
  var weightedDiceValues = [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 10],
    [6, 10]
  ];
  
  var fairDice = dice(diceValues);
  var weightedDice = dice(weightedDiceValues);
  
  $("#diceRoll").on('click', function() {
    var diceValue = fairDice.rollDice();
    $("#diceRollResult").html(diceValue);
    $("#diceRoll").addClass("active");
    $(".dice").attr("class", "dice d-" + diceValue);
  });
  
});