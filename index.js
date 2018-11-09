function takeANumber(deliLine, newPerson){
  var string ="Welcome, "+ newPerson +". You are number " + (deliLine.length+1).toString() + " in line."
  deliLine.push(newPerson)
  return string
}

function nowServing(deliLine){
  var firstPerson

  if (deliLine.length > 0){
    firstPerson = deliLine.shift()
    return "Currently serving " + firstPerson +"."
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine){
  var order = ""
  var i = 0
  
  if (deliLine.length === 0){
    return "The line is currently empty."
  }else{
    do {
      if (i === 0){
        order += 1 +"."+" "+deliLine[i]
        i++
      }else{
        order += ", "+(i+1)+"."+" "+deliLine[i]
        i++
      }
    }while (deliLine.length>0 && i<deliLine.length)
  }
  
  return "The line is currently: " + order 
}