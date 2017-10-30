var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine.shift();
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${name}.`;
}

function currentLine(katzDeliLine) {
  var waitLine = "The line is currently:";
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    waitLine = waitLine + ` ${i + 1}. ${katzDeliLine[i]},`;
    }
    waitLine = waitLine.slice(0, waitLine.length - 1);
    return waitLine;
}
