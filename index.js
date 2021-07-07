var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(`${newName}`);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  var line = []
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for(var i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${line}`
  }
}
