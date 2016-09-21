var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
	katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
	var nextPerson = katzDeliLine.shift();
	if (nextPerson) {
		return `Currently serving ${nextPerson}.`
	} else {
		return "There is nobody waiting to be served!"
		}
	}

	function currentLine(katzDeliLine) {
		var line = [];
		for (let i = 0; i < katzDeliLine.length; i++) {
		line.push(` ${katzDeliLine.indexOf(katzDeliLine[i]) + 1}. ${katzDeliLine[i]}`)
		}
		if (line.length > 0) {
		return "The line is currently:" + line
		} else {
			return "The line is currently empty."
		}
	}
