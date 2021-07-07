
function takeANumber(people, person) {
  people.push(person)
  return `Welcome, ${person}. You are number ${people.length} in line.`
}

function nowServing(people) {
  if(people.length === 0){
    return 'There is nobody waiting to be served!'
  }

  return `Currently serving ${people.shift()}.`
}

function currentLine(people) {

  if(people.length === 0) {
    return 'The line is currently empty.'
  }

  var lineAsString = `The line is currently: 1. ${people[0]}`
  for(var i=1; i<people.length; i++) {
    lineAsString += `, ${i+1}. ${people[i]}`
  }

  return lineAsString
}
