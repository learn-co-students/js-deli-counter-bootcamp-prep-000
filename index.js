var katzDeliLine = []

function takeANumber(katzDeliLine, newPerson) {
  var count = katzDeliLine.length
  katzDeliLine[count] = newPerson
  return "Welcome, " + katzDeliLine[count] + ". You are number " + (count+1) + " in line."
}

function nowServing(katzDeliLine) {
  var test = katzDeliLine.length
  if (test===0) {
    return "There is nobody waiting to be served!"
  } else {
      var removed = katzDeliLine.shift()
      return "Currently serving " + removed + "."

      }
}

function currentLine(katzDeliLine) {
  var count = katzDeliLine.length
  if (count === 0) {
    return "The line is currently empty."
  } else {
    var line = ""
    for (let i=0; i<count-1; i++) {
      line = line + " " + (i+1) + ". " + katzDeliLine[i] + ","
      }
      line = line + " " + count + ". " + katzDeliLine[count-1]
    return "The line is currently:" + line
      }
}
