function takeANumber(katzDeliLine, name) {
	katzDeliLine.push(`${name}`);
	return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
	var shortDeliLine = [];
	if (katzDeliLine.length > 0) {
		shortDeliLine.push(`Currently serving ${katzDeliLine.slice(0, 1)}.`)
		katzDeliLine.shift();
	}
	else if (katzDeliLine.length === 0) {
		return "There is nobody waiting to be served!";
	}
	return shortDeliLine;

	//if (deliLine.length === 0) {
		//return "There is nobody waiting to be served!";
	//} else if (katzDeliLine.length > 0)		
		
}

function currentLine(katzDeliLine) {
	if (katzDeliLine.length > 0) {
		return `The line is currently: 1. ${katzDeliLine.slice(0, 1)}, 2. ${katzDeliLine.slice(1, 2)}, 3. ${katzDeliLine.slice(2, 3)}`
	}
	else return "The line is currently empty."
}