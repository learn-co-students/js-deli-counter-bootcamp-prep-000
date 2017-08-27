
function takeANumber(lineOfPeople, newPerson){
  //for (var i = 0; i < lineOfPeople.length; i++) {
  //  if (lineOfPeople[i] === newPerson) {
  //    var spot = i+1
  //    i = lineOfPeople.length
  //  }
  //}
  lineOfPeople.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + lineOfPeople.length + " in line."
}

function nowServing(currentLine){
  var linePerson = ""
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!"
  }
    else {
      linePerson = currentLine[0]
      currentLine.shift()
      return "Currently serving " + linePerson + "."
    }
}

function currentLine(line){
  var lineRead = ""
  if (line.length === 0 ){
    return "The line is currently empty."
  }
  for(var i = 0; i<line.length ; i++){
    lineRead = lineRead + `${i+1}` + ". " + line[i] + ", "
  }
  return "The line is currently: " + lineRead.substr(0, lineRead.length -2)
}
