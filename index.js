
var katzDeli = []

function takeANumber(line, name) {
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var nextCustomer = line.shift()
    return `Currently serving ${nextCustomer}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var message = "The line is currently: "
    var counter = 0
    while (counter < line.length) {
      message += `${counter + 1}. ${line[counter]}`
      counter += 1
      if (counter < line.length) {
        message += ", "
      }
    }
    return message
  } else {
    return "The line is currently empty."
  }
}