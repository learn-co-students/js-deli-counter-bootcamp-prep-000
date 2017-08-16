function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return position
}

function nowServing(katzDeliLine){
  var serving
  if (katzDeliLine.length > 0) {
    serving = `Currently serving ${katzDeliLine.shift()}.`
  } else {
    serving = "There is nobody waiting to be served!"
  }
  return serving
}

function currentLine(katzDeliLine){
  var line
  if (katzDeliLine.length === 0) {
    line = "The line is currently empty."
  } else {
    line = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length-1; i++){
        line += `${i+1}. ${katzDeliLine[i]}, `
    }
    line += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
  }
  return line
}
