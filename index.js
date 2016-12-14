var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli == "") {
    return "There is nobody waiting to be served!";
  } else { return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(line) {
  if (line == "") {
    return "The line is currently empty."
  } else { return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;

  }
}
