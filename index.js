var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {return `Currently serving ${katzDeliLine.shift()}.`}
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    while(katzDeliLine.length > 0){
    for(var i = 0; i < katzDeliLine.length; i++){
    return `The line is currently: 1. ${katzDeliLine[i]}, 2. ${katzDeliLine[i+1]}, 3. ${katzDeliLine[i+2]}`}
  }}
}
