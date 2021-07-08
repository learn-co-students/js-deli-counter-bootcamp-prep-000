var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0 ){
    return "The line is currently empty."
  } else {
    var str = `The line is currently: 1. ${katzDeliLine[0]}`
    for (var i = 1; i <katzDeliLine.length; i++){
      str = str + `, ${i+1}. ${katzDeliLine[i]}`
    }
    return str
  }
}