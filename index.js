var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + "."
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var currentLine = []
  if(katzDeliLine.length > 0){
  for(var i=0; i < katzDeliLine.length; i++){
    currentLine.push(" " + (i + 1) + ". " + katzDeliLine[i])
  }
  return "The line is currently:" + currentLine
  }
  else{  
    return "The line is currently empty."
  }
}