var katzDeliLine = [];


function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(line) {
  var theLine = `The line is currently: 1. ${line[0]}`

  if (line.length === 0) {
    return "The line is currently empty."
  }

  else {
    for (var d = 1; d < line.length; d++) {
      theLine = theLine + `, ${d + 1}. ${line[d]}`
    }
    return theLine;
  }

}
