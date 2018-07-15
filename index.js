function takeANumber(line, name) {
	line.push(name);
	return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
	if (line.length > 0) {
	  return `Currently serving ${line.shift()}.`;
	} else {
	  return "There is nobody waiting to be served!"
	}
}

function currentLine(line) {
	var lineNames = [];
	if (line.length === 0) {
		return "The line is currently empty."
	} else {
		for (var i = 0; i < line.length; i++) {
			lineNames.push(`${i+1}. ${line[i]}`);
			
		}
	}return nameTheLine(lineNames)
}

function nameTheLine(array) {
	if (array.length < 2) {
		return `The line is currently: ${array[0]}`
	} else {
		return "The line is currently: " + array.join(', ')
	}
} 