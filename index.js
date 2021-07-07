var katzDeliLine = []

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName)
  return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var tempLine = Object.assign({}, katzDeliLine)
    katzDeliLine.shift()
    return "Currently serving " + tempLine[0] + "."
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else{
    var n = 0
    var linestatement = "The line is currently:"
    while(n < katzDeliLine.length - 1){
      linestatement = linestatement + " " + (n + 1) + ". " + katzDeliLine[n] + ","
      n++
    }
    linestatement = linestatement + " " + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1]
    return linestatement
  }
}