function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + array.shift() + '.';
  }
}

function currentLine(katzDeli) {
  var line = [];
  
if (katzDeli.length === 0) {
		return 'The line is currently empty.';
	} else {
		var currentLineStrings = [];
		for (var i = 0; i < katzDeli.length; i++) {
			currentLineStrings.push(i + 1 + '. ' + katzDeli[i]);
		}
		return 'The line is currently: ' + currentLineStrings.join(', ');
	}
}