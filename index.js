var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var pos = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(katzDeliLine) {
  if ((katzDeliLine.length > 0)) {
    var personServed = katzDeliLine.shift();
    return `Currently serving ${personServed}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var waiting = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    var aStr = `${i + 1}. ${katzDeliLine[i]}`;
    waiting.push(aStr)
  }
  if (waiting.length === 0) {
    return "The line is currently empty."
  }
  return `The line is currently: ${waiting.join(", ")}`;
}