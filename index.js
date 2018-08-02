function takeANumber(line, name) {
  line.push(name)
  return('Welcome, ' + name +  '. You are number ' + line.length + ' in line.')
}

function nowServing(line) {
  if (line.length > 0) {
    var name = line[0]
    line.shift()
  return ( "Currently serving " + name + ".")
  } else {
    return("There is nobody waiting to be served!")
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var currentLine = [`The line is currently: 1. ${line[0]}`]
    for (let i = 1; i < line.length; i++) {
    currentLine.push(' ' + (i+1) + ". " + line[i] )
    } 
    return currentLine.toString()
    
  } else {
    return ("The line is currently empty.")
  }
}