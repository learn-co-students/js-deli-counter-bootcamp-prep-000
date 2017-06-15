var katzDeli = []

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName)
  var lineLength = katzDeliLine.length
  return ("Welcome, " + newName + ". You are number " + lineLength + " in line.")
}

function nowServing(deliLine){
  var firstPerson = deliLine.slice(0, 1)
  deliLine.shift()
  if (deliLine.length > 0){
    return ("Currently serving " + firstPerson + ".")
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line){
  if (line.length > 0){
    return ("The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2])
  } else {
    return "The line is currently empty."
  }
}
