function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson)
  return("Welcome, "+newPerson+". You are number "+currentLine.length+" in line.")
  return currentLine
}

function nowServing(currentLine){
  if(currentLine.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    return("Currently serving "+currentLine.shift()+".")
    return currentLine
  }
}

function currentLine(currentLine){
  if(currentLine.length < 1){
    return "The line is currently empty."
  } else {
    var string = "The line is currently: "
    let counter = 1
    for(let i = 0; i < currentLine.length; i++){
      string = string + counter + ". " + currentLine[i]
      counter++
      if (counter <= currentLine.length){
        string += ", "
      }
    }
    return string
  }
}
