function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var n = katzDeliLine.length
  return `Welcome, ${name}. You are number ${n} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    katzDeliLine.shift()
    return `Currently serving Steven.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line){
  if (line.length > 0){
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  }
  else{
    return "The line is currently empty."
  }
}
