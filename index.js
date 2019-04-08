function takeANumber(katzDeliLine, Name) {
  katzDeliLine.push(Name) //pushes name into array
  return (`Welcome, ${Name}. You are number ${katzDeliLine.length} in line.`) //creates statement out of array
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var FirstInLine = katzDeliLine.shift() //returns the last element
    return `Currently serving ${FirstInLine}.`
  }
}

function currentLine(LineOfPeople) {
  if (LineOfPeople.length === 0) {
    return "The line is currently empty."
  } else {
    var lineNum = []; //create new empty array to put stuff in
    for (var i = 0; i < LineOfPeople.length; i++) { //we know how long
      lineNum.push(` ${i + 1}. ${LineOfPeople[i]}`) //ex. {1. Bill}
    }
  return `The line is currently:${lineNum}` //the line is currently...
  }
}