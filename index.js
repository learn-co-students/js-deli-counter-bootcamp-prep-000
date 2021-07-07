let katzDeli = []

function takeANumber (katzDeli, name){
// person take # & put at end of line for katzDeli
  katzDeli.push(name)
// return line position  
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing (line){
// nobody in line
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
// return first person in line and remove from line    
  else {
    let name = line[0]  // first person
    line.splice(0,1) // remove name from line
    return "Currently serving " + name + "."
  }
}

function currentLine (line) {
  let lineNumber = []
// nobody in line  
  if (line.length === 0){
    return "The line is currently empty."
  } 
// returns the current line => # and name  
  else {
    for (let i = 0; i < line.length; i++){
      lineNumber += (i + 1) + ". " + line[i] + ', '
    }
    lineNumber = lineNumber.replace(/,\s*$/, "")
    return `The line is currently: ${lineNumber}`
  }  
}