var katzDeliLine = [];

function takeANumber(deliLine, person) {
  deliLine.push(person)
  return `Welcome, ${person}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  var personServed;
  
  if (deliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }

  personServed = deliLine.shift()
  
  return `Currently serving ${personServed}.`
}

function currentLine(deliLine) {
  var i
  var theLine = "The line is currently: "

  if (deliLine.length == 0) {
    return "The line is currently empty."
  }

  for(i = 0; i < deliLine.length; i++)
  {
    var placeInLine = i + 1
    theLine += `${placeInLine}. ${deliLine[i]}${(placeInLine) == deliLine.length ? "" : ", "}`
  }

  return theLine
}