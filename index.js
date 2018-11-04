function takeANumber(currentLine, newPerson){
  var string ="Welcome, "+ newPerson +". You are number " + (currentLine.length+1).toString() + " in line."
  currentLine.push(newPerson)
  return string
}

function nowServing(currentLine){
  var firstPerson

  if (currentLine.length > 0){
    firstPerson = currentLine.shift()
    return "Currently serving " + firstPerson +"."
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(currentLine){
  var order = ""
  var i = 0
  
  if (currentLine.length === 0){
    return "The line is currently empty."
  }else{
    do {
      if (i === 0){
        order += 1 +"."+" "+currentLine[i]
        i++
      }else{
        order += ", "+(i+1)+"."+" "+currentLine[i]
        i++
      }
    }while (currentLine.length>0 && i<currentLine.length)
  }
  
  return "The line is currently: " + order 
}