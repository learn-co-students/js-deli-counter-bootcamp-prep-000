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
