function takeANumber(lineOfPeople, newPerson){
  lineOfPeople.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(lineOfPeople){
  var lineStatus = 'The line is currently'
  if(lineOfPeople.length > 0){
    lineStatus +=': '
    for(var i = 0; i < lineOfPeople.length; i++){
      if(i != lineOfPeople.length - 1)
        lineStatus += `${i}. ${lineOfPeople[i]}, `
      else
        lineStatus += `${i}. ${lineOfPeople[i]}`
    }
    return lineStatus
  } else {
    return "The line is currently empty."
  }
}
