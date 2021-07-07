
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson) + 1} in line.`
}


function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

// 3. Build a function `currentLine` that returns the current line. For example,
// if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would
// return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should
// return `"The line is currently empty."`

function currentLine(katzDeliLine) {
var result = `The line is currently: 1. ${katzDeliLine[0]}`
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else if (katzDeliLine.length === 1) {
    return result;
  } else {
    for(var i = 1; i < katzDeliLine.length; i++) {
      result = result + `, ${katzDeliLine.indexOf(katzDeliLine[i]) + 1}. ${katzDeliLine[i]}`
    }
    return result;
  }
}
