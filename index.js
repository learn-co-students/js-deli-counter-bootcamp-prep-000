function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  var serving = katzDeliLine[0]
  katzDeliLine.shift()
  if (katzDeliLine.length > 0){ return `Currently serving ${serving}.`
}  else {
    return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeliLine){
  var i = 0;
  if (katzDeliLine.length > 0){
    while (i < katzDeliLine.length){
      katzDeliLine[i] = (` ${i+1}. ${katzDeliLine[i]}`)
      i++
    }} else {
      return "The line is currently empty."
}
var lineUpdate = `The line is currently:${katzDeliLine}`
  return lineUpdate
}
