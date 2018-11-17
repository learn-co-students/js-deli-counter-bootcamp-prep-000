var deliLine = [] // Deli opens! No customers yet.

function takeANumber(deliLine, newPerson) {
  deliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(deliLine) {
  while (deliLine.length >= 0)
      if (deliLine.length === 0) {
    return "The line is currently empty."
      } else {
          var lineCount = 0
          var announcement = []
          while (lineCount < deliLine.length) {
            announcement.push(` ${lineCount+1}. ${deliLine[lineCount]}`);
            lineCount++
          }
      return `The line is currently:${announcement}`
  }
}
