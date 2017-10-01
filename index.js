var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else if (katzDeliLine.length > 0) {
    var frontOfLine = katzDeliLine.shift();
    return `Currently serving ${frontOfLine}.`;
  }
}

// Refactored solution:
function currentLine(katzDeliLine) {
    if (katzDeliLine.length == 0) {
      return "The line is currently empty.";
    }
    else {
    	return "The line is currently: " + katzDeliLine.map(function(name, index) {
    		return `${index + 1}. ${name}`;
    	}).join(', ');
    }
	}

/* Original solution:
function currentLine(katzDeliLine) {
  var numbersAndNames = [];
    if (katzDeliLine.length == 0) {
      return "The line is currently empty.";
    }
    else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
  return `The line is currently: ${numbersAndNames.join(', ')}`;
}
}
*/
