var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katz) {
  if (katz.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katz.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var newLine = []
  for (let i = 0, j = line.length; i < j; i++) {
    newLine.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${newLine.join(', ')}`
};
