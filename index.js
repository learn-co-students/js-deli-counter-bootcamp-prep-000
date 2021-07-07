function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  var nameIndex = katzDeliLine.indexOf(name) +1
  return `Welcome, ${name}. You are number ${nameIndex} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var serving = katzDeliLine[0];
  katzDeliLine.shift()
  return `Currently serving ${serving}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line) {
  var newLine = "The line is currently: "
  if (line.length > 0) {
    for (var i=0; i<line.length;i++) {
      newLine += i+1 + ". " + line[i] + ", "
    } return newLine.slice(0,-2)
  }
  
  else {
    return "The line is currently empty."
  }
}  