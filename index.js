function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${person}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var newLine = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      newLine.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${newLine}`;
  } else {
    return `The line is currently empty.`;
  }
}