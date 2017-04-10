var katzDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length +  " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return "There is nobody waiting to be served!"
  }  else {
    var removed = katzDeliLine[0]
    var katzDeliLine = katzDeliLine.shift()
    return "Currently serving " + removed + "."
  }
}

function currentLine(katzDeliLine) {
var line = "The line is currently: "
var num = 1
var index = 0
  if (katzDeliLine[0] === undefined) {
    return "The line is currently empty."
  } else {
    while(index < katzDeliLine.length - 1) {
      var line = line + num + ". " + katzDeliLine[index] + ", "
      var num = num + 1
      var index = index + 1
    }
    var line = line + katzDeliLine.length + ". " + katzDeliLine[(katzDeliLine.length - 1)]
    return line
  }
}
