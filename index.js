function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }
}

function currentLine(katzDeliLine){
  currentLine = "The line is currently:"
  var i = 0
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    for(var i = 0; i < (katzDeliLine.length - 1); i++ ){
      currentLine = currentLine + " " + (i+1) + ". " + katzDeliLine[i] + ","
    }
  }
    currentLine = currentLine + " " + (i+1) + ". " + katzDeliLine[(katzDeliLine.length-1)]
    return currentLine
}
