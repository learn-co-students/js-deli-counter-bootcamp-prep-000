function takeANumber(katzDeliLine, name) {
  //return position in line (length + 1)
  katzDeliLine.push(name)
  var yourPlace =  katzDeliLine.length
  return `Welcome, ${name}. You are number ${yourPlace} in line.`
}

function nowServing(katzDeliLine) {
  //return the first person in line and then remove that individual from the line
  //if empty array, return "There is nobody waiting to be served!"
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  //returns place and name in line
  //EX: "The line is currently: 1. Ada 2. Grace"
  //if no line, return "The line is currently empty"
  var nowInLine = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
          nowInLine.push(`${i + 1}. ${katzDeliLine[i]}`)
      } else {
      nowInLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
      }
    }
  return `The line is currently: ${nowInLine}`
  }
}
