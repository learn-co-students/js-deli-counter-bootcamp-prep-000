function takeANumber(katzDeli,name) {
  katzDeli.push(name)
  var line_position = katzDeli.length
  var result = "Welcome, " + name + ". You are number " + line_position + " in line."
  return (result)
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var next = "Currently serving " + deliLine[0] + "."
    deliLine.shift()
    return (next)
  }
  else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  var line = ''
  var line_minus_last_comma = ''
  var line_index = 0

  if (katzDeliLine.length === 1) {
    line = "The line is currently: 1. " + katzDeliLine[0]
    return (line)
  } else if (katzDeliLine.length > 1) {
      line = "The line is currently: "
      for (var i=0; i < katzDeliLine.length; i++) {
        line_index = i + 1
        line += line_index + ". " + katzDeliLine[i] + ", "
      }
      line_minus_last_comma = line.slice(0,-2)
      return (line_minus_last_comma)
    } else {
      return ("The line is currently empty.")
    }
}
