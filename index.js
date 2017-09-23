var katzDeli = [];

function takeANumber(katzDeli, name) {
	katzDeli.push(name);
	return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
	var current = katzDeli.shift();
	if (katzDeli.length === 0) {
		return `There is nobody waiting to be served!`;
	} else {
		return `Currently serving ${current}.`;
	}
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return `The line is currently empty.`;
  }
  var line = "The line is currently: ";
	for (var i = 0; i < katzDeli.length; i++) {
		line += `${i + 1}. ${katzDeli[i]}`;
		if (i < katzDeli.length - 1) {
			line += `, `;
		}
	}
  return line;
}
