var katzDeli = [];
var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';

  } else {
    var currentlyserving = katzDeliLine.slice(0,1);
    katzDeliLine.shift();
    return `Currently serving ${currentlyserving}.`;

  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }

  const leftOnLine = []

  for (var i = 0, l = line.length; i < l; i++) {
    leftOnLine.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${leftOnLine.join(', ')}`
}
