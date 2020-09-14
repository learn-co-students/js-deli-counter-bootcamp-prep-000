//1) deli takeANumber adds a person to the line
function takeANumber(deliLine, newPerson){
//adds person
  deliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + (deliLine.length) + " in line.";
}

//nowServing returns "There is nobody waiting to be served!"" when no one is in line
function nowServing(deliLine){
  if (deliLine.length > 0) {
    //returns first element from the array, and then removes it. This changes the length of the array
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
  //created a loop, will loop through each element of the array and add a number that will count
    for(var i = 0; i < deliLine.length; i++) {
      blankMessage.push(`${i+1}. ${deliLine[i]}`)
    }
    return `The line is currently: ${blankMessage.join(', ')}`
}
