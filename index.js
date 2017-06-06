function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  console.log(katzDeliLine)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) return "There is nobody waiting to be served!"
  var serving = katzDeliLine.shift()
  console.log(`removing: ${serving}`)
  return `Currently serving ${serving}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) return "The line is currently empty."

  var str = "The line is currently:"
  for(var i=0;i<katzDeliLine.length;i++) {
    var pos = i + 1
    str = str + ` ${pos}. ${katzDeliLine[i]}`
    if (i < katzDeliLine.length-1) str = str + ","
  }
  return str
}
