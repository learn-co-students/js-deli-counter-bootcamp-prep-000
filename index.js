var lineOfPeole = new Array()

function takeANumber(lineOfPeople, person){
  lineOfPeople.push(person)
  return `Welcome, ${person}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(lineOfPeople){
var firstPersonInLine = ''
if (lineOfPeople.length === 0){
  return "There is nobody waiting to be served!"
}
else {
  firstPersonInLine = lineOfPeople[0]
  lineOfPeople.shift()
}
  return `Currently serving ${firstPersonInLine}.`
}

function currentLine(lineOfPeople){
  if (lineOfPeople.length === 0){
    return 'The line is currently empty.'
  }
  else {
    var person = lineOfPeople[0]
    var lineMessage = `The line is currently: 1. ${person}`
    for (var count = 1; count < lineOfPeople.length; count++){
      person = lineOfPeople[count]
      lineMessage += `, ${count + 1}. ${person}`
    }
    return lineMessage
  }
}
