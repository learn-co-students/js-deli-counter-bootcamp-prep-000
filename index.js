function takeANumber(katzDeliLine, otherDeli){
  katzDeliLine.push(otherDeli);
  return "Welcome, " + otherDeli +". You are number " + katzDeliLine.length + " in line."
}

function nowServing(deliLine){
  if (deliLine.length > 0) {
  return "Currently serving " + deliLine.shift() +"."
    }
    else {
     return "There is nobody waiting to be served!"
   }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return "The line is currently: 1. " + katzDeliLine.shift() + ", 2. " + katzDeliLine.shift() + ", 3. " + katzDeliLine.shift()
  }
    else {
      return "The line is currently empty."
    }
}
