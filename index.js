var lineOfPeole = new Array()

function takeANumber(lineOfPeople, person){
  lineOfPeople.push(person)
  return `Welcome, ${person}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(line){
var firstPersonInLine = ''
if (line.length === 0){
  return "There is nobody waiting to be served!"
}
else {
  firstPersonInLine = line[0]
  line.shift()
}
  return `Currently serving ${firstPersonInLine}.`
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  }
  else {
    var person = line[0]
    var lineOfPeople = `The line is currently: 1. ${person}`
    for (var count = 1; count < line.length; count++){
      person = line[count]
      lineOfPeople += `, ${count + 1}. ${person}`
    }
    return lineOfPeople
  }
}
