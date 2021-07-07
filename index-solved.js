//Add the name that is entered into the function, and return their place in line

function takeANumber(katzDeliLine, name) {
	katzDeliLine.push(name);
	return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// Create a blank array to house the sentence that is expected so that the function is non-destructive
// Conditional statement to see if there's some one in line
// returns who is being served until there is no one and then say there's no one

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

// return that the line is empty if there is no one in line
// say the current line if there are people

function currentLine(katzDeliLine) {
	if (katzDeliLine.length > 0) {
		return `The line is currently: 1. ${katzDeliLine.slice(0, 1)}, 2. ${katzDeliLine.slice(1, 2)}, 3. ${katzDeliLine.slice(2, 3)}`
	}
	else return "The line is currently empty."
}