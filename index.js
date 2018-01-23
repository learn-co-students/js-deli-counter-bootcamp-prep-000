
var katzDeli = [];

function takeANumber(katzDeliLine, newname) {
      katzDeliLine.push(newname);
    var position = katzDeliLine.indexOf(newname) + 1;
    return `Welcome, ${newname}. You are number ${position} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
     return "Currently serving " + katzDeliLine.shift() + "."   // we use return here
  }                                           // blabla.shift() not only removes first element, but also prints it
  else {
    return "There is nobody waiting to be served!"
  }
  return
}

function currentLine(katzDeliLine)  {
  var line = `The line is currently: 1. ${katzDeliLine[0]}`
  if (katzDeliLine.length > 0) {
    for (let i = 1, l = katzDeliLine.length; i < l; i++)  {
      var line = line + `, ${i + 1}. ${katzDeliLine[i]}`
    }
    return line
  }
  else {
    return "The line is currently empty."
  }
}
