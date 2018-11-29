function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return ("There is nobody waiting to be served!")
  }
  else if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
function currentLine(line) {
  var lineCurrently = []
  if (line.length === 0) {
    return ("The line is currently empty.")
  }
  else {
    for (var i = 0; i < line.length; i++) {
      lineCurrently.push(` ${i+1}. ${line[i]}`)
    }
  return (`The line is currently:${lineCurrently}`)
  }
}
