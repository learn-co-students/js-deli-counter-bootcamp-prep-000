function takeANumber(line, newName) {
  line.push(newName)

  return `Welcome, ${newName}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift(0)}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  var lineList = []

  for (var i = 0, l = line.length; i < l; i++) {
    lineList.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${lineList.join(', ')}`
};
