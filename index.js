var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var a = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${a} in line.`
}

function nowServing(katzDeliLine) {
  var b = katzDeliLine[0];
  if (katzDeliLine.length > 0) {
    katzDeliLine.splice(0, 1);
  return `Currently serving ${b}.`;
}
  else {
    return "There is nobody waiting to be served!"
    }
}

function currentLine(line) {
  var d = line.length
  if (line.length > 0) {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;
  }
  else {
    return "The line is currently empty.";
  }
}
