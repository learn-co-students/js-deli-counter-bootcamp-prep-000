function takeANumber(katzDeliLine,newPerson){
    katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

/*
function nowServing(personInLine){
  personInLine.shift()
  return personInLine
  if (personInLine === 0) { 
    return "There is nobody waiting to be served!"
  }
}
*/


/*
function currentLine(katzDeliLine){
    if (katzDeliLine){
    return `The line is currently ${katzDeliLine}`
  } else (katzDeliLine === 0){
  return "The line is currently empty"
}
}
*/