function takeANumber(people, newPerson) {
  people.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${people.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    let currentPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentPerson}.`
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    let announcement = REFORMAT NAMES INTO NUMBERED LIST
    return `Currently serving ${currentPerson}.`
  }
}