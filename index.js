function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
  var n = (katzDeliLine.length);
    return `Welcome, ${name}. You are number ${n} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length == 0) {
        return "There is nobody waiting to be served!";
  }  else {
        return `Currently serving ${[deliLine.shift()]}.`;

  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
        return "The line is currently empty.";
}
  else {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  }
}
