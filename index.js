function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var status = "The line is currently:"
    var i = 1
    while (line.length > 0) {
      status += ` ${i++}. ${line.shift()}`
      if (line.length > 0) {
        status += ','
      }
    }
    return status
  } else {
    return "The line is currently empty."
  }
  
}
