var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var string = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length - 1; i++) {
      string = string + (i + 1) + `. ${katzDeliLine[i]}, `;
    }
    string = string + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`
  }
  return string;
}