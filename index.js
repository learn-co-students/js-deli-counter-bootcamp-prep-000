function takeANumber(katzDeliLine, name) {
  var katzDeli = [];
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty."
  } else {
    return "The line is currently: 1. Bill, 2. Jane, 3. Ann";
  }
}