/*var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  return `Welcome, ${newName}. You are number ${katzDeliLine.length + 1} in line.`;
  katzDeliLine.push(newName);
}

function nowServing() {
  if(katzDeli.length !== 0) {
    return katzDeli.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine() {
  var line = [];
  if(katzDeli.length !== 0) {
    for(var i = 0; i < katzDeli.length; i += 1) {
      line.push(`${[i+1]}.${katzDeli[i]}`);
    }
  } else {
    return "The line is currently empty."
  }
  return `The line is currently: ${line.join(", ")}`;
}*/


var line = []

function takeANumber(line, name) {
	line.push(name)

	return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line) {
	if(!line.length) {
		return `There is nobody waiting to be served!`
	} else {
		return `Currently serving ${line.shift()}.`
	}
};

function currentLine(line) {
	if(!line.length) {
		return `The line is currently empty.`
	} else {
		var numbersAndNames = []

		for (let i = 0; i < line.length; i += 1) {
			numbersAndNames.push(`${i + 1}. ${line[i]}`)
		}
	}
	return `The line is currently: ${numbersAndNames.join(", ")}`
};
