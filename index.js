//Build a function that a new customer will use when entering the deli. The
//function, takeANumber, should acceptthe currentline of people, katzDeliLine,
//along with the new person's name as parameters.  The function should return
//their position in line.
function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
// Build a function nowServing. this function should return the first person
// in line and then remove that ind. from the line. If there is nobody in line,
// it should return "There is nobody waiting to be served!"
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
}
}
//Build a function currentLine that returns the current line.  For example,
//if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine)
//would return "The line is currently: 1. Ada, 2. Grace". If there is nobody
//in line, it should return "The line is empty."
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var lineList = "The line is currently:"
    for (var i = 0; i < line.length; i++) {
      lineList = lineList + ` ${i+1}. ${line[i]},`
    }
  } return lineList.slice(0, -1)
}
