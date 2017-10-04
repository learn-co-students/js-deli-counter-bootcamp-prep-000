var katzDeli = []

// takeANumber adds a person to the line
// takeANumber appends the person the end of the line if there are already people on it
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// nowServing returns the line is empty when no one is on line
// nowServing returns an announcement about the person it is serving, and shifts the line:
function nowServing(line){
  if(line.length > 0){
    return `Currently serving ${line.shift()}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}


//currentLine(line) says who is in line when there are people waiting:
//currentLine(line) returns "The line is currently empty." if no one is in line
function currentLine(line){
  if(line.length > 0){
    var list = []
    for(var i = 0; i < line.length; i++){
      list.push(`${i + 1}. ${line[i]}`)
     }
     return `The line is currently: ${list.join(', ')}`
   }
  else {
    return "The line is currently empty."
  }
}
