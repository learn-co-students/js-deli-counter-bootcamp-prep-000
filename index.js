//1) deli takeANumber adds a person to the line
function takeANumber(deliLine, newPerson){
  var i = 0
//adds person
  deliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + (deliLine.length) + " in line.";
}

//nowServing returns "There is nobody waiting to be served!"" when no one is in line
function nowServing(deliLine){
  var i = 0
  if (deliLine.length > 0) {
    return "Currently serving " + deliLine.shift() + ".";
  }
  if (deliLine.length < 1)  {
    return "There is nobody waiting to be served!"
  }
}

//returns currentLine as a string
function currentLine(deliLine){
  var blankMessage= []
    if(deliLine.length < 1) {
    return "The line is currently empty."
  }
    for(var count = 0; count < deliLine.length; count++) {
      blankMessage.push(`${count+1}. ${deliLine[count]}`)
    }
    return `The line is currently: ${blankMessage.join(', ')}`
}
