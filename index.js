function takeANumber(currLine, newPerson){
  currLine.push(newPerson)
  return 'Welcome, ' + newPerson + '. You are number '+ currLine.length + ' in line.'
  
}

function nowServing(currLine){
  if (currLine.length > 0){
    var currPerson = currLine.shift()
    return 'Currently serving ' + currPerson + '.'
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(currLine){
  if (currLine.length > 0){
  var sentence = "The line is currently: "
  for (var i = 0; i < currLine.length; i++){
    sentence = sentence + (i+1) + '. ' + currLine[i]
    if ((i+1) !== currLine.length){
      sentence = sentence + ', '
    }
  }
  return sentence
  } else{
    return 'The line is currently empty.'
  }
  
  
}
