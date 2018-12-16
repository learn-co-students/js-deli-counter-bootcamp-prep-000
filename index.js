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
    lineOfPeople = lineOfPeople.slice(1)
    return firstPerson
  } else {
    return "There is nobody waiting to be served!"
  }
}