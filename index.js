function takeANumber(katzDeliLine, name) {
  var i = katzDeliLine.length;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${i + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`;
} else {
  return "There is nobody waiting to be served!";
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var i = 0;
    return `The line is currently: ${i + 1}. ${katzDeliLine[i]}, ${i + 2}. ${katzDeliLine[i + 1]}, ${i + 3}. ${katzDeliLine[i + 2]}`
  } else {
    return "The line is currently empty.";
  }
}
