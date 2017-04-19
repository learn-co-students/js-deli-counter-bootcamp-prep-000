function takeANumber(katzDeliLine, newPerson) {
  var position = 0
  katzDeliLine.push(newPerson)
  position = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${position} in line.`
};

function nowServing(katzDeliLine) {
  var personServing;
  if (katzDeliLine.length > 0) {
    personServing = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${personServing}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
};

function currentLine(line) {
  var returnString
  if (line.length > 0) {
    returnString = "The line is currently: "
    for (let i = 0; i < line.length; i++) {
      if (i < line.length - 1) {
        returnString = returnString + `${i + 1}. ${line[i]}, `
      }
      else {
        returnString = returnString + `${i + 1}. ${line[i]}`
      }
    }
  }
  else {
    returnString = "The line is currently empty."
  }
  return returnString
};