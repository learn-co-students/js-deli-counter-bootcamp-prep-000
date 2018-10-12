/*
function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var message = "The line is currently: "
    let i = 0
    while (i < line.length) {
      if (i === line.length-1) {
        message += `${i+1}. ${line[i]}`
        i++
      } else {
        message += `${i+1}. ${line[i]}, `
        i++
      }
  }
  return message
  }
}
*/










//redoing these for practice


function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

/*
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var message = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      message += `${i+1}. ${line[i]}`
      if (i < line.length - 1) {
        message += ", "
      }
    }
    return message
  }
}    */

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var message = "The line is currently: "
    for (let i = 0; i < line.length; i++) {
      message += `${i+1}. ${line[i]}, `
    }
    return message.slice(0, message.length - 2)
  }
}