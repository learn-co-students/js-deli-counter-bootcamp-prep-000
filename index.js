var katzDeliLine = [];
var lengthOfLine;
var firstInLine;
var allPeopleInLine = "";

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  lengthOfLine = katzDeliLine.length
  return `Welcome, ${name}. You are number ${lengthOfLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    firstInLine = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i=0; i < katzDeliLine.length ; i++) {
      allPeopleInLine = allPeopleInLine + (i+1) + ". " + katzDeliLine[i] + ", "
    }
    
    return "The line is currently: " + allPeopleInLine.slice(0,allPeopleInLine.length - 2)
  }
}