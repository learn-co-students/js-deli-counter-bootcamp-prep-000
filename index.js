var katzDeliLine = [];

function takeANumber(katzDeliLine, NuName) {
  katzDeliLine.push(NuName)
  var i = katzDeliLine.length
  return `Welcome, ${NuName}. You are number ${i} in line.`
}

function nowServing(katzDeliLine) {
  var i = katzDeliLine.length
   if (i > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."
  }  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var i = katzDeliLine.length
  var Numberd = [];
  var k = i - 1
  if (k >= 0) {
    for (k = 0; k < katzDeliLine.length; k++) {
      Numberd.push(" " + (k+1) + ". " + katzDeliLine[k])
    }
     return "The line is currently:" + Numberd
  }
    else {
     return "The line is currently empty."
    }
}
