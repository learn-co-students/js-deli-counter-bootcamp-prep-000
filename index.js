
function takeANumber (katzDeliLine, newCustName) {
  katzDeliLine.push(newCustName)
  var greeting = "Welcome, " + newCustName + ". You are number " + katzDeliLine.length + " in line."
  return greeting
}

function nowServing(katzDeliLine) {
  console.log (">>>>>> initial katzDeli => " + katzDeliLine)
  var nextInline = katzDeliLine.shift()
  if (nextInline === undefined) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + nextInline + '.'
  }
}

function currentLine(katzDeliLine) {
  var lineString = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var i;
    for (i = 0; i < katzDeliLine.length; i++) {
      lineString = lineString + (i+1) + '. ' + katzDeliLine[i] + ", "
    }
    return lineString.substring(0, lineString.length - 2)
  }
}