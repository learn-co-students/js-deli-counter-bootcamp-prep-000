function takeANumber(line, person) {
  line.push(person)
  return "Welcome, " + person + ". You are number " + (line.length) + " in line."
}

function nowServing(line) {
    if (line.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      var person = line.shift()
      return `Currently serving ${person}.`
    }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineStatement = "The line is currently: "
    for (let i = 0; i < line.length; i++) {
      lineStatement += `${i+1}. ${line[i]}`
      if (i < line.length - 1) {
        lineStatement += ', '
      }  
    }
    return lineStatement
  }
}