function takeANumber (line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing (katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine[0] // Steven is the first person so index = 0;
    katzDeliLine.splice(0, 1)
    return "Currently serving " + name + "."
  }
}

var katzDeliLine = []

function currentLine (katzDeliLine) {
  var oneline = []
  if(katzDeliLine.length === 0 ) {
    return "The line is currently empty."
  } else {
    for(let i = 0; i<katzDeliLine.length; i++) {
      oneline += (i + 1) + ". " + katzDeliLine[i]  + ", "
    }
      oneline = line.slice(0, line.length - 2) 
  }
    return "The line is currently: " + oneline 
}
