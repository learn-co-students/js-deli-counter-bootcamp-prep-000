var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var line = katzDeliLine.length
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${line+1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var firstInLine = katzDeliLine[0]
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }
  else {
    var returnArray = []
    for (let i=0; i<line.length; i++) {
      var spot = i + 1
      returnArray.push(`${spot}. ` + `${line[i]}`)
    }
    var returnString = "The line is currently: "
    for (let k=0; k<returnArray.length-1; k++) {
      returnString = returnString + returnArray[k] + ", "
    }
    returnString = returnString + returnArray[line.length - 1]
  }
  return returnString
}
