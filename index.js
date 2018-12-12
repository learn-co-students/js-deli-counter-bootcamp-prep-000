function takeANumber(katzDeli, name) {
	katzDeli.push(name);
	return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
	if (katzDeli.length === 0) {
		return "There is nobody waiting to be served!"
	} else if (katzDeli.length > 0) {
		var shiftedKatz = `Currently serving ${katzDeli.slice(0, katzDeli.length - 2)}.`;
		katzDeli.shift();
	} return shiftedKatz;
}

function currentLine(katzDeli) {
	var line = [];
	if (katzDeli.length === 0) {
		return "The line is currently empty.";
	} else if (katzDeli.length > 0) {
		for (var i = 0; i < katzDeli.length; i++) {
			if (i === 0) {
					line.push(`The line is currently: ${i+1}. ${katzDeli.slice(i, i+1)}`);
				}
			else if (i > 0) {
					line.push(` ${i+1}. ${katzDeli[i]}`);
				}
			}
		} return line.toString();
	}
