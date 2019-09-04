var katzDeli = []

function takeANumber(katzDeliLine, p){
  katzDeliLine.push(p)
  return ("Welcome, " + p + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    var lineNames = []
    for(var n = 0; n < katzDeliLine.length; n++){
      lineNames.push(n + 1 + ". " + katzDeliLine[n])
    }
    return ("The line is currently: " + lineNames.join(", "))
  }
}