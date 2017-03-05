var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli, newName) {
	katzDeli.push(`${newName}`);
	otherDeli = [];
	otherDeli.push("Welcome," + (" ") + `${newName}` + (".") + (" ") + "You are number" + (" ") + katzDeli.length + (" ") + "in line.");
return otherDeli;
}


function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var frontOfLine = line[0];
    line.shift();
    return `Currently serving ${frontOfLine}.`;
  }
}


function currentLine(line) {
	var i = 0;
	if (line.length === 0) {
		return "The line is currently empty.";
	} else if (line.length > i) {
		return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
	}
}
