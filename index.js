var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently:"
  if (katzDeliLine.length === 0) {
    line = "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line = `${line} ${i+1}. ${katzDeliLine[i]},`;
    }
    line = line.substring(0, line.length - 1);
  }
  return line;
}
