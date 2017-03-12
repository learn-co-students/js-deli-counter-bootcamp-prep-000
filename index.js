var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine[0] === undefined){
    return "There is nobody waiting to be served!"
  }
  else{
  var served = katzDeliLine.shift()
  return `Currently serving ${served}.`
  }

}
function currentLine(katzDeliLine){
if (katzDeliLine[0] === undefined){
  return "The line is currently empty."
}
else{
  while (katzDeliLine.length > 0) {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  }
}
}
