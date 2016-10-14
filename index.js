var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
};

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  }

  var numberAndName = [];

  for(var i = 0, n = line.length; i < n; i++) {
    numberAndName.push(`${i + 1}. ${line[i]}`);
  }
  return `The line is currently: ${numberAndName.join(', ')}`
}
