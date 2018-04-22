function takeANumber(line, personName) {
  line.push(personName)
  return `Welcome, ${personName}. You are number ` + line.length + ` in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line) {
  
  var lineString
  
  if (line.length === 0) {
    return "The line is currently empty."
  }
  
  for (var i = 0; i < line.length; i++) {
    
    if (i === 0 && line.length !== 0) {
      let j = i + 1
      lineString = "The line is currently: " + j + ". " + line[i]
    }
    
    else {
      let k = i + 1
      lineString = lineString + ", " + k  + ". " + line[i]
    } 
  }
  
  return lineString
}
