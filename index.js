function takeANumber(queue, name) {
	queue.push(name);
	return `Welcome, ${name}. You are number ${queue.length} in line.`;
}
function nowServing(katzDeliLine) {
	if (katzDeliLine.length > 0) {
		return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
	} else {
		return "There is nobody waiting to be served!";
	}
}
function currentLine(katzDeliLine) {
	var clarray = [];
	if (katzDeliLine.length > 0) {
		for (var i = 0; i < katzDeliLine.length; i++) {
			clarray.push(` ${i +1}. ${katzDeliLine[i]}`);
		}
		return `The line is currently:${clarray}`
	} else {
		return "The line is currently empty.";
	}
}
	