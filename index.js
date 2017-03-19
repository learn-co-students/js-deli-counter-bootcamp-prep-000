var katzDeli = []

function takeANumber(katzDeliLine, newname){
  katzDeliLine.push(newname)
  return `Welcome, ${newname}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + katzDeliLine.shift() + "."
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  var line = "The line is currently: "
  for (let i=0;i<katzDeliLine.length;i++){
    line = line + `${i+1}. ${katzDeliLine[i]}, `
  }
  return line.slice(0,-2)
}
