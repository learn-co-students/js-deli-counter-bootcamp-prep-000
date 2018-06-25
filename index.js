var katzDeli = [];
function takeANumber(line, name) {
  katzDeli = line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length != 0) {
    var serving = line[0]
    line.shift()
    return  `Currently serving ${serving}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var lineString = "The line is currently: ";
  if (line.length != 0) {
    for (var i = 1; i <= line.length ; i++) {
        lineString = lineString + i + ". " + line[i-1] + ", ";
    }
  } else {
    return "The line is currently empty."
  }
  return lineString.slice(0, -2)
}
