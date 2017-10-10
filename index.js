function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var next = katzDeliLine[0]
    katzDeliLine.shift();
    return "Currently serving " + next + "."
  }
}

function currentLine(line) {
  var c = []
  var i = 0

  if (line.length == 0) {
    return "The line is currently empty."
  } else {

    while (i < line.length) {
      if (i == 0) {
        c[i] = (i + 1) + ". " + line[i]
      } else{
        c[i] = " " + (i + 1) + ". " + line[i]
      }
      i++
    } ;
  }

  return "The line is currently: " + c
}
