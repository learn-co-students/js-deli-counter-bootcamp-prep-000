function takeANumber(currentLine, newName) {

  currentLine.push(newName)
  
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.` 
  
}

function nowServing(currentLine) {
 
  if (currentLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else return `Currently serving ${currentLine.shift()}.`
  
}



function currentLine(currentLine) {
  if (currentLine.length < 1) {
    return "The line is currently empty."
  } 
    var numberedLine = []
    for (var i = 0; i < currentLine.length; i++) {
      numberedLine.push(`${i + 1}. ${currentLine[i]}`)
    } return `The line is currently: ${numberedLine.join(", ")}`
 
  }
