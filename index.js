var katzDeliLine = []

function takeANumber (katzDeliLine, newName) {
  var name = newName
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ` + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ` + katzDeliLine.splice(0,1) + "."
  }
  katzDeliLine.shift();
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
}
  var lineNotEmpty = `The line is currently: 1. ${katzDeliLine[0]}`
  for (var i = 1; i<katzDeliLine.length; i++) {
    lineNotEmpty += `, ${i+1}. ${katzDeliLine[i]}`
  }
  return lineNotEmpty
}
