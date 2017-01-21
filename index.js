var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!";
    } else {
        var deliLine = katzDeliLine[0];
        katzDeliLine.shift();
        return `Currently serving ${deliLine}.`;
    }
}

function currentLine(line) {
    if (line.length === 0) {
        return "The line is currently empty.";
    } else {
        var newLine = "The line is currently: "
        for (var i = 0; i < line.length-1; i++) {
            newLine = newLine + `${i + 1}. ${line[i]},`
        }
        return newLine + `${katzDeli.length}. ${katzDeli[katzDeli.length]}`;
    }
}

function currentLine(katzDeli) {
if (katzDeli.length === 0) {
  return "The line is currently empty."
} else {
  var myString = "The line is currently:"
  for (let i=0; i<katzDeli.length-1; i++) {
    myString = myString + ` ${i+1}. ${katzDeli[i]},`
    }
  } return myString + ` ${katzDeli.length}. ${katzDeli[katzDeli.length-1]}`
}
