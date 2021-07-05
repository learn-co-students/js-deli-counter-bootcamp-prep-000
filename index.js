function takeANumber(line, name) {
  line.push(name)
  var pos = line.length
  return "Welcome, " +name+ ". You are number "+pos+" in line."
}

function nowServing(line){
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty."
  } else {
    var message = "The line is currently: 1. " + line[0]
    for (var i = 2; i <= line.length; i++) {
      var message = message + ", " + i + ". " + line[i-1]
    }
    return message
  }
}
