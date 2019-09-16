var katzDeliLine = [];

function takeANumber(katzDeliLine, newGuest) {
  katzDeliLine.push(newGuest);
  return (`Welcome, ${newGuest}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(deliLine) {
  if(deliLine.length === 0) return ("There is nobody waiting to be served!")

  return (`Currently serving ${deliLine.shift()}.`)
}




function currentLine(line) {
  if (line.length === 0) return ("The line is currently empty.")

  let i=0
  var newarrayy = []
  while (i < line.length) {
    newarrayy.push(` ${i+1}. ${line[i]}`)
    i++
  }
    return (`The line is currently:${newarrayy}`)
  }
