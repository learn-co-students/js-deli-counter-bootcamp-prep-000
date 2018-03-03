
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var linestring = []
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; ++i) {
      var position = i + 1
      linestring.push(" " + position + ". " + katzDeliLine[i])
      
    }
    return "The line is currently:" + linestring
  } else {
    return "The line is currently empty."
  }
}