function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var string = `The line is currently: 1. ${katzDeliLine[0]}`;
  for (let i = 1; i < katzDeliLine.length; i++) {
    string += `, ${i+1}. ${katzDeliLine[i]}`;
    }
    return string;
}