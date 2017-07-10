function takeANumber(katzDeliLine, name) {
  //adds name to array
  katzDeliLine.push(name)
  //returns the current position added name
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  //checks if line is empty, returning following string if so
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  //Otherwise return a string telling who is currently being served
  else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine) {
  var tempString = "The line is currently: "
  //checks if line is empty, returning following string if so
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  //Otherwise, add construct a string containing the current state of the line
  else {
    for(let i = 0; i < katzDeliLine.length; i++) {
      tempString += (i + 1) + ". " + katzDeliLine[i]
      if((i + 1) === katzDeliLine.length) {

      }
      else {
        tempString += ", "
      }
    }
    return tempString
  }
}
