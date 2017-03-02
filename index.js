function takeANumber(katzDeliLine, newPerson) {
	katzDeliLine.push(newPerson)
	return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
	if (katzDeliLine.length > 0) {
		var nowUp = [katzDeliLine[0]]
		katzDeliLine.shift()
		return `Currently serving ${nowUp}.`
	}
	else return 'There is nobody waiting to be served!'
}

function currentLine(katzDeliLine) {
	var currentLine = []
	if (katzDeliLine.length > 0) {
		for (var i = 0; i < katzDeliLine.length; i++) {
		currentLine.push(`${i+1}. ${katzDeliLine[i]}`)
		}
		var currentLineJoin = currentLine.join(', ')
		return ("The line is currently: " + currentLineJoin)
	}	else return 'The line is currently empty.'
}
