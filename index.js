function takeANumber(line, name) {
  
  var welcomeMessage
  
  line.push(name)
  
  welcomeMessage = `Welcome, ${name}. You are number ${line.length} in line.`
  
  return welcomeMessage
}

function nowServing (line) {
  
  var emptyMessage = 'There is nobody waiting to be served!'
  var servingMessage = `Currently serving ${line[0]}.`
  
  if (line.length === 0) {
    return emptyMessage 
  } else {
    
    line.shift()
    return servingMessage
  }
}

function currentLine (line) {
  
  var currentMessage = `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  var emptyLineMessage = 'The line is currently empty.'
  
  while (line.length > 0) {
    return currentMessage
  }
  return emptyLineMessage
}