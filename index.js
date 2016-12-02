var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}

function nowServing(katzDeliLine) {
  var name;
  if (katzDeliLine.length > 0) {
    name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      katzDeliLine.push(` ${i + 1}. ${line[i]}`)
    }
    return `The line is currently:`+ katzDeliLine
  } else {
    return "The line is currently empty."
  }
}
