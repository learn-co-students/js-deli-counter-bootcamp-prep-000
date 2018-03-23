function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var positionInLine = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${positionInLine} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var currentLine = 'The line is currently: ';

  for (var i = 0; i < katzDeliLine.length; i++) {
    currentLine += `${i + 1}. ${katzDeliLine[i]}, `
  }
  return currentLine.slice(0, -2);
}
