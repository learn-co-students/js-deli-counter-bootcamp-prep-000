var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine.shift()
    return "Currently serving " + name + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var phrase = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      var number = i + 1
      phrase = phrase + number + ". " + line[i]
      if (i < line.length - 1) {
        phrase = phrase + ", "
      }
    }
    return phrase
  } else {
    return "The line is currently empty."
  }
}
