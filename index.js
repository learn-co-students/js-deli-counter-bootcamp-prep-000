function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson)
  var newPersonPosition = currentLine.length
  var welcomeMessage = 'Welcome, ' + newPerson + '. You are number ' + newPersonPosition + ' in line.'
  return welcomeMessage
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine[0]
  katzDeliLine.shift()
  var firstPersonMessage = 'Currently serving ' + firstPerson + '.'
  return firstPersonMessage
  } else{
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(peopleArray) {
  var peopleList = 'The line is currently: '
  var lineLength = peopleArray.length
  if (lineLength > 0){
    for(let i = 0; i < lineLength; i++) {
     var positionNumber = i + 1
     if (i < lineLength - 1) {
       peopleList = peopleList + positionNumber + '. ' + peopleArray[i] + ', '
     } else {
       peopleList = peopleList + positionNumber + '. ' + peopleArray[i]
     }
    }
  } else {
    return 'The line is currently empty.'
  }
  return peopleList
}