function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`
  }
  else
  { 
    return "There is nobody waiting to be served!"
  }
}


function currentLine(line){
  let currentLine = ""
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for(var i = 0; line.length > 0; i++) {
      currentLine += `${i+1}. ${line[i]}`
    }
  
  return `The line is currently:${currentLine}.`
  }
}
// take in an array (line) and check to see the length.
// If the length is 0, return the line is currently empty. 
// otherwise, loop through the array, use index +1 as the position in line. 
// Concatentate onto a string. Return string.