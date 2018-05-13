
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) { 
    let currentlyServe = katzDeliLine.shift()
  return `Currently serving ${currentlyServe}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  let queueNumber = katzDeliLine.length
  let line = "The line is currently: "
  for (let i = 0; i < katzDeliLine.length; i++) {
     line += (i + 1) + ". " + katzDeliLine[i]
     if (i < queueNumber - 1) {
       line += ", "
     }
  }
  return line; 
}