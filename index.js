var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  var serving = katzDeliLine.shift()
  var statement = katzDeliLine.length == 0 ? "There is nobody waiting to be served!"
    : `Currently serving ${serving}.`
  return statement
}

function currentLine(katzDeliLine){
  var currentLineStatus = "The line is currently empty."
  if (katzDeliLine.length > 0){
    currentLineStatus = "The line is currently: "
    for(var i = 0; i < katzDeliLine.length; i++){
      currentLineStatus += `${i+1}. ${katzDeliLine[i]}, `
    }
    var str = currentLineStatus
    currentLineStatus = str.substring(0, str.length - 2)
  }
  return currentLineStatus
}
