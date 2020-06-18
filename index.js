

function takeANumber(line, name) {
  
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = line.shift(1)
    return `Currently serving ${serving}.`
  }
}

function currentLine(line) {
  
  var currentLine = "The line is currently: ";
  
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++) {
      if (i === parseInt(line.length)-1) {
        currentLine = currentLine + `${parseInt(i) + 1}. ${line[i]}`
      } else {
        currentLine = currentLine + `${parseInt(i) + 1}. ${line[i]}, `
      }
    }
    return currentLine
  }
}

