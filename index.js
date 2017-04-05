function takeANumber(katzDeliLine, name) {
  var place = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine) {
var  name = katzDeliLine[0];
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
 katzDeliLine.shift();
  return `Currently serving ${name}.`;
}
}

function currentLine(line) {
var  n = line.length;
var i = 1;
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    return `The line is currently: ${i}. ${line[0]}, ${i + 1}. ${line[1]}, ${n}. ${line[2]}`;
  }
}
