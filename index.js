// function takeANumber(lineOfPeople, name){
//   lineOfPeople = [...lineOfPeople, name]
//   return `Welcome, ${name}. You are number ${lineOfPeople.length} in line.`
// }

function takeANumber(lineOfPeople, name){
  lineOfPeople.push(name)
  return `Welcome, ${name}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(lineOfPeople){
  if (lineOfPeople.length > 0){
    var firstPerson = lineOfPeople[0]
    lineOfPeople.shift()
    return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(lineOfPeople) {
  var namesOfPeopleOnLine = 'The line is currently:'
  
  if (lineOfPeople > 0){
    for (i = 0; i < lineOfPeople.length; i++) {
      namesOfPeopleOnLine = namesOfPeopleOnLine+ ` ${i+1}. lineOfPeople[i],`
    }
    return namesOfPeopleOnLine
  }else{
    return "The line is currently empty."
  }
}


